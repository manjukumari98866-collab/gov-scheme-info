const services = [
  {
    id: 1,
    category: "cards",
    status: "live",
    cities: ["Delhi", "Lucknow", "Patna"],
    title: { en: "APAAR Card", hi: "अपार कार्ड" },
    detail: {
      en: "Student identity card for academic records, scholarships, and digital verification support.",
      hi: "शैक्षणिक रिकॉर्ड, छात्रवृत्ति और डिजिटल सत्यापन सहायता के लिए छात्र पहचान पत्र।"
    },
    link: "https://www.education.gov.in/",
    documents: ["Aadhaar card", "School or college ID", "Mobile number"],
    steps: ["Visit the official portal", "Register with Aadhaar and mobile", "Download the final card"],
    eligibility: { ageMin: 0, ageMax: 40, category: "student" }
  },
  {
    id: 2,
    category: "cards",
    status: "updated",
    cities: ["Delhi", "Mumbai"],
    title: { en: "Ayushman Vay Vandana Card 70+", hi: "आयुष्मान वय वंदना कार्ड 70+" },
    detail: {
      en: "Healthcare coverage for senior citizens 70+ with hospitalization and OPD benefits.",
      hi: "70+ वरिष्ठ नागरिकों के लिए अस्पताल में भर्ती और ओपीडी लाभों सहित स्वास्थ्य कवरेज।"
    },
    link: "https://pmjay.gov.in/",
    documents: ["Aadhaar card", "Age proof", "Address proof"],
    steps: ["Check eligibility on PMJAY", "Upload documents", "Submit enrollment request"],
    eligibility: { ageMin: 70, category: "senior", incomeMax: 500000 }
  },
  {
    id: 3,
    category: "cards",
    status: "open",
    cities: ["Mumbai", "Bengaluru", "Delhi"],
    title: { en: "e-Shram Card", hi: "ई-श्रेम कार्ड" },
    detail: {
      en: "Registration card for unorganised workers to access welfare programmes and social protection.",
      hi: "असंगठित श्रमिकों के लिए पंजीकरण कार्ड, जो कल्याण कार्यक्रमों और सामाजिक सुरक्षा तक पहुँच देता है।"
    },
    link: "https://eshram.gov.in/",
    documents: ["Aadhaar card", "Mobile number", "Bank account details"],
    steps: ["Open e-Shram portal", "Complete worker registration", "Verify and download card"],
    eligibility: { ageMin: 16, ageMax: 60 }
  },
  {
    id: 4,
    category: "cards",
    status: "live",
    cities: ["Bengaluru", "Delhi", "Lucknow"],
    title: { en: "ABHA Health Card", hi: "ABHA स्वास्थ्य कार्ड" },
    detail: {
      en: "Digital health ID to access medical records and connect with healthcare providers securely.",
      hi: "डिजिटल स्वास्थ्य आईडी, जिससे चिकित्सा रिकॉर्ड तक सुरक्षित रूप से पहुँच और स्वास्थ्य सेवाओं का उपयोग संभव है।"
    },
    link: "https://abha.gov.in/",
    documents: ["Aadhaar card", "Phone number", "Profile details"],
    steps: ["Create ABHA ID", "Verify mobile number", "Link health records"],
    eligibility: { ageMin: 0, incomeMax: 1000000 }
  },
  {
    id: 5,
    category: "schemes",
    status: "live",
    cities: ["Patna", "Lucknow", "Delhi"],
    title: { en: "PM Kisan Samman Nidhi", hi: "पीएम किसान सम्मान निधि" },
    detail: {
      en: "Direct financial support to eligible farmers through seasonal installments and updates.",
      hi: "अर्हताप्राप्त किसानों को मौसम आधारित किश्तों और अपडेट के माध्यम से सीधी वित्तीय सहायता।"
    },
    link: "https://pmkisan.gov.in/",
    documents: ["Aadhaar card", "Land records", "Bank passbook"],
    steps: ["Check farmer status", "Complete eKYC", "Receive installment"],
    eligibility: { ageMin: 18, category: "farmer", incomeMax: 400000 }
  },
  {
    id: 6,
    category: "schemes",
    status: "updated",
    cities: ["Lucknow", "Patna", "Mumbai"],
    title: { en: "PM Awas Yojana", hi: "प्रधानमंत्री आवास योजना" },
    detail: {
      en: "Subsidised housing assistance for rural and urban families to build or buy homes.",
      hi: "ग्रामीण और शहरी परिवारों के लिए आवास निर्माण या खरीद के लिए सब्सिडी आधारित सहायता।"
    },
    link: "https://pmaymis.gov.in/",
    documents: ["Income certificate", "Identity proof", "Property documents"],
    steps: ["Check beneficiary status", "Submit documents", "Receive subsidy after approval"],
    eligibility: { ageMin: 18, incomeMax: 300000 }
  },
  {
    id: 7,
    category: "jobs",
    status: "updated",
    cities: ["Delhi", "Bengaluru", "Mumbai"],
    title: { en: "SSC CGL 2026 Recruitment", hi: "एसएससी सीजीएल 2026 भर्ती" },
    detail: {
      en: "Central government vacancy notices, application dates, and exam updates for multiple posts.",
      hi: "केंद्रीय सरकारी रिक्तियों, आवेदन तिथियों और कई पदों के लिए परीक्षा अपडेट।"
    },
    link: "https://ssc.nic.in/",
    documents: ["Educational certificates", "Photo and signature", "ID proof"],
    steps: ["Read the notification", "Apply online", "Download admit card and follow schedule"],
    eligibility: { ageMin: 18, ageMax: 35, category: "general" }
  },
  {
    id: 8,
    category: "jobs",
    status: "open",
    cities: ["Delhi", "Lucknow"],
    title: { en: "UPSC Admit Card Released", hi: "यूपीएससी प्रवेश पत्र जारी" },
    detail: {
      en: "Download the admit card to confirm your exam date, centre, and reporting instructions.",
      hi: "प्रवेश पत्र डाउनलोड करें और अपनी परीक्षा तिथि, केंद्र और रिपोर्टिंग निर्देश देखें।"
    },
    link: "https://upsc.gov.in/",
    documents: ["Application ID", "Photo ID", "Registration details"],
    steps: ["Open UPSC portal", "Download admit card", "Reach exam centre on time"],
    eligibility: { ageMin: 18, ageMax: 40, category: "general" }
  },
  {
    id: 9,
    category: "education",
    status: "live",
    cities: ["Patna", "Lucknow", "Bengaluru"],
    title: { en: "National Scholarship Portal", hi: "राष्ट्रीय छात्रवृत्ति पोर्टल" },
    detail: {
      en: "A one-stop place to apply for scholarships, examine eligibility, and track application status.",
      hi: "छात्रवृत्ति के लिए आवेदन, पात्रता जांच और आवेदन स्थिति ट्रैक करने का एक ही स्थान।"
    },
    link: "https://scholarships.gov.in/",
    documents: ["Income certificate", "Marksheet", "Bank account"],
    steps: ["Register at NSP", "Fill scholarship form", "Track approval and disbursement"],
    eligibility: { ageMin: 0, ageMax: 30, category: "student", incomeMax: 800000 }
  },
  {
    id: 10,
    category: "education",
    status: "updated",
    cities: ["Delhi", "Patna"],
    title: { en: "Board Results 2026", hi: "बोर्ड परीक्षा परिणाम 2026" },
    detail: {
      en: "Check class-wise results, re-evaluation updates, and merit list announcements for students.",
      hi: "कक्षा आधारित परिणाम, पुनर्मूल्यांकन अपडेट और छात्र Merit सूची की घोषणाएँ देखें।"
    },
    link: "https://cbse.gov.in/",
    documents: ["Roll number", "School details", "Date of birth"],
    steps: ["Open board portal", "Enter roll number", "View and download marksheet"],
    eligibility: { ageMin: 10, ageMax: 25, category: "student" }
  },
  {
    id: 11,
    category: "healthcare",
    status: "live",
    cities: ["Delhi", "Mumbai", "Bengaluru"],
    title: { en: "Ayushman Hospital Locator", hi: "आयुष्मान अस्पताल खोजक" },
    detail: {
      en: "Search nearby empanelled hospitals for free and subsidised treatment under Ayushman Bharat.",
      hi: "आयुष्मान भारत के तहत मुफ्त और सब्सिडी उपचार के लिए निकटतम पंजीकृत अस्पताल खोजें।"
    },
    link: "https://pmjay.gov.in/",
    documents: ["Aadhaar card", "ABHA ID", "Location details"],
    steps: ["Use the locator map", "Select nearby hospital", "Confirm treatment option"],
    eligibility: { ageMin: 0, incomeMax: 500000 }
  },
  {
    id: 12,
    category: "healthcare",
    status: "updated",
    cities: ["Mumbai", "Lucknow", "Delhi"],
    title: { en: "OPD Booking Portal", hi: "ओपीडी बुकिंग पोर्टल" },
    detail: {
      en: "Book doctor consultations and appointment slots online to avoid long queues and delays.",
      hi: "ऑनलाइन डॉक्टर परामर्श और अपॉइंटमेंट स्लॉट बुक करें ताकि लंबी कतारों और देरी से बचा जा सके।"
    },
    link: "https://nhp.gov.in/",
    documents: ["Aadhaar or ID", "Mobile number", "Doctor preference"],
    steps: ["Select hospital and time slot", "Book appointment", "Carry ID at the clinic"],
    eligibility: { ageMin: 0 }
  }
];

const notices = [
  {
    title: { en: "New PM Surya Ghar Muft Bijli Yojana", hi: "नई पीएम सूर्य घर मुफ्त बिजली योजना" },
    detail: {
      en: "The rooftop solar household scheme offers support for eligible families. Check scheme details and apply through the official portal.",
      hi: "रूफटॉप सोलर घरेलू योजना में पात्र परिवारों को सहायता मिलती है। योजना विवरण देखें और आधिकारिक पोर्टल से आवेदन करें।"
    }
  },
  {
    title: { en: "New Namo Drone Didi support scheme", hi: "नई नमो ड्रोन दीदी सहायता योजना" },
    detail: {
      en: "Women self-help groups can receive drone support for agricultural services under the newly introduced programme.",
      hi: "महिला स्वयं सहायता समूहों को कृषि सेवाओं के लिए नई योजना के तहत ड्रोन सहायता मिल सकती है।"
    }
  },
  {
    title: { en: "New PM Vishwakarma scheme benefits", hi: "नई पीएम विश्वकर्मा योजना के लाभ" },
    detail: {
      en: "Traditional artisans and craftspeople can review training, toolkit, credit, and digital transaction support.",
      hi: "पारंपरिक कारीगर प्रशिक्षण, टूलकिट, ऋण और डिजिटल लेनदेन सहायता की जानकारी देख सकते हैं।"
    }
  }
];

const cityData = {
  "All India": {
    news: ["National service updates are live across all districts.", "New digital subsidy checks are being rolled out nationwide."],
    hospitals: ["AIIMS Delhi", "Narayana Health Bengaluru", "KEM Hospital Mumbai"],
    services: ["Digital India portal", "Passport and identity services", "Public grievance support"]
  },
  Delhi: {
    news: ["MCD property tax portal reopened for FY2026 applications.", "Delhi district welfare schemes updated for urban households."],
    hospitals: ["AIIMS Delhi", "Safdarjung Hospital", "Lok Nayak Hospital"],
    services: ["MCD tax filing", "Birth certificate application", "Water and sewer update"]
  },
  Mumbai: {
    news: ["Municipal ward service windows extended for citizen registration.", "Public transport and housing subsidies updated for local residents."],
    hospitals: ["KEM Hospital", "Sion Hospital", "Bhabha Hospital"],
    services: ["BMC property tax", "Housing registration", "Flood alert support"]
  },
  Patna: {
    news: ["District welfare assistance and local health camps are now active.", "Rural support and irrigation benefit updates posted this week."],
    hospitals: ["NMCH Patna", "Patna Medical College Hospital", "PMCH"],
    services: ["District pension collection", "Local scholarship assistance", "Agriculture support desk"]
  },
  Bengaluru: {
    news: ["Urban local body services and hospital booking portals are updated.", "Citizen benefit app coverage expanded to more neighbourhoods."],
    hospitals: ["Narayana Health", "Bangalore Baptist Hospital", "Fortis Bengaluru"],
    services: ["BBMP property tax", "Ward development support", "Sanitation helpdesk"]
  },
  Lucknow: {
    news: ["City development and public utility notices are updated daily.", "Local youth employment and skill support schemes are active."],
    hospitals: ["King George's Medical University", "Balrampur Hospital", "SGPGI"],
    services: ["Municipal utility payment", "District scholarship support", "Women welfare desk"]
  }
};

const categoryMeta = {
  all: { icon: "✨", label: { en: "All", hi: "सभी" } },
  cards: { icon: "💳", label: { en: "Govt Cards", hi: "सरकारी कार्ड" } },
  schemes: { icon: "📜", label: { en: "Schemes", hi: "योजनाएँ" } },
  jobs: { icon: "💼", label: { en: "Govt Jobs", hi: "सरकारी नौकरियाँ" } },
  education: { icon: "🎓", label: { en: "Education", hi: "शिक्षा" } },
  healthcare: { icon: "🏥", label: { en: "Healthcare", hi: "स्वास्थ्य" } },
  saved: { icon: "⭐", label: { en: "Saved", hi: "सहेजे गए" } }
};

const uiText = {
  eyebrow: { en: "Unified Government Services", hi: "एकीकृत सरकारी सेवाएँ" },
  appTitle: { en: "Bharat Jan Seva", hi: "भारत जन सेवा" },
  subtitle: {
    en: "One place for cards, schemes, jobs, education, and health services.",
    hi: "कार्ड, योजनाएँ, नौकरियाँ, शिक्षा और स्वास्थ्य सेवाओं का एक ही स्थान।"
  },
  liveUpdates: { en: "Live Updates", hi: "लाइव अपडेट" },
  servicesTitle: { en: "Popular services", hi: "लोकप्रिय सेवाएँ" },
  noticesTitle: { en: "Public notices", hi: "सार्वजनिक नोटिस" },
  searchPlaceholder: {
    en: "Search cards, schemes, jobs, and services",
    hi: "कार्ड, योजनाएँ, नौकरियाँ और सेवाएँ खोजें"
  },
  voiceSearch: { en: "Voice Search", hi: "वॉइस सर्च" },
  results: { en: "results", hi: "परिणाम" },
  noResultsTitle: { en: "No matching services found", hi: "कोई मेल खाने वाली सेवा नहीं मिली" },
  noResultsBody: {
    en: "Try another keyword or switch to a different category.",
    hi: "दूसरे कीवर्ड से खोजें या दूसरी श्रेणी चुनें।"
  },
  applyNow: { en: "Apply now", hi: "अभी आवेदन करें" },
  share: { en: "Share", hi: "साझा करें" },
  liveStatus: { en: "Live", hi: "लाइव" },
  updatedStatus: { en: "Updated", hi: "अपडेटेड" },
  openStatus: { en: "Open", hi: "खुला" }
};

const languageConfig = {
  "en-IN": { ui: "en", label: "English" },
  "hi-IN": { ui: "hi", label: "हिन्दी" },
  "bn-IN": { ui: "en", label: "বাংলা" },
  "te-IN": { ui: "en", label: "తెలుగు" },
  "mr-IN": { ui: "en", label: "मराठी" },
  "ta-IN": { ui: "en", label: "தமிழ்" },
  "gu-IN": { ui: "en", label: "ગુજરાતી" },
  "kn-IN": { ui: "en", label: "ಕನ್ನಡ" },
  "pa-IN": { ui: "en", label: "ਪੰਜਾਬੀ" },
  "ml-IN": { ui: "en", label: "മലയാളം" },
  "or-IN": { ui: "en", label: "ଓଡ଼ିଆ" },
  "as-IN": { ui: "en", label: "অসমীয়া" },
  "ur-IN": { ui: "en", label: "اردو" },
  "sa-IN": { ui: "en", label: "संस्कृत" },
  "ne-NP": { ui: "en", label: "नेपाली" },
  "kok-IN": { ui: "en", label: "कोंकणी" },
  "bho-IN": { ui: "en", label: "भोजपुरी" },
  "mai-IN": { ui: "en", label: "मैथिली" },
  "doi-IN": { ui: "en", label: "डोगरी" },
  "sat-IN": { ui: "en", label: "संताली" },
  "ks-IN": { ui: "en", label: "कश्मीरी" },
  "mni-IN": { ui: "en", label: "মণিপুরী" }
};

let currentLanguage = "en";
let activeCategory = "all";
let currentSearch = "";
let recognition;
let currentEligibilityMatchIds = new Set();
let voiceLanguage = "en-IN";
let deferredInstallPrompt;
const SERVICES_CACHE_KEY = "bharat-jan-seva-services";

const els = {
  langToggle: document.getElementById("langToggle"),
  languageSelect: document.getElementById("languageSelect"),
  citySelect: document.getElementById("citySelect"),
  detectLocationBtn: document.getElementById("detectLocationBtn"),
  loginBtn: document.getElementById("loginBtn"),
  profileBtn: document.getElementById("profileBtn"),
  authModal: document.getElementById("authModal"),
  closeAuthBtn: document.getElementById("closeAuthBtn"),
  authForm: document.getElementById("authForm"),
  profileDashboard: document.getElementById("profileDashboard"),
  logoutBtn: document.getElementById("logoutBtn"),
  profileName: document.getElementById("profileName"),
  profileAge: document.getElementById("profileAge"),
  profileState: document.getElementById("profileState"),
  profileCategory: document.getElementById("profileCategory"),
  profileSaved: document.getElementById("profileSaved"),
  profileStatus: document.getElementById("profileStatus"),
  profileTier: document.getElementById("profileTier"),
  searchInput: document.getElementById("searchInput"),
  voiceBtn: document.getElementById("voiceBtn"),
  categoryTabs: document.getElementById("categoryTabs"),
  serviceGrid: document.getElementById("serviceGrid"),
  resultCount: document.getElementById("resultCount"),
  tickerText: document.getElementById("tickerText"),
  noticeBtn: document.getElementById("noticeBtn"),
  noticeModal: document.getElementById("noticeModal"),
  noticeList: document.getElementById("noticeList"),
  closeModalBtn: document.getElementById("closeModalBtn"),
  eligibilityModal: document.getElementById("eligibilityModal"),
  eligibilityResults: document.getElementById("eligibilityResults"),
  cityBadge: document.getElementById("cityBadge"),
  cityContent: document.getElementById("cityContent")
};

function getStoredUser() {
  try {
    return JSON.parse(localStorage.getItem("gov-profile") || "null");
  } catch (error) {
    return null;
  }
}

function saveStoredUser(user) {
  user.tier = user.tier || getCurrentTier();
  localStorage.setItem("gov-profile", JSON.stringify(user));
}

function getApplicationHistory() {
  try {
    return JSON.parse(localStorage.getItem("gov-application-history") || "[]");
  } catch (error) {
    return [];
  }
}

function saveApplicationHistory(history) {
  localStorage.setItem("gov-application-history", JSON.stringify(history));
}

function recordApplication(scheme, status = "Checklist started") {
  const history = getApplicationHistory();
  const existing = history.find((item) => item.schemeId === scheme.id);
  const application = {
    id: existing?.id || `APP-${Date.now()}`,
    schemeId: scheme.id,
    title: scheme.title.en,
    category: scheme.category,
    status,
    updatedAt: new Date().toISOString()
  };

  if (existing) Object.assign(existing, application);
  else history.unshift(application);
  saveApplicationHistory(history.slice(0, 25));
}

function t(key) {
  return uiText[key]?.[currentLanguage] || key;
}

function statusLabel(status) {
  const map = {
    live: uiText.liveStatus,
    updated: uiText.updatedStatus,
    open: uiText.openStatus
  };
  return map[status]?.[currentLanguage] || status;
}

function normalizeService(service) {
  const category = service.category === "health" ? "healthcare" : service.category;
  return {
    ...service,
    id: service.id || service._id || service.schemeId,
    category,
    title: service.title || { en: service.name || "Government service", hi: service.name || "Government service" },
    detail: service.detail || service.description || { en: "Government service information.", hi: "सरकारी सेवा की जानकारी।" },
    link: service.link || service.officialWebsite || "#",
    cities: service.cities || service.applicableCities || [],
    documents: Array.isArray(service.documents) ? service.documents.map((item) => item.name || item) : [],
    steps: Array.isArray(service.steps) ? service.steps : (service.applicationSteps || []).map((item) => item.title || item.description || item)
  };
}

function readCachedServices() {
  try {
    const cached = JSON.parse(localStorage.getItem(SERVICES_CACHE_KEY) || "null");
    return Array.isArray(cached) && cached.length ? cached.map(normalizeService) : null;
  } catch (error) {
    return null;
  }
}

function cacheServices(items) {
  localStorage.setItem(SERVICES_CACHE_KEY, JSON.stringify(items));
}

async function syncServicesFromBackend() {
  if (!navigator.onLine || !api.isConfigured()) return;
  try {
    const response = await api.getSchemes({ limit: 1000 });
    if (!response.success || !Array.isArray(response.data) || !response.data.length) return;
    const syncedServices = response.data.map(normalizeService);
    cacheServices(syncedServices);
    services.splice(0, services.length, ...syncedServices);
    renderTabs();
    renderServices();
  } catch (error) {
    // Bundled or cached services remain available while the API is offline.
  }
}

function loadLocalServices() {
  const cachedServices = readCachedServices();
  if (cachedServices) services.splice(0, services.length, ...cachedServices);
}

function updateLanguageUI() {
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (uiText[key]) node.textContent = t(key);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    if (uiText[key]) node.placeholder = t(key);
  });

  els.langToggle.textContent = currentLanguage === "en" ? "हिंदी" : "English";
  renderTabs();
  renderNotices();
  renderServices();
  renderLocalHub();
}

function getBookmarks() {
  try {
    return JSON.parse(localStorage.getItem("gov-saved-items") || "[]");
  } catch (error) {
    return [];
  }
}

function isBookmarked(itemId) {
  return getBookmarks().includes(itemId);
}

function toggleBookmark(itemId) {
  const saved = new Set(getBookmarks());
  if (saved.has(itemId)) saved.delete(itemId);
  else saved.add(itemId);

  localStorage.setItem("gov-saved-items", JSON.stringify([...saved]));
  renderTabs();
  renderServices();
  updateProfileCard();
}

function filterVisibleServices() {
  const savedIds = new Set(getBookmarks());
  const selectedCity = document.getElementById("citySelect")?.value || "All India";

  return services.filter((item) => {
    const categoryMatch =
      activeCategory === "all"
        ? true
        : activeCategory === "saved"
          ? savedIds.has(item.id)
          : item.category === activeCategory;

    const cityMatch =
      selectedCity === "All India" ||
      !item.cities ||
      item.cities.includes(selectedCity);

    const searchableText = `${item.title[currentLanguage]} ${item.detail[currentLanguage]}`.toLowerCase();
    const queryMatch = !currentSearch || searchableText.includes(currentSearch.toLowerCase());
    return categoryMatch && cityMatch && queryMatch;
  });
}

function renderTabs() {
  const tabs = Object.entries(categoryMeta)
    .map(([key, meta]) => {
      const activeClass = key === activeCategory ? "active" : "";
      return `
        <button class="category-tab ${activeClass}" type="button" data-category="${key}">
          <span>${meta.icon}</span>
          <span>${meta.label[currentLanguage]}</span>
        </button>
      `;
    })
    .join("");

  els.categoryTabs.innerHTML = tabs;
  els.categoryTabs.querySelectorAll(".category-tab").forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      renderTabs();
      renderServices();
    });
  });
}

function renderLocalHub() {
  const selectedCity = els.citySelect.value;
  const data = cityData[selectedCity] || cityData["All India"];
  els.cityBadge.textContent = selectedCity;
  els.cityContent.innerHTML = `
    <div class="city-panel">
      <h3>📰 District News</h3>
      <ul>${data.news.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>
    <div class="city-panel">
      <h3>🏥 Nearby Hospitals</h3>
      <ul>${data.hospitals.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>
    <div class="city-panel">
      <h3>🧾 Local Municipal Services</h3>
      <ul>${data.services.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>
  `;
}

function renderServices() {
  const filtered = filterVisibleServices();
  els.resultCount.textContent = `${filtered.length} ${t("results")}`;

  if (!filtered.length) {
    els.serviceGrid.innerHTML = `
      <div class="empty-state">
        <h3>${t("noResultsTitle")}</h3>
        <p>${t("noResultsBody")}</p>
      </div>
    `;
    return;
  }

  els.serviceGrid.innerHTML = filtered
    .map((item) => {
      const category = categoryMeta[item.category];
      const highlightClass = currentEligibilityMatchIds.has(item.id) ? "eligible-highlight" : "";
      const bookmarkIcon = isBookmarked(item.id) ? "★" : "☆";
      return `
        <article class="service-card ${highlightClass}" data-id="${item.id}">
          <div class="card-top">
            <span class="category-badge">${category.icon} ${category.label[currentLanguage]}</span>
            <div class="card-tools">
              <button class="bookmark-btn ${isBookmarked(item.id) ? "active" : ""}" type="button" data-bookmark-id="${item.id}" aria-label="Bookmark service">${bookmarkIcon}</button>
              <button class="audio-btn" type="button" data-audio-id="${item.id}" aria-label="Listen to details">🔊</button>
            </div>
          </div>

          <h3>${item.title[currentLanguage]}</h3>
          <p>${item.detail[currentLanguage]}</p>

          <div class="meta-row">
            <span class="status-pill ${item.status}">${statusLabel(item.status)}</span>
            <span class="feature-pill">${item.category === "healthcare" ? "Care" : "Gov"}</span>
            <span class="feature-pill">📍 ${getCityDisplay(item)}</span>
          </div>

          <div class="card-actions">
            <a class="action-btn primary" href="${item.link}" target="_blank" rel="noreferrer">${t("applyNow")}</a>
            <button class="action-btn secondary pro-download" type="button" data-download-id="${item.id}">⬇ Download docs <span class="pro-label">Pro</span></button>
            <button class="action-btn secondary" type="button" data-share="${item.link}">${t("share")}</button>
          </div>
        </article>
      `;
    })
    .join("");

  els.serviceGrid.querySelectorAll(".bookmark-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleBookmark(Number(button.dataset.bookmarkId));
    });
  });

  els.serviceGrid.querySelectorAll("[data-audio-id]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const item = services.find((service) => service.id === Number(button.dataset.audioId));
      if (item) {
        speakText(`${item.title[currentLanguage]}. ${item.detail[currentLanguage]}`, voiceLanguage || "en-IN");
      }
    });
  });

  els.serviceGrid.querySelectorAll("[data-share]").forEach((button) => {
    button.addEventListener("click", async (event) => {
      event.stopPropagation();
      const url = button.dataset.share;
      if (navigator.clipboard) {
        try {
          await navigator.clipboard.writeText(url);
          alert(currentLanguage === "en" ? "Link copied to clipboard." : "लिंक क्लिपबोर्ड पर कॉपी हो गया।");
          return;
        } catch (error) {
          window.open(url, "_blank", "noopener");
        }
      } else {
        window.open(url, "_blank", "noopener");
      }
    });
  });

  els.serviceGrid.querySelectorAll("[data-download-id]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      if (!requirePro("Document downloads")) return;
      const item = services.find((service) => service.id === Number(button.dataset.downloadId));
      if (!item) return;
      const documentText = `${item.title.en}\n\nRequired documents:\n${item.documents.join("\n")}`;
      const blob = new Blob([documentText], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${item.title.en.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}-documents.txt`;
      link.click();
      URL.revokeObjectURL(url);
    });
  });

  els.serviceGrid.querySelectorAll(".service-card").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest("button") || event.target.closest("a")) return;
      const item = services.find((service) => service.id === Number(card.dataset.id));
      if (item) openDetailModal(item);
    });
  });
}

function getCityDisplay(item) {
  return (item.cities && item.cities.length ? item.cities[0] : "All India");
}

function renderNotices() {
  els.noticeList.innerHTML = notices
    .map((notice) => `
      <li>
        <strong>${notice.title[currentLanguage]}</strong>
        <span>${notice.detail[currentLanguage]}</span>
      </li>
    `)
    .join("");

  const ticker = notices
    .map((notice) => `${notice.title[currentLanguage]} • ${notice.detail[currentLanguage]}`)
    .join("    |    ");
  els.tickerText.textContent = ticker;
}

function speakText(text, langCode = "en-IN") {
  if (!("speechSynthesis" in window)) {
    alert("Speech synthesis is not supported in this browser.");
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = langCode;
  utterance.rate = 0.9;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function startVoiceSearch() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert("Voice search is not supported in this browser.");
    return;
  }

  if (recognition) recognition.stop();

  recognition = new SpeechRecognition();
  recognition.lang = voiceLanguage || "en-IN";
  recognition.interimResults = false;

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    els.searchInput.value = transcript;
    currentSearch = transcript;
    renderServices();
  };

  recognition.onerror = () => {
    alert("Voice search could not capture your request.");
  };

  recognition.start();
}

function toggleLanguage() {
  closeNoticeModal();
  closeDetailModal();
  if (!document.getElementById("eligibilityModal").classList.contains("hidden")) toggleEligibilityModal();

  currentLanguage = currentLanguage === "en" ? "hi" : "en";
  updateLanguageUI();
}

function openNoticeModal() {
  els.noticeModal.classList.remove("hidden");
  els.noticeModal.setAttribute("aria-hidden", "false");
}

function closeNoticeModal() {
  els.noticeModal.classList.add("hidden");
  els.noticeModal.setAttribute("aria-hidden", "true");
}

function openDetailModal(item) {
  const infoContent = document.getElementById("infoContent");
  const detailTitle = document.getElementById("infoTitle");

  detailTitle.textContent = item.title[currentLanguage];
  infoContent.innerHTML = `
    <div class="info-block">
      <h4>${item.title[currentLanguage]}</h4>
      <p>${item.detail[currentLanguage]}</p>
    </div>
    <div class="info-block">
      <h4>Required Documents</h4>
      <ul>${(item.documents || []).map((doc) => `<li>${doc}</li>`).join("")}</ul>
    </div>
    <div class="info-block">
      <h4>How to Apply</h4>
      <ul>${(item.steps || []).map((step) => `<li>${step}</li>`).join("")}</ul>
      <a class="apply-link" href="${item.link}" target="_blank" rel="noreferrer">Direct Apply</a>
      <button class="action-btn secondary" type="button" id="detailDownloadBtn">⬇ Download documents <span class="pro-label">Pro</span></button>
    </div>
  `;

  document.getElementById("detailDownloadBtn").addEventListener("click", () => {
    if (!requirePro("Document downloads")) return;
    const blob = new Blob([`${item.title.en}\n\nRequired documents:\n${item.documents.join("\n")}`], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${item.title.en.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}-documents.txt`;
    link.click();
    URL.revokeObjectURL(url);
  });

  document.getElementById("infoModal").classList.remove("hidden");
  document.getElementById("infoModal").setAttribute("aria-hidden", "false");
}

function closeDetailModal() {
  document.getElementById("infoModal").classList.add("hidden");
  document.getElementById("infoModal").setAttribute("aria-hidden", "true");
}

function checkEligibility(event) {
  event.preventDefault();

  const age = Number(document.getElementById("eligibilityAge").value || 0);
  const gender = document.getElementById("eligibilityGender").value;
  const income = Number(document.getElementById("eligibilityIncome").value || 0);
  const category = document.getElementById("eligibilityCategory").value;

  const matches = services.filter((item) => {
    const rules = item.eligibility || {};
    const ageCheck = rules.ageMin === undefined || age >= rules.ageMin;
    const ageMaxCheck = rules.ageMax === undefined || age <= rules.ageMax;
    const genderCheck = !rules.gender || rules.gender === "all" || gender === "all" || rules.gender === gender;
    const incomeCheck = !rules.incomeMax || income <= rules.incomeMax;
    const categoryCheck = !rules.category || rules.category === "all" || category === "all" || rules.category === category;
    return ageCheck && ageMaxCheck && genderCheck && incomeCheck && categoryCheck;
  });

  currentEligibilityMatchIds = new Set(matches.map((item) => item.id));

  if (!matches.length) {
    els.eligibilityResults.innerHTML = "<div class=\"eligibility-result-item\"><strong>No matching service found.</strong><span>Try different filters.</span></div>";
    renderServices();
    return;
  }

  els.eligibilityResults.innerHTML = matches
    .map((item) => {
      const rules = item.eligibility || {};
      const matchedRules = [rules.ageMin !== undefined, rules.ageMax !== undefined, rules.incomeMax !== undefined, rules.category !== undefined].filter(Boolean).length;
      const score = Math.min(100, 70 + matchedRules * 7);
      const reason = rules.category && category !== "all" ? `Category: ${category}` : "Your profile matches the available criteria";
      return `<div class="eligibility-result-item"><strong>${item.title[currentLanguage]}</strong><span>${item.detail[currentLanguage]}</span><small>Match score: ${score}% · ${reason}</small></div>`;
    })
    .join("");

  renderServices();
}

function toggleEligibilityModal() {
  const modal = document.getElementById("eligibilityModal");
  modal.classList.toggle("hidden");
  modal.setAttribute("aria-hidden", modal.classList.contains("hidden") ? "true" : "false");
}

function openAiAssistant() {
  const modal = document.getElementById("aiAssistantModal");
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  const messages = document.getElementById("assistantMessages");
  if (!messages.children.length) addAssistantMessage("bot", "Ask me about Search, Eligibility Checker, scheme details, bookmarks, WhatsApp help, or Firebase login.");
  document.getElementById("assistantInput").focus();
}

function closeAiAssistant() {
  const modal = document.getElementById("aiAssistantModal");
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}

function addAssistantMessage(type, text) {
  const message = document.createElement("div");
  message.className = `assistant-message ${type}`;
  message.textContent = text;
  const messages = document.getElementById("assistantMessages");
  messages.appendChild(message);
  messages.scrollTop = messages.scrollHeight;
}

function getAssistantReply(question) {
  const text = question.toLowerCase();
  const appTerms = ["search", "scheme", "service", "eligib", "apply", "detail", "bookmark", "save", "whatsapp", "support", "login", "firebase", "language", "city", "location", "card", "job", "education", "health"];
  if (!appTerms.some((term) => text.includes(term))) {
    return "I can only answer questions about Bharat Jan Seva services, schemes, eligibility, applications, bookmarks, language, city, support, and login.";
  }
  if (text.includes("search")) return "Use the Search box to find cards, schemes, jobs, education, and healthcare services. Category tabs and city selection narrow the results.";
  if (text.includes("eligib")) return "Open Check My Eligibility, enter age, gender, annual income, and category, then select Find Matches. Matching services are highlighted.";
  if (text.includes("detail") || text.includes("apply")) return "Select any service card to open Scheme Details. You can read documents and steps, then use Direct Apply for the official website.";
  if (text.includes("bookmark") || text.includes("save")) return "Use the star button on a service card. Open the Saved tab to see your bookmarked services.";
  if (text.includes("whatsapp") || text.includes("support")) return "Use the WhatsApp button to contact Bharat Jan Seva support with a prefilled message.";
  if (text.includes("login") || text.includes("firebase")) return "Use Login / Register. Google login uses Firebase; phone OTP requires Firebase Phone provider, reCAPTCHA, and an authorised domain.";
  if (text.includes("language") || text.includes("city") || text.includes("location")) return "Use the language selector, city selector, or Detect My Location to change local service results.";
  return "Open a service card to view its official details, eligibility, documents, and application steps.";
}

function openWhatsAppHelp() {
  const message = encodeURIComponent("Hello Bharat Jan Seva, I need help using the app.");
  window.open(`https://wa.me/919886605387?text=${message}`, "_blank", "noopener");
}

function openAuthModal() {
  els.authModal.classList.remove("hidden");
  els.authModal.setAttribute("aria-hidden", "false");
}

function openProfile() {
  if (!getStoredUser()) {
    openAuthModal();
    return;
  }

  els.profileDashboard.scrollIntoView({ behavior: "smooth", block: "start" });
}

function closeAuthModal() {
  els.authModal.classList.add("hidden");
  els.authModal.setAttribute("aria-hidden", "true");
}

function updateProfileCard() {
  const user = getStoredUser();
  if (!user) {
    els.profileDashboard.classList.add("hidden");
    return;
  }

  els.profileDashboard.classList.remove("hidden");
  els.profileName.textContent = user.name || "Guest User";
  els.profileAge.textContent = user.age || "—";
  els.profileState.textContent = user.state || "—";
  els.profileCategory.textContent = user.category || "—";
  els.profileSaved.textContent = String(user.savedSchemes?.length || getBookmarks().length || 0);
  els.profileStatus.textContent = user.status || "Logged In";
  els.profileTier.textContent = user.tier || getCurrentTier();
}

function handleAuthSubmit(event) {
  event.preventDefault();
  const user = {
    name: document.getElementById("authName").value || "Guest User",
    age: document.getElementById("authAge").value || "28",
    state: document.getElementById("authState").value || "Delhi",
    category: document.getElementById("authCategory").value || "General",
    phone: document.getElementById("authPhone").value || "+91 9876543210",
    savedSchemes: getBookmarks(),
    status: "Verified",
    loggedIn: true
  };

  saveStoredUser(user);
  updateProfileCard();
  closeAuthModal();
  alert("Login successful. Your profile is now saved for the next visit.");
}

function logoutUser() {
  const auth = getFirebaseAuth();
  if (auth) auth.signOut().catch(() => {});
  localStorage.removeItem("gov-profile");
  updateProfileCard();
  alert("You have been logged out.");
}

function syncFirebaseUser(firebaseUser) {
  if (!firebaseUser) return;
  const current = getStoredUser() || {};
  saveStoredUser({
    ...current,
    name: firebaseUser.displayName || current.name || "Google User",
    email: firebaseUser.email || current.email || "",
    photoURL: firebaseUser.photoURL || current.photoURL || "",
    uid: firebaseUser.uid,
    status: "Verified",
    loggedIn: true
  });
  updateProfileCard();
}

function detectLocation() {
  if (!navigator.geolocation) {
    document.getElementById("citySelect").value = "Delhi";
    renderLocalHub();
    renderServices();
    alert("Geolocation is not available. Delhi selected by default.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      const city = lat > 28.35 ? "Delhi" : lng > 72.8 ? "Mumbai" : "Lucknow";
      els.citySelect.value = city;
      renderLocalHub();
      renderServices();
      alert(`Location detected: ${city}. Nearby updates have been updated.`);
    },
    () => {
      els.citySelect.value = "Delhi";
      renderLocalHub();
      renderServices();
      alert("Location could not be detected. Delhi selected by default.");
    }
  );
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch(() => {});
    });
  }
}

const firebaseAuth = getFirebaseAuth();
if (firebaseAuth) firebaseAuth.onAuthStateChanged(syncFirebaseUser);

// ===== NEW: ELIGIBILITY ENGINE INTEGRATION =====

async function checkEligibilityWithBackend(userProfile) {
  try {
    // Get all current schemes
    const allSchemesResponse = await api.getSchemes({ limit: 1000 });
    if (!allSchemesResponse.success) {
      console.error('Error fetching schemes:', allSchemesResponse.error);
      return;
    }

    // Check batch eligibility
    const schemeIds = allSchemesResponse.data.map(s => s._id);
    const eligibilityResponse = await api.checkBatchEligibility(userProfile, schemeIds);

    if (eligibilityResponse.success) {
      displayEligibilityResults(eligibilityResponse.data);
    }
  } catch (error) {
    console.error('Eligibility check failed:', error);
    alert('Failed to check eligibility. Please try again.');
  }
}

function displayEligibilityResults(results) {
  const modal = document.getElementById('eligibilityResultsModal');
  const summary = document.getElementById('resultsSummary');
  const list = document.getElementById('resultsList');

  // Summary
  summary.innerHTML = `
    <div class="summary-stats">
      <div class="stat-box">
        <span class="stat-value">${results.summary.definitelyEligible}</span>
        <span class="stat-label">Definitely Eligible</span>
      </div>
      <div class="stat-box">
        <span class="stat-value">${results.summary.maybeEligible}</span>
        <span class="stat-label">Maybe Eligible</span>
      </div>
      <div class="stat-box">
        <span class="stat-value">${results.summary.notEligible}</span>
        <span class="stat-label">Not Eligible</span>
      </div>
    </div>
  `;

  // Results list
  let html = '<div class="eligibility-list">';

  // Definitely eligible
  if (results.eligible.length > 0) {
    html += '<div class="eligibility-group"><h4>✅ Definitely Eligible</h4>';
    results.eligible.forEach(item => {
      html += `
        <div class="eligibility-item eligible">
          <h5>${item.title}</h5>
          <p class="score">Eligibility Score: ${item.eligibilityScore}%</p>
          <button class="small-btn" onclick="openChecklistFor('${item.schemeId}')">📋 Start Checklist</button>
        </div>
      `;
    });
    html += '</div>';
  }

  // Maybe eligible
  if (results.maybeEligible.length > 0) {
    html += '<div class="eligibility-group"><h4>⚠️ Maybe Eligible</h4>';
    results.maybeEligible.forEach(item => {
      html += `
        <div class="eligibility-item partial">
          <h5>${item.title}</h5>
          <p class="score">Eligibility Score: ${item.eligibilityScore}%</p>
          <div class="missing-criteria">
            <p><strong>Missing Criteria:</strong></p>
            <ul>${item.missingCriteria.map(c => `<li>${c}</li>`).join('')}</ul>
          </div>
        </div>
      `;
    });
    html += '</div>';
  }

  html += '</div>';
  list.innerHTML = html;

  // Show modal
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
}

// ===== NEW: DOCUMENT CHECKLIST MANAGEMENT =====

async function openChecklistFor(schemeId) {
  try {
    const user = getStoredUser();
    if (!user) {
      alert('Please log in first to manage your checklist.');
      openAuthModal();
      return;
    }

    // Get scheme details
    const schemeResponse = await api.getSchemeById(schemeId);
    if (!schemeResponse.success) {
      console.error('Error fetching scheme:', schemeResponse.error);
      return;
    }

    const scheme = schemeResponse.data;
    
    // Get or create checklist
    const checklistResponse = await api.getChecklist(user._id, schemeId);
    if (!checklistResponse.success) {
      console.error('Error fetching checklist:', checklistResponse.error);
      return;
    }

    const checklist = checklistResponse.data;
    recordApplication(scheme, "Checklist started");
    displayChecklist(scheme, checklist);
  } catch (error) {
    console.error('Error opening checklist:', error);
    alert('Failed to open checklist. Please try again.');
  }
}

function displayChecklist(scheme, checklist) {
  const modal = document.getElementById('checklistModal');
  const title = document.getElementById('checklistTitle');
  const itemsContainer = document.getElementById('checklistItems');
  const progressFill = document.getElementById('progressFill');
  const progressText = document.getElementById('progressText');

  title.textContent = `📋 ${scheme.title.en} - Document Checklist`;

  // Calculate progress
  const completedItems = checklist.items.filter(i => i.completed).length;
  const totalItems = checklist.items.length;
  const percentage = Math.round((completedItems / totalItems) * 100);

  progressFill.style.width = percentage + '%';
  progressText.textContent = `${percentage}% Complete (${completedItems}/${totalItems})`;

  // Render checklist items
  itemsContainer.innerHTML = checklist.items.map((item, index) => `
    <div class="checklist-item ${item.completed ? 'completed' : ''}">
      <div class="item-header">
        <input 
          type="checkbox" 
          ${item.completed ? 'checked' : ''} 
          onchange="updateChecklistItem('${checklist._id}', ${index}, this.checked)"
          aria-label="${item.documentName}"
        />
        <div class="item-info">
          <label class="item-name">${item.documentName}</label>
          <span class="item-type">${item.documentType}</span>
          ${item.required ? '<span class="required-badge">Required</span>' : ''}
        </div>
      </div>
      ${item.completed ? `
        <div class="item-status">
          <span class="status-badge">✅ Uploaded</span>
          <span class="upload-time">${new Date(item.uploadedAt).toLocaleDateString()}</span>
        </div>
      ` : `
        <div class="item-upload">
          <input type="file" class="file-input" data-index="${index}" accept=".pdf,.jpg,.jpeg,.png" />
          <button class="small-btn" onclick="document.querySelector('[data-index=\"${index}\"]').click()">
            📤 Upload Document
          </button>
        </div>
      `}
    </div>
  `).join('');

  // Update action buttons
  const submitBtn = document.getElementById('submitChecklistBtn');
  submitBtn.disabled = completedItems < totalItems;
  submitBtn.onclick = () => submitChecklist(checklist._id);

  const downloadBtn = document.getElementById('downloadChecklistBtn');
  downloadBtn.onclick = () => downloadChecklist(scheme, checklist);

  // Show modal
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
}

async function updateChecklistItem(checklistId, itemIndex, completed) {
  try {
    const response = await api.updateChecklistItem(checklistId, itemIndex, {
      completed,
      uploadedAt: new Date().toISOString()
    });

    if (response.success) {
      alert('✅ Item updated successfully');
    }
  } catch (error) {
    console.error('Error updating checklist item:', error);
    alert('Failed to update checklist item');
  }
}

async function submitChecklist(checklistId) {
  try {
    const response = await api.submitChecklist(checklistId);
    
    if (response.success) {
      const schemeId = response.data?.schemeId;
      const scheme = services.find((item) => String(item.id) === String(schemeId));
      if (scheme) recordApplication(scheme, "Documents submitted");
      alert('✅ Documents submitted successfully for verification!');
      // Close modal and refresh
      document.getElementById('checklistModal').classList.add('hidden');
    }
  } catch (error) {
    console.error('Error submitting checklist:', error);
    alert('Failed to submit documents');
  }
}

function downloadChecklist(scheme, checklist) {
  if (!requirePro("Document downloads")) return;
  // Create a simple text file with checklist
  let content = `GOVERNMENT SCHEME APPLICATION CHECKLIST\n`;
  content += `${'='.repeat(60)}\n\n`;
  content += `Scheme: ${scheme.title.en}\n`;
  content += `Application Date: ${new Date().toLocaleDateString()}\n`;
  content += `Status: ${checklist.status}\n\n`;
  
  content += `REQUIRED DOCUMENTS:\n`;
  content += `${'-'.repeat(60)}\n`;
  
  checklist.items.forEach((item, idx) => {
    const status = item.completed ? '✓' : '✗';
    content += `${idx + 1}. [${status}] ${item.documentName} (${item.documentType})\n`;
  });

  // Create and download
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
  element.setAttribute('download', `checklist-${scheme.title.en.replace(/\\s+/g, '-')}.txt`);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

// ===== CLOSE MODAL FUNCTIONS =====

function closeChecklistModal() {
  const modal = document.getElementById('checklistModal');
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}

function closeEligibilityResultsModal() {
  const modal = document.getElementById('eligibilityResultsModal');
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}

document.addEventListener("DOMContentLoaded", () => {
  loadLocalServices();
  const installButton = document.getElementById("installAppBtn");
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    installButton.hidden = false;
  });
  installButton.addEventListener("click", async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    installButton.hidden = true;
  });
  window.addEventListener("appinstalled", () => { installButton.hidden = true; });

  const loginProfile = localStorage.getItem("userProfile");
  if (!getStoredUser() && loginProfile) {
    try {
      const profile = JSON.parse(loginProfile);
      saveStoredUser({
        ...profile,
        phone: profile.phone || profile.mobile,
        savedSchemes: getBookmarks(),
        status: "Verified",
        loggedIn: true
      });
    } catch (error) {
      localStorage.removeItem("userProfile");
    }
  }

  const storedUser = getStoredUser();
  if (storedUser) {
    storedUser.savedSchemes = storedUser.savedSchemes || getBookmarks();
    saveStoredUser(storedUser);
    // Check login status
    checkLoginStatus();
  
  }

  const savedLanguage = localStorage.getItem("gov-language") || "en-IN";
  const savedCity = localStorage.getItem("gov-city") || "All India";
  voiceLanguage = savedLanguage;
  els.languageSelect.value = savedLanguage;
  els.citySelect.value = savedCity;

  const selected = languageConfig[savedLanguage] || languageConfig["en-IN"];
  currentLanguage = selected.ui;

  els.searchInput.addEventListener("input", (event) => {
    currentSearch = event.target.value.trim();
    renderServices();
  });

  els.langToggle.addEventListener("click", toggleLanguage);
  els.languageSelect.addEventListener("change", (event) => {
    const code = event.target.value;
    const mapped = languageConfig[code] || languageConfig["en-IN"];
    voiceLanguage = code;
    currentLanguage = mapped.ui;
    localStorage.setItem("gov-language", code);
    updateLanguageUI();
  });

  els.citySelect.addEventListener("change", (event) => {
    localStorage.setItem("gov-city", event.target.value);
    renderLocalHub();
    renderServices();
  });

  els.detectLocationBtn.addEventListener("click", detectLocation);
  els.loginBtn.addEventListener("click", openAuthModal);
  els.profileBtn.addEventListener("click", openProfile);
  els.closeAuthBtn.addEventListener("click", closeAuthModal);
  els.logoutBtn.addEventListener("click", logoutUser);
  els.authForm.addEventListener("submit", handleAuthSubmit);
  els.voiceBtn.addEventListener("click", startVoiceSearch);
  els.noticeBtn.addEventListener("click", openNoticeModal);
  els.closeModalBtn.addEventListener("click", closeNoticeModal);
  document.getElementById("checkEligibilityBtn").addEventListener("click", toggleEligibilityModal);
  document.getElementById("closeEligibilityBtn").addEventListener("click", toggleEligibilityModal);
  document.getElementById("aiAssistantBtn").addEventListener("click", openAiAssistant);
  document.getElementById("closeAiAssistantBtn").addEventListener("click", closeAiAssistant);
  document.getElementById("whatsappBtn").addEventListener("click", openWhatsAppHelp);
  document.querySelector("[data-close='aiAssistantModal']").addEventListener("click", closeAiAssistant);
  document.getElementById("assistantForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("assistantInput");
    const question = input.value.trim();
    if (!question) return;
    addAssistantMessage("user", question);
    addAssistantMessage("bot", getAssistantReply(question));
    input.value = "";
  });
  document.getElementById("closeInfoBtn").addEventListener("click", closeDetailModal);
  document.getElementById("eligibilityForm").addEventListener("submit", checkEligibility);
  document.querySelector("[data-close='noticeModal']").addEventListener("click", closeNoticeModal);
  document.querySelector("[data-close='infoModal']").addEventListener("click", closeDetailModal);
  document.querySelector("[data-close='eligibilityModal']").addEventListener("click", toggleEligibilityModal);
  document.querySelector("[data-close='authModal']").addEventListener("click", closeAuthModal);
  document.querySelectorAll("[data-auth]").forEach((button) => {
    button.addEventListener("click", () => {
      const method = button.dataset.auth;
      if (method === "otp") alert("OTP mode selected. Please enter your mobile number and continue.");
      else signInWithGoogle()
        .then((result) => {
          syncFirebaseUser(result.user);
          closeAuthModal();
          alert("Google sign-in successful.");
        })
        .catch((error) => {
          if (error.message !== "Firebase is not configured.") alert(error.message || "Google sign-in failed.");
        });
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNoticeModal();
      closeDetailModal();
      closeAuthModal();
      closeAiAssistant();
      if (!document.getElementById("eligibilityModal").classList.contains("hidden")) toggleEligibilityModal();
    }
  });

  registerServiceWorker();
  renderLocalHub();
  renderTabs();
  renderNotices();
  renderServices();
  updateProfileCard();
  syncServicesFromBackend();
  window.addEventListener("online", syncServicesFromBackend);
});
// --- Added New Popular Services Feed ---
const extraServicesData = [
    {
        id: 101,
        title: "National Scholarship Portal (NSP)",
        category: "Education",
        description: "One-stop portal for various scholarship schemes for school and college students.",
        tag: "Trending",
        location: "Pan India",
        action: "Apply Online"
    },
    {
        id: 102,
        title: "Pradhan Mantri Mudra Yojana (PMMY)",
        category: "Financial Schemes",
        description: "Collateral-free loans up to 10 Lakhs for micro and small enterprise units.",
        tag: "Popular",
        location: "Pan India",
        action: "Check Eligibility"
    },
    {
        id: 103,
        title: "PM Kaushal Vikas Yojana (PMKVY)",
        category: "Education",
        description: "Free industry-relevant skill training programs and certification for Indian youth.",
        tag: "New Batch",
        location: "Pan India",
        action: "Register Now"
    },
    {
        id: 104,
        title: "National Career Service (NCS) Portal",
        category: "Govt Jobs",
        description: "Find government and private sector job opportunities across various states and sectors.",
        tag: "Active Jobs",
        location: "Pan India",
        action: "Browse Jobs"
    }
];
// --- Expanded Digital Hub Services Feed ---
const massiveServicesPack = [
    {
        id: 105,
        title: "Atal Pension Yojana (APY)",
        category: "Financial Schemes",
        description: "Guaranteed minimum pension scheme for workers in the unorganized sector managed by PFRDA.",
        tag: "Popular",
        location: "Pan India",
        action: "Enroll Now"
    },
    {
        id: 106,
        title: "Ayushman Bharat Digital Health ID (ABHA)",
        category: "Healthcare",
        description: "Create your unique health ID card to digitally link and access all your medical records safely.",
        tag: "Essential",
        location: "Pan India",
        action: "Create ABHA"
    },
    {
        id: 107,
        title: "Ujjwala Yojana 2.0 LPG Subsidy",
        category: "Financial Schemes",
        description: "Free cooking gas connections and financial support for women belonging to low-income households.",
        tag: "Active",
        location: "Pan India",
        action: "Apply for LPG"
    },
    {
        id: 108,
        title: "UPSC Civil Services & Govt Exams Portal",
        category: "Govt Jobs",
        description: "Direct notifications, syllabus guidelines, and application links for central government recruitments.",
        tag: "High Demand",
        location: "Pan India",
        action: "View Vacancies"
    },
    {
        id: 109,
        title: "e-Shram National Database for Unorganized Workers",
        category: "Govt Cards",
        description: "Official registration card providing accidental insurance coverage and welfare benefits for laborers.",
        tag: "Verified",
        location: "Pan India",
        action: "Register/Update"
    },
    {
        id: 110,
        title: "PM Matru Vandana Yojana",
        category: "Healthcare",
        description: "Direct cash transfer maternity benefit scheme for pregnant and lactating mothers.",
        tag: "Welfare",
        location: "Pan India",
        action: "Check Benefit"
    }
];
