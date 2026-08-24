let currentLang = 'hi';
let currentCategory = 'all';

const schemes = [
    { 
        id: 1,
        title_hi: "PM Awas Yojana", title_en: "PM Awas Yojana",
        category: "Housing", state: "Central",
        desc_hi: "Ghar banane ke liye sarkari sahayata aur subsidy paayein.",
        desc_en: "Get government assistance and subsidy for house construction.",
        link: "https://pmaymis.gov.in"
    },
    { 
        id: 2,
        title_hi: "Ayushman Bharat Card", title_en: "Ayushman Bharat Card",
        category: "Health", state: "Central",
        desc_hi: "5 Lakh tak ka muft ilaj har saal sarakari hospitals mein.",
        desc_en: "Free medical treatment up to 5 Lakh per year in empaneled hospitals.",
        link: "https://pmjay.gov.in"
    },
    { 
        id: 3,
        title_hi: "PM Kisan Samman Nidhi", title_en: "PM Kisan Samman Nidhi",
        category: "Agriculture", state: "Central",
        desc_hi: "Kisano ko har saal 6,000 rupaye ki aarthik sahayata.",
        desc_en: "Financial assistance of Rs. 6,000 per year for farmers.",
        link: "https://pmkisan.gov.in"
    },
    { 
        id: 4,
        title_hi: "Free Laptop Yojana 2026", title_en: "Free Laptop Scheme 2026",
        category: "Education", state: "UP",
        desc_hi: "10th aur 12th paas students ko muft laptop vitran.",
        desc_en: "Free laptop distribution for 10th & 12th pass meritorious students.",
        link: "https://up.gov.in"
    },
    { 
        id: 5,
        title_hi: "PM Ujjwala Yojana", title_en: "PM Ujjwala Scheme",
        category: "Housing", state: "Central",
        desc_hi: "Muft LPG gas connection aur subsidy cylinder facility.",
        desc_en: "Free LPG gas connection and subsidized cylinder distribution.",
        link: "https://www.pmuy.gov.in"
    }
];

function getSavedIds() {
    return JSON.parse(localStorage.getItem('savedSchemes') || '[]');
}

function toggleSaveScheme(id) {
    let saved = getSavedIds();
    if (saved.includes(id)) {
        saved = saved.filter(item => item !== id);
    } else {
        saved.push(id);
    }
    localStorage.setItem('savedSchemes', JSON.stringify(saved));
    applyFilters();
}

function displaySchemes(items) {
    const container = document.getElementById('schemeContainer');
    if (!container) return;
    container.innerHTML = '';

    if (items.length === 0) {
        container.innerHTML = <p style="grid-column: 1/-1; text-align: center; color: #666; font-size: 16px;">${currentLang === 'hi' ? 'Koi yojana nahi mili.' : 'No schemes found.'}</p>;
        return;
    }

    const savedIds = getSavedIds();

    items.forEach(scheme => {
        const isSaved = savedIds.includes(scheme.id);
        const title = currentLang === 'hi' ? scheme.title_hi : scheme.title_en;
        const desc = currentLang === 'hi' ? scheme.desc_hi : scheme.desc_en;
        const shareText = encodeURIComponent(Check this Government Scheme: ${title} - ${scheme.link});

        const cardHtml = <div class="scheme-card"><div class="card-header"><h3>${title}</h3><button class="save-btn" onclick="toggleSaveScheme(${scheme.id})">${isSaved ? '❤️ Saved' : '🤍 Save'}</button></div><span class="category-tag">${scheme.category}</span><span class="state-tag">${scheme.state}</span><p>${desc}</p><div class="card-actions"><a href="${scheme.link}" target="_blank" class="apply-btn">${currentLang === 'hi' ? 'Official Portal' : 'Apply Now'}</a><a href="https://api.whatsapp.com/send?text=${shareText}" target="_blank" class="share-btn">📲 Share</a></div></div>;
        
        container.innerHTML += cardHtml;
    });
}function applyFilters() {
    const inputElem = document.getElementById('searchInput');
    const stateElem = document.getElementById('stateFilter');
    
    let rawText = inputElem ? inputElem.value.toLowerCase().trim() : '';
    let searchText = rawText.replace(/kissan/g, 'kisan');

    const selectedState = stateElem ? stateElem.value : 'all';

    const filtered = schemes.filter(s => {
        const matchesSearch = s.title_hi.toLowerCase().includes(searchText) || 
                              s.title_en.toLowerCase().includes(searchText) ||
                              s.category.toLowerCase().includes(searchText) ||
                              s.desc_hi.toLowerCase().includes(searchText);

        const matchesCategory = (currentCategory === 'all') || (s.category === currentCategory);
        const matchesState = (selectedState === 'all') || (s.state === selectedState);

        return matchesSearch && matchesCategory && matchesState;
    });

    displaySchemes(filtered);
}

function filterCategory(categoryName, btn) {
    currentCategory = categoryName;
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    applyFilters();
}

function showSavedSchemes(btn) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    const savedIds = getSavedIds();
    const savedList = schemes.filter(s => savedIds.includes(s.id));
    displaySchemes(savedList);
}

function toggleLanguage() {
    currentLang = currentLang === 'hi' ? 'en' : 'hi';
    const langBtn = document.getElementById('langBtn');

    if (currentLang === 'en') {
        if(langBtn) langBtn.innerText = 'हिंदी';
        document.getElementById('appTitle').innerText = '🏛️ Government Scheme Helper';
        document.getElementById('appSub').innerText = 'All government schemes live information in one place';
        document.getElementById('searchTitle').innerText = '🔍 Search Schemes';
        document.getElementById('schemesTitle').innerText = '📋 Featured Schemes';
        document.getElementById('searchInput').placeholder = 'Type scheme name or keyword (e.g. Kisan, Health, Laptop)...';
        document.getElementById('aiTitle').innerText = '🤖 Scheme Smart AI Assistant';
        document.getElementById('aiDesc').innerText = 'Enter your Age and Profession, AI will suggest the best scheme:';
        document.getElementById('aiBtn').innerText = 'Suggest Schemes';
    } else {
        if(langBtn) langBtn.innerText = 'English';
        document.getElementById('appTitle').innerText = '🏛️ Sarkari Yojana Helper';
        document.getElementById('appSub').innerText = 'Aapki sabhi sarkari yojanaon ki live jankari ek jagah';
        document.getElementById('searchTitle').innerText = '🔍 Yojana Dhoondhein';
        document.getElementById('schemesTitle').innerText = '📋 Pramukh Yojanaayein';
        document.getElementById('searchInput').placeholder = 'Yojana ka naam ya keyword (e.g. Kisan, Health, Laptop)...';
        document.getElementById('aiTitle').innerText = '🤖 Yojana Smart AI Assistant';
        document.getElementById('aiDesc').innerText = 'Apni Umar (Age) aur Profession batayein, AI aapko best yojana sujhaye ga:';
        document.getElementById('aiBtn').innerText = 'Yojana Sujhaayein';
    }
    applyFilters();
}

function startVoiceSearch() {
    const voiceBtn = document.getElementById('voiceBtn');
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        alert("Voice Search only works in Chrome.");
        return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = currentLang === 'hi' ? 'hi-IN' : 'en-US';

    voiceBtn.innerText = "🎙️ Listening...";
    recognition.start();

    recognition.onresult = function(event) {
        document.getElementById('sear