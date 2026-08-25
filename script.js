const services = [
  {
    id: 1,
    category: "cards",
    status: "live",
    title: { en: "APAAR Card", hi: "अपार कार्ड" },
    detail: {
      en: "Student identity card for academic records, scholarships, and digital verification support.",
      hi: "शैक्षणिक रिकॉर्ड, छात्रवृत्ति और डिजिटल सत्यापन सहायता के लिए छात्र पहचान पत्र।"
    },
    link: "https://www.education.gov.in/"
  },
  {
    id: 2,
    category: "cards",
    status: "updated",
    title: { en: "Ayushman Vay Vandana Card 70+", hi: "आयुष्मान वय वंदना कार्ड 70+" },
    detail: {
      en: "Healthcare coverage for senior citizens 70+ with hospitalization and OPD benefits.",
      hi: "70+ वरिष्ठ नागरिकों के लिए अस्पताल में भर्ती और ओपीडी लाभों सहित स्वास्थ्य कवरेज।"
    },
    link: "https://pmjay.gov.in/"
  },
  {
    id: 3,
    category: "cards",
    status: "open",
    title: { en: "e-Shram Card", hi: "ई-श्रेम कार्ड" },
    detail: {
      en: "Registration card for unorganised workers to access welfare programmes and social protection.",
      hi: "असंगठित श्रमिकों के लिए पंजीकरण कार्ड, जो कल्याण कार्यक्रमों और सामाजिक सुरक्षा तक पहुँच देता है।"
    },
    link: "https://eshram.gov.in/"
  },
  {
    id: 4,
    category: "cards",
    status: "live",
    title: { en: "ABHA Health Card", hi: "ABHA स्वास्थ्य कार्ड" },
    detail: {
      en: "Digital health ID to access medical records and connect with healthcare providers securely.",
      hi: "डिजिटल स्वास्थ्य आईडी, जिससे चिकित्सा रिकॉर्ड तक सुरक्षित रूप से पहुँच और स्वास्थ्य सेवाओं का उपयोग संभव है।"
    },
    link: "https://abha.gov.in/"
  },
  {
    id: 5,
    category: "schemes",
    status: "live",
    title: { en: "PM Kisan Samman Nidhi", hi: "पीएम किसान सम्मान निधि" },
    detail: {
      en: "Direct financial support to eligible farmers through seasonal installments and updates.",
      hi: "अर्हताप्राप्त किसानों को मौसम आधारित किश्तों और अपडेट के माध्यम से सीधी वित्तीय सहायता।"
    },
    link: "https://pmkisan.gov.in/"
  },
  {
    id: 6,
    category: "schemes",
    status: "updated",
    title: { en: "PM Awas Yojana", hi: "प्रधानमंत्री आवास योजना" },
    detail: {
      en: "Subsidised housing assistance for rural and urban families to build or buy homes.",
      hi: "ग्रामीण और शहरी परिवारों के लिए आवास निर्माण या खरीद के लिए सब्सिडी आधारित सहायता।"
    },
    link: "https://pmaymis.gov.in/"
  },
  {
    id: 7,
    category: "jobs",
    status: "updated",
    title: { en: "SSC CGL 2026 Recruitment", hi: "एसएससी सीजीएल 2026 भर्ती" },
    detail: {
      en: "Central government vacancy notices, application dates, and exam updates for multiple posts.",
      hi: "केंद्रीय सरकारी रिक्तियों, आवेदन तिथियों और कई पदों के लिए परीक्षा अपडेट।"
    },
    link: "https://ssc.nic.in/"
  },
  {
    id: 8,
    category: "jobs",
    status: "open",
    title: { en: "UPSC Admit Card Released", hi: "यूपीएससी प्रवेश पत्र जारी" },
    detail: {
      en: "Download the admit card to confirm your exam date, centre, and reporting instructions.",
      hi: "प्रवेश पत्र डाउनलोड करें और अपनी परीक्षा तिथि, केंद्र और रिपोर्टिंग निर्देश देखें।"
    },
    link: "https://upsc.gov.in/"
  },
  {
    id: 9,
    category: "education",
    status: "live",
    title: { en: "National Scholarship Portal", hi: "राष्ट्रीय छात्रवृत्ति पोर्टल" },
    detail: {
      en: "A one-stop place to apply for scholarships, examine eligibility, and track application status.",
      hi: "छात्रवृत्ति के लिए आवेदन, पात्रता जांच और आवेदन स्थिति ट्रैक करने का एक ही स्थान।"
    },
    link: "https://scholarships.gov.in/"
  },
  {
    id: 10,
    category: "education",
    status: "updated",
    title: { en: "Board Results 2026", hi: "बोर्ड परीक्षा परिणाम 2026" },
    detail: {
      en: "Check class-wise results, re-evaluation updates, and merit list announcements for students.",
      hi: "कक्षा आधारित परिणाम, पुनर्मूल्यांकन अपडेट और छात्र Merit सूची की घोषणाएँ देखें।"
    },
    link: "https://cbse.gov.in/"
  },
  {
    id: 11,
    category: "healthcare",
    status: "live",
    title: { en: "Ayushman Hospital Locator", hi: "आयुष्मान अस्पताल खोजक" },
    detail: {
      en: "Search nearby empanelled hospitals for free and subsidised treatment under Ayushman Bharat.",
      hi: "आयुष्मान भारत के तहत मुफ्त और सब्सिडी उपचार के लिए निकटतम पंजीकृत अस्पताल खोजें।"
    },
    link: "https://pmjay.gov.in/"
  },
  {
    id: 12,
    category: "healthcare",
    status: "updated",
    title: { en: "OPD Booking Portal", hi: "ओपीडी बुकिंग पोर्टल" },
    detail: {
      en: "Book doctor consultations and appointment slots online to avoid long queues and delays.",
      hi: "ऑनलाइन डॉक्टर परामर्श और अपॉइंटमेंट स्लॉट बुक करें ताकि लंबी कतारों और देरी से बचा जा सके।"
    },
    link: "https://nhp.gov.in/"
  }
];

const notices = [
  {
    title: { en: "PM-JAY hospital directory updated", hi: "पीएम-जाय अस्पताल निर्देशिका अपडेट" },
    detail: {
      en: "Additional empanelled facilities were added across several districts for faster patient access.",
      hi: "तेज़ रोगी पहुँच के लिए कई जिलों में अतिरिक्त पंजीकृत सुविधाएँ जोड़ दी गई हैं।"
    }
  },
  {
    title: { en: "Scholarship application window open", hi: "छात्रवृत्ति आवेदन विंडो खुली" },
    detail: {
      en: "Students from eligible groups can apply before the current deadline closes.",
      hi: "अर्हताप्राप्त समूहों के छात्र वर्तमान समय सीमा समाप्त होने से पहले आवेदन कर सकते हैं।"
    }
  },
  {
    title: { en: "Farmer payment status refreshed", hi: "किसान भुगतान स्थिति अपडेट" },
    detail: {
      en: "Beneficiary KYC and installment records have been updated in the latest cycle.",
      hi: "लाभार्थी केवाईसी और किश्त रिकॉर्ड को नवीनतम चक्र में अपडेट किया गया है।"
    }
  }
];

const categoryMeta = {
  all: { icon: "✨", label: { en: "All", hi: "सभी" } },
  cards: { icon: "💳", label: { en: "Govt Cards", hi: "सरकारी कार्ड" } },
  schemes: { icon: "📜", label: { en: "Schemes", hi: "योजनाएँ" } },
  jobs: { icon: "💼", label: { en: "Govt Jobs", hi: "सरकारी नौकरियाँ" } },
  education: { icon: "🎓", label: { en: "Education", hi: "शिक्षा" } },
  healthcare: { icon: "🏥", label: { en: "Healthcare", hi: "स्वास्थ्य" } }
};

const uiText = {
  eyebrow: { en: "Unified Government Services", hi: "एकीकृत सरकारी सेवाएँ" },
  appTitle: { en: "Gov Service Hub", hi: "सरकारी सेवा केंद्र" },
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

let currentLanguage = "en";
let activeCategory = "all";
let currentSearch = "";
let recognition;

const els = {
  langToggle: document.getElementById("langToggle"),
  searchInput: document.getElementById("searchInput"),
  voiceBtn: document.getElementById("voiceBtn"),
  categoryTabs: document.getElementById("categoryTabs"),
  serviceGrid: document.getElementById("serviceGrid"),
  resultCount: document.getElementById("resultCount"),
  tickerText: document.getElementById("tickerText"),
  noticeBtn: document.getElementById("noticeBtn"),
  noticeModal: document.getElementById("noticeModal"),
  noticeList: document.getElementById("noticeList"),
  closeModalBtn: document.getElementById("closeModalBtn")
};

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

function updateLanguageUI() {
  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (uiText[key]) {
      node.textContent = t(key);
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    if (uiText[key]) {
      node.placeholder = t(key);
    }
  });

  els.langToggle.textContent = currentLanguage === "en" ? "हिंदी" : "English";
  renderTabs();
  renderNotices();
  renderServices();
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

function renderServices() {
  const filtered = services.filter((item) => {
    const categoryMatch = activeCategory === "all" || item.category === activeCategory;
    const searchableText = `${item.title[currentLanguage]} ${item.detail[currentLanguage]}`.toLowerCase();
    const queryMatch = !currentSearch || searchableText.includes(currentSearch.toLowerCase());
    return categoryMatch && queryMatch;
  });

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
      return `
        <article class="service-card">
          <div class="card-top">
            <span class="category-badge">${category.icon} ${category.label[currentLanguage]}</span>
            <button class="read-btn" type="button" data-read-id="${item.id}" aria-label="Read service">🔊</button>
          </div>

          <h3>${item.title[currentLanguage]}</h3>
          <p>${item.detail[currentLanguage]}</p>

          <div class="meta-row">
            <span class="status-pill ${item.status}">${statusLabel(item.status)}</span>
            <span class="feature-pill">${item.category === "healthcare" ? "Care" : "Gov"}</span>
          </div>

          <div class="card-actions">
            <a class="action-btn primary" href="${item.link}" target="_blank" rel="noreferrer">${t("applyNow")}</a>
            <button class="action-btn secondary" type="button" data-share="${item.link}">${t("share")}</button>
          </div>
        </article>
      `;
    })
    .join("");

  els.serviceGrid.querySelectorAll("[data-read-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = services.find((service) => service.id === Number(button.dataset.readId));
      if (item) {
        speakText(`${item.title[currentLanguage]}. ${item.detail[currentLanguage]}`);
      }
    });
  });

  els.serviceGrid.querySelectorAll("[data-share]").forEach((button) => {
    button.addEventListener("click", async () => {
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
}

function renderNotices() {
  els.noticeList.innerHTML = notices
    .map(
      (notice) => `
        <li>
          <strong>${notice.title[currentLanguage]}</strong>
          <span>${notice.detail[currentLanguage]}</span>
        </li>
      `
    )
    .join("");

  const ticker = notices
    .map((notice) => `${notice.title[currentLanguage]} • ${notice.detail[currentLanguage]}`)
    .join("    |    ");
  els.tickerText.textContent = ticker;
}

function speakText(text) {
  if (!("speechSynthesis" in window)) {
    alert(currentLanguage === "en" ? "Speech synthesis is not supported in this browser." : "इस ब्राउज़र में स्पीच सिंथेसिस समर्थित नहीं है।");
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = currentLanguage === "en" ? "en-IN" : "hi-IN";
  utterance.rate = 0.9;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function startVoiceSearch() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert(currentLanguage === "en" ? "Voice search is not supported in this browser." : "इस ब्राउज़र में वॉइस सर्च समर्थित नहीं है।");
    return;
  }

  if (recognition) {
    recognition.stop();
  }

  recognition = new SpeechRecognition();
  recognition.lang = currentLanguage === "en" ? "en-IN" : "hi-IN";
  recognition.interimResults = false;

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    els.searchInput.value = transcript;
    currentSearch = transcript;
    renderServices();
    speakText(currentLanguage === "en" ? `Searching for ${transcript}` : `${transcript} के लिए खोज कर रहा हूँ`);
  };

  recognition.onerror = () => {
    alert(currentLanguage === "en" ? "Voice search could not capture your request." : "वॉइस सर्च आपके अनुरोध को समझ नहीं सका।");
  };

  recognition.start();
}

function toggleLanguage() {
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

function readAllVisible() {
  const matches = services.filter((item) => {
    const categoryMatch = activeCategory === "all" || item.category === activeCategory;
    const text = `${item.title[currentLanguage]} ${item.detail[currentLanguage]}`.toLowerCase();
    const queryMatch = !currentSearch || text.includes(currentSearch.toLowerCase());
    return categoryMatch && queryMatch;
  });

  if (!matches.length) {
    speakText(t("noResultsTitle"));
    return;
  }

  const message = matches.map((item) => `${item.title[currentLanguage]}. ${item.detail[currentLanguage]}`).join(". ");
  speakText(message);
}

document.addEventListener("DOMContentLoaded", () => {
  els.searchInput.addEventListener("input", (event) => {
    currentSearch = event.target.value.trim();
    renderServices();
  });

  els.langToggle.addEventListener("click", toggleLanguage);
  els.voiceBtn.addEventListener("click", startVoiceSearch);
  els.noticeBtn.addEventListener("click", openNoticeModal);
  els.closeModalBtn.addEventListener("click", closeNoticeModal);
  document.querySelector("[data-close='noticeModal']").addEventListener("click", closeNoticeModal);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNoticeModal();
    }
  });

  renderTabs();
  renderNotices();
  renderServices();
});
