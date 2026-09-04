/**
 * API Client for Government Services Portal
 * Handles all backend API communications
 */

class APIClient {
  constructor(baseURL = window.BHARAT_API_BASE_URL || localStorage.getItem('gov-api-base-url') || 'http://localhost:5000/api') {
    this.baseURL = baseURL;
    this.token = localStorage.getItem('authToken') || null;
  }

  isConfigured() {
    return Boolean(this.baseURL);
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem('authToken', token);
  }

  getHeaders() {
    return {
      'Content-Type': 'application/json',
      ...(this.token && { 'Authorization': `Bearer ${this.token}` })
    };
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    try {
      const response = await fetch(url, {
        ...options,
        headers: { ...this.getHeaders(), ...options.headers }
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.warn('API unavailable; using local data:', error.message);
      throw error;
    }
  }

  // ===== SCHEMES API =====
  async getSchemes(filters = {}) {
    const params = new URLSearchParams(filters);
    return this.request(`/schemes?${params.toString()}`);
  }

  async getSchemeById(id) {
    return this.request(`/schemes/${id}`);
  }

  async searchSchemes(query) {
    return this.request(`/schemes/search/query?q=${encodeURIComponent(query)}`);
  }

  async getSchemesByCategory(category) {
    return this.request(`/schemes/category/${category}`);
  }

  async getSchemesByCity(city) {
    return this.request(`/schemes/city/${city}`);
  }

  // ===== ELIGIBILITY API =====
  async checkEligibility(schemeId, userProfile) {
    return this.request(`/eligibility/check/${schemeId}`, {
      method: 'POST',
      body: JSON.stringify({ userProfile })
    });
  }

  async checkBatchEligibility(userProfile, schemeIds = []) {
    return this.request('/eligibility/check-batch', {
      method: 'POST',
      body: JSON.stringify({ userProfile, schemeIds })
    });
  }

  async getRecommendedSchemes(userProfile, limit = 10) {
    return this.request('/eligibility/recommend', {
      method: 'POST',
      body: JSON.stringify({ userProfile, limit })
    });
  }

  // ===== CHECKLIST API =====
  async getChecklist(userId, schemeId) {
    return this.request(`/checklist/${userId}/${schemeId}`);
  }

  async updateChecklistItem(checklistId, itemIndex, data) {
    return this.request(`/checklist/${checklistId}/item/${itemIndex}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  }

  async submitChecklist(checklistId) {
    return this.request(`/checklist/${checklistId}/submit`, {
      method: 'PUT'
    });
  }

  async getUserChecklists(userId) {
    return this.request(`/checklist/user/${userId}`);
  }

  // ===== USER API =====
  async registerUser(data) {
    return this.request('/users/register', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }

  async loginUser(email, password) {
    return this.request('/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });
  }

  async getUserProfile(userId) {
    return this.request(`/users/${userId}`);
  }

  async updateUserProfile(userId, profileData) {
    return this.request(`/users/${userId}/profile`, {
      method: 'PUT',
      body: JSON.stringify(profileData)
    });
  }

  async saveScheme(userId, schemeId) {
    return this.request(`/users/${userId}/save/${schemeId}`, {
      method: 'POST'
    });
  }

  async getSavedSchemes(userId) {
    return this.request(`/users/${userId}/saved`);
  }

  // ===== HEALTH CHECK =====
  async healthCheck() {
    return this.request('/health');
  }
}

// Initialize API Client
const api = new APIClient();
