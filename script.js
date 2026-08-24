const schemes = [
    { title: "PM Awas Yojana", category: "Housing", description: "Ghar banane ke liye sarkari sahayata aur subsidy paayein." },
    { title: "Ayushman Bharat Card", category: "Health", description: "5 Lakh tak ka muft ilaj har saal sarakari hospitals mein." },
    { title: "PM Kisan Samman Nidhi", category: "Agriculture", description: "Kisano ko har saal 6,000 rupaye ki aarthik sahayata." },
    { title: "Free Laptop Yojana 2026", category: "Education", description: "10th aur 12th paas students ko muft laptop vitran." },
    { title: "PM Ujjwala Yojana", category: "Housing", description: "Muft LPG gas connection aur subsidy cylinder facility." }
];

function displaySchemes(items) {
    const container = document.getElementById('schemeContainer');
    container.innerHTML = '';
    if (items.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #666;">Koi yojana nahi mili.</p>';
        return;
    }
    items.forEach(scheme => {
        container.innerHTML += `
            <div class="scheme-card">
                <h3>${scheme.title}</h3>
                <span class="category-tag">${scheme.category}</span>
                <p>${scheme.description}</p>
                <button class="apply-btn">Jankari Dekhein</button>
            </div>
        `;
    });
}

// Live Search Filter
document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchText = e.target.value.toLowerCase();
    const filtered = schemes.filter(s => 
        s.title.toLowerCase().includes(searchText) || 
        s.category.toLowerCase().includes(searchText) ||
        s.description.toLowerCase().includes(searchText)
    );
    displaySchemes(filtered);
});

// Category Filter
function filterCategory(categoryName) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (categoryName === 'all') {
        displaySchemes(schemes);
    } else {
        displaySchemes(schemes.filter(s => s.category === categoryName));
    }
}

// 🎤 VOICE SEARCH SYSTEM (Web Speech API)
function startVoiceSearch() {
    const voiceBtn = document.getElementById('voiceBtn');
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        alert("Aapke browser mein Voice Search support nahi hai. Chrome browser use karein.");
        return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'hi-IN'; // Hindi voice input support

    voiceBtn.innerText = "🎙️ Sun raha hoon...";
    voiceBtn.style.background = "#d32f2f";

    recognition.start();

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        document.getElementById('searchInput').value = transcript;
        document.getElementById('searchInput').dispatchEvent(new Event('input'));
        voiceBtn.innerText = "🎤 Bolen";
        voiceBtn.style.background = "#0288d1";
    };

    recognition.onerror = function() {
        voiceBtn.innerText = "🎤 Bolen";
        voiceBtn.style.background = "#0288d1";
    };
}

// 🤖 AI ASSISTANT LOGIC
function askAIAssistant() {
    const age = parseInt(document.getElementById('userAge').value);
    const role = document.getElementById('userRole').value;
    const resBox = document.getElementById('aiResponse');

    if (!age) {
        resBox.style.display = 'block';
        resBox.innerHTML = "⚠️ Kripya apni umar daalein.";
        return;
    }

    let suggestion = "";
    if (role === 'student' && age <= 25) {
        suggestion = "💡 *AI Suggestion:* Aap *Free Laptop Yojana 2026* aur *Scholarship Schemes* ke liye eligible hain!";
    } else if (role === 'farmer') {
        suggestion = "💡 *AI Suggestion:* Aapko *PM Kisan Samman Nidhi* aur *Kusum Solar Scheme* mein apply karna chahiye.";
    } else if (age >= 18) {
        suggestion = "💡 *