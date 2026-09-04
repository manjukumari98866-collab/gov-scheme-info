// Replace the placeholder values with the Firebase config from your project.
const firebaseConfig = {
  apiKey: "AIzaSyAcVRnT3oPdzxg_Gj-pTeabXqsgAy6MAj0",
  authDomain: "my-gov-info-e74f5.firebaseapp.com",
  projectId: "my-gov-info-e74f5",
  storageBucket: "my-gov-info-e74f5.firebasestorage.app",
  messagingSenderId: "817915008860",
  appId: "1:817915008860:web:fb8e78d28cbed29c585399"
};

const firebaseReady = typeof firebase !== "undefined" && firebaseConfig.apiKey !== "YOUR_FIREBASE_API_KEY";

// Set this before api-client.js for a deployed backend, or keep localhost for local development.
window.BHARAT_API_BASE_URL = window.BHARAT_API_BASE_URL || "http://localhost:5000/api";

if (firebaseReady && !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function getFirebaseAuth() {
  return firebaseReady ? firebase.auth() : null;
}

function signInWithGoogle() {
  const auth = getFirebaseAuth();
  if (!auth) {
    alert("Add your Firebase config in firebase-config.js first.");
    return Promise.reject(new Error("Firebase is not configured."));
  }
  return auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
}

function getCurrentTier() {
  try {
    const profile = JSON.parse(localStorage.getItem("gov-profile") || "null");
    return profile?.tier || localStorage.getItem("gov-tier") || "Free";
  } catch (error) {
    return "Free";
  }
}

function isProUser() {
  return getCurrentTier() === "Pro";
}

function saveUserTier(tier) {
  const normalizedTier = tier === "Pro" ? "Pro" : "Free";
  localStorage.setItem("gov-tier", normalizedTier);
  try {
    const profile = JSON.parse(localStorage.getItem("gov-profile") || "null");
    if (profile) {
      profile.tier = normalizedTier;
      localStorage.setItem("gov-profile", JSON.stringify(profile));
    }
  } catch (error) {
    // Keep the tier in its dedicated localStorage key if the profile is invalid.
  }
  return normalizedTier;
}

function openPricingPage() {
  window.location.href = "pricing.html";
}

function requirePro(featureName) {
  if (isProUser()) return true;
  const feature = featureName || "This feature";
  if (window.confirm(`${feature} is available on Pro. View plans now?`)) openPricingPage();
  return false;
}