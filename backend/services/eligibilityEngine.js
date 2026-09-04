/**
 * Smart Eligibility Engine
 * Evaluates user eligibility for schemes based on multiple criteria
 */

class EligibilityEngine {
  /**
   * Calculate eligibility score and detailed results
   * @param {Object} userProfile - User profile data
   * @param {Object} scheme - Scheme eligibility criteria
   * @returns {Object} Eligibility result with score and reasons
   */
  static evaluateEligibility(userProfile, scheme) {
    const result = {
      eligible: true,
      eligibilityScore: 100, // Start with 100, deduct for each criterion not met
      reasons: [],
      missingCriteria: [],
      warnings: [],
      matchedCriteria: []
    };

    if (!scheme.eligibility) {
      return result;
    }

    const elig = scheme.eligibility;
    let deductions = 0;

    // Age Check
    if (elig.ageMin !== undefined) {
      const userAge = this.calculateAge(userProfile.dateOfBirth);
      if (userAge < elig.ageMin) {
        result.missingCriteria.push(`Age must be at least ${elig.ageMin}`);
        result.eligible = false;
        deductions += 25;
      } else {
        result.matchedCriteria.push(`Age requirement met (${userAge})`);
      }
    }

    if (elig.ageMax !== undefined) {
      const userAge = this.calculateAge(userProfile.dateOfBirth);
      if (userAge > elig.ageMax) {
        result.missingCriteria.push(`Age must not exceed ${elig.ageMax}`);
        result.eligible = false;
        deductions += 25;
      } else {
        result.matchedCriteria.push(`Age upper limit met (${userAge})`);
      }
    }

    // Income Check
    if (elig.maxIncome !== undefined && userProfile.income) {
      if (userProfile.income > elig.maxIncome) {
        result.missingCriteria.push(`Annual income must not exceed ₹${elig.maxIncome.toLocaleString()}`);
        result.eligible = false;
        deductions += 30;
      } else {
        result.matchedCriteria.push(`Income criteria met (₹${userProfile.income.toLocaleString()})`);
      }
    }

    if (elig.minIncome !== undefined && userProfile.income) {
      if (userProfile.income < elig.minIncome) {
        result.missingCriteria.push(`Annual income must be at least ₹${elig.minIncome.toLocaleString()}`);
        result.eligible = false;
        deductions += 20;
      } else {
        result.matchedCriteria.push(`Minimum income met`);
      }
    }

    // Category Check
    if (elig.category && elig.category.length > 0) {
      if (userProfile.category && elig.category.includes(userProfile.category)) {
        result.matchedCriteria.push(`Category '${userProfile.category}' is eligible`);
      } else if (userProfile.category) {
        result.missingCriteria.push(`Your category '${userProfile.category}' does not match eligible categories: ${elig.category.join(', ')}`);
        result.eligible = false;
        deductions += 30;
      }
    }

    // Caste Check (SC/ST/OBC)
    if (elig.caste && elig.caste.length > 0) {
      if (userProfile.caste && elig.caste.includes(userProfile.caste)) {
        result.matchedCriteria.push(`Caste category eligible`);
      } else if (userProfile.caste) {
        result.missingCriteria.push(`Your caste category does not match scheme requirements`);
        result.eligible = false;
        deductions += 15;
      }
    }

    // Gender Check
    if (elig.gender && elig.gender.length > 0 && !elig.gender.includes('Any')) {
      if (userProfile.gender && elig.gender.includes(userProfile.gender)) {
        result.matchedCriteria.push(`Gender requirement met`);
      } else if (userProfile.gender) {
        result.missingCriteria.push(`Scheme is for: ${elig.gender.join(', ')}`);
        result.eligible = false;
        deductions += 20;
      }
    }

    // Employment Status Check
    if (elig.employmentStatus && elig.employmentStatus.length > 0) {
      if (userProfile.employmentStatus && elig.employmentStatus.includes(userProfile.employmentStatus)) {
        result.matchedCriteria.push(`Employment status eligible`);
      } else if (userProfile.employmentStatus) {
        result.missingCriteria.push(`Employment status must be: ${elig.employmentStatus.join(', ')}`);
        result.eligible = false;
        deductions += 20;
      }
    }

    // Education Check
    if (elig.education && elig.education.length > 0) {
      if (userProfile.education && elig.education.includes(userProfile.education)) {
        result.matchedCriteria.push(`Education requirement met`);
      } else if (userProfile.education) {
        result.missingCriteria.push(`Required education: ${elig.education.join(', ')}`);
        deductions += 15;
      }
    }

    // Disability Check
    if (elig.disability && userProfile.hasDisability !== true) {
      result.missingCriteria.push(`Scheme requires registered disability`);
      result.eligible = false;
      deductions += 50;
    } else if (elig.disability && userProfile.hasDisability) {
      result.matchedCriteria.push(`Disability requirement met`);
    }

    // Bank Account Check
    if (elig.bankAccountRequired && !userProfile.bankAccountNumber) {
      result.missingCriteria.push(`Valid bank account number required`);
      result.eligible = false;
      deductions += 20;
    } else if (elig.bankAccountRequired && userProfile.bankAccountNumber) {
      result.matchedCriteria.push(`Bank account verified`);
    }

    // Aadhar Check
    if (elig.aadharRequired && !userProfile.aadharNumber) {
      result.missingCriteria.push(`Aadhaar card required`);
      result.eligible = false;
      deductions += 20;
    } else if (elig.aadharRequired && userProfile.aadharNumber) {
      result.matchedCriteria.push(`Aadhaar verified`);
    }

    // Custom Rules
    if (elig.customRules && elig.customRules.length > 0) {
      elig.customRules.forEach(rule => {
        const userValue = userProfile[rule.field];
        let ruleMet = false;

        switch (rule.operator) {
          case 'equals':
            ruleMet = userValue === rule.value;
            break;
          case 'greaterThan':
            ruleMet = userValue > rule.value;
            break;
          case 'lessThan':
            ruleMet = userValue < rule.value;
            break;
          case 'includes':
            ruleMet = Array.isArray(rule.value) ? rule.value.includes(userValue) : rule.value === userValue;
            break;
          case 'contains':
            ruleMet = userValue && String(userValue).includes(String(rule.value));
            break;
        }

        if (ruleMet) {
          result.matchedCriteria.push(`Custom rule met: ${rule.field}`);
        } else {
          result.missingCriteria.push(`Custom rule failed: ${rule.field}`);
          deductions += 10;
        }
      });
    }

    // Calculate final score
    result.eligibilityScore = Math.max(0, 100 - deductions);

    // Generate summary
    if (result.eligible) {
      result.reasons.push(`✅ You appear to be eligible for this scheme`);
      result.reasons.push(`Matched ${result.matchedCriteria.length} out of ${result.matchedCriteria.length + result.missingCriteria.length} criteria`);
    } else {
      result.reasons.push(`❌ You currently don't meet all eligibility criteria`);
      result.reasons.push(`Missing ${result.missingCriteria.length} criteria`);
    }

    return result;
  }

  /**
   * Calculate age from date of birth
   */
  static calculateAge(dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  }

  /**
   * Get recommended schemes for a user
   */
  static async recommendSchemes(userProfile, allSchemes, topN = 10) {
    const recommendations = allSchemes.map(scheme => ({
      scheme,
      eligibility: this.evaluateEligibility(userProfile, scheme)
    }))
    .filter(item => item.eligibility.eligible || item.eligibility.eligibilityScore >= 70)
    .sort((a, b) => b.eligibility.eligibilityScore - a.eligibility.eligibilityScore)
    .slice(0, topN);

    return recommendations;
  }

  /**
   * Batch evaluate eligibility for multiple schemes
   */
  static evaluateBatch(userProfile, schemes) {
    return schemes.map(scheme => ({
      schemeId: scheme._id,
      title: scheme.title.en,
      ...this.evaluateEligibility(userProfile, scheme)
    }));
  }
}

module.exports = EligibilityEngine;
