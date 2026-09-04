/* Configure these values after an ad provider approves the site. */
const GOV_ADS_CONFIG = {
  provider: "adsense",
  publisherId: "",
  slots: {
    top: "",
    results: ""
  }
};

(function initializeAds() {
  const configured = GOV_ADS_CONFIG.provider === "adsense" && /^ca-pub-\d+$/.test(GOV_ADS_CONFIG.publisherId);
  document.querySelectorAll("[data-ad-slot]").forEach((slot) => {
    if (!configured) {
      slot.innerHTML = "<span>Advertisement space</span>";
      slot.classList.add("ad-placeholder");
      return;
    }

    slot.innerHTML = `<ins class="adsbygoogle" style="display:block" data-ad-client="${GOV_ADS_CONFIG.publisherId}" data-ad-slot="${slot.dataset.adSlot}" data-ad-format="auto" data-full-width-responsive="true"></ins>`;
  });

  if (!configured) return;
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${GOV_ADS_CONFIG.publisherId}`;
  script.crossOrigin = "anonymous";
  script.onload = () => document.querySelectorAll(".adsbygoogle").forEach(() => (window.adsbygoogle = window.adsbygoogle || []).push({}));
  document.head.appendChild(script);
})();
