// Dummy Live Elaan Data
const liveNews = [
    {
        title: "Kisan Samman Nidhi - Agli Kist Jari",
        date: "Aaj Ka Elaan",
        detail: "Sarkar ne kisano ke liye nayi kist ka elaan kiya hai. Apne account ka status check karein."
    },
    {
        title: "Free Laptop Yojana 2026",
        date: "Nayi Yojana",
        detail: "10th aur 12th ke meritorious students ke liye online aavedan shuru."
    }
];

// Dummy Schemes Data
const schemes = [
    {
        name: "PM Awas Yojana",
        category: "Housing",
        desc: "Ghar banane ke liye sarkari sahayata aur subsidy.",
        link: "#"
    },
    {
        name: "Ayushman Bharat Card",
        category: "Health",
        desc: "5 Lakh tak ka muft ilaj kisi bhi empanelled hospital me.",
        link: "#"
    },
    {
        name: "PM E-Drive Scheme",
        category: "Transport",
        desc: "Electric vehicles khareedne par subsidy aur incentives.",
        link: "#"
    }
];

// Load Live Elaan
function loadLiveNews() {
    const newsContainer = document.getElementById('live-news-container');
    newsContainer.innerHTML = '';
    liveNews.forEach(news => {
        const newsHtml = `
            <div class="news-card">
                <span class="badge">LIVE</span> <strong>${news.title}</strong> (${news.date})
                <p>${news.detail}</p>
            </div>
        `;
        newsContainer.innerHTML += newsHtml;
    });
}

// Load Schemes
function loadSchemes(data = schemes) {
    const schemesContainer = document.getElementById('schemes-container');
    schemesContainer.innerHTML = '';
    data.forEach(item => {
        const cardHtml = `
            <div class="scheme-card">
                <h3>${item.name}</h3>
                <p><strong>Category:</strong> ${item.category}</p>
                <p>${item.desc}</p>
                <a href="${item.link}" class="apply-btn">Aavedan Karein</a>
            </div>
        `;
        schemesContainer.innerHTML += cardHtml;
    });
}

// Filter Function
function filterSchemes() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const filtered = schemes.filter(item => 
        item.name.toLowerCase().includes(searchText) || 
        item.category.toLowerCase().includes(searchText)
    );
    loadSchemes(filtered);
}

// Initial Load
loadLiveNews();
loadSchemes();