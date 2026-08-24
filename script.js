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

// REAL-TIME NEWS FETCHING SYSTEM FROM LIVE RSS FEEDS
async function fetchLiveNews() {
    const ticker = document.getElementById('liveNewsTicker');
    const rssFeedUrl = encodeURIComponent('https://news.google.com/rss/search?q=sarkari+yojana+india&hl=hi&gl=IN&ceid=IN:hi');
    const apiUrl = https://api.rss2json.com/v1/api.json?rss_url=${rssFeedUrl};

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === 'ok' && data.items.length > 0) {
            const headlines = data.items.slice(0, 5).map(item => 🔴 ${item.title}).join(' | ');
            ticker.innerHTML = headlines;
        } else {
            ticker.innerHTML = "🔴 Live Updates: PM Kisan Agli Kist Jari | Ayushman Bharat 5 Lakh Free Treatment | PM Awas Yojana New Registrations Open 2026!";
        }
    } catch (error) {
        ticker.innerHTML = "🔴 Live Updates: PM Kisan Agli Kist Jari | Ayushman Bharat 5 Lakh Free Treatment | PM Awas Yojana New Registrations Open 2026!";
    }
}

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
    container.innerHTML = '';

    if (items.length === 0) {
        container.innerHTML = <p style="grid-column: 1/-1; text-align: center; color: #666;">${currentLang === 'hi' ? 'Koi yojana nahi mili.' : 'No schemes found.'}</p>;
        return;
    }

    const savedIds = getSavedIds();

    items.forEach(scheme => {
        const isSaved = savedIds.includes(scheme.id);
        const title = currentLang === 'hi' ? scheme.title_hi : scheme.title_en;
        const desc = currentLang === 'hi' ? scheme.desc_hi : scheme.desc_en;
        const shareText = encodeURIComponent(Check this Government Scheme: ${title} - ${scheme.link});

        const cardHtml = `
            <div class="scheme-card">
                <div class="card-header">
                    <h3>${title}</h3>