const translations = {
  cs: {
    "nav-about": "o\u00A0mně",
    "nav-services": "co\u00A0nabízím",
    "nav-portfolio": "portfolio",
    "link-gd-new": "grafický design",
    "link-vv-new": "výtvarná výchova",
    "nav-contact": "kontakt",
    "email-placeholder": "Váš email",
    "message-placeholder": "Zpráva",
    "submit-value": "Odeslat"
  },
  en: {
    "nav-about": "about\u00A0me",
    "nav-services": "services",
    "nav-portfolio": "portfolio",
    "link-gd-new": "graphic design",
    "link-vv-new": "art education",
    "nav-contact": "contact",
    "email-placeholder": "Your email address",
    "message-placeholder": "Message",
    "submit-value": "Send"
  }
};

let currentLanguage = localStorage.getItem("language") || "cs";

document.addEventListener("DOMContentLoaded", function () {
  changeLanguage(currentLanguage);

  const toggleButton = document.getElementById("toggle-button");
  if (toggleButton) {
    toggleButton.textContent = (currentLanguage === "cs") ? "EN" : "CZ";
    toggleButton.addEventListener("click", toggleLanguage);
  }
});

function toggleLanguage() {
  currentLanguage = (currentLanguage === "cs") ? "en" : "cs";
  localStorage.setItem("language", currentLanguage);
  changeLanguage(currentLanguage);

  const toggleButton = document.getElementById("toggle-button");
  if (toggleButton) {
    toggleButton.textContent = (currentLanguage === "cs") ? "EN" : "CZ";
  }
}

function changeLanguage(lang) {
  // Navigace
  const keys = ["nav-about", "nav-services", "nav-portfolio", "link-gd-new", "link-vv-new", "nav-contact"];
  keys.forEach(key => {
    const el = document.getElementById(key);
    if (el) el.textContent = translations[lang][key];
  });

  // Formulář – změna placeholderů a submit tlačítka
  const emailInput = document.getElementById("email");
  const messageTextarea = document.getElementById("message");
  const submitButton = document.querySelector('input[type="submit"]');

  if (emailInput) emailInput.placeholder = translations[lang]["email-placeholder"];
  if (messageTextarea) messageTextarea.placeholder = translations[lang]["message-placeholder"];
  if (submitButton) submitButton.value = translations[lang]["submit-value"];

  // Skryje nebo zobrazí prvky s atributem data-lang
  const elements = document.querySelectorAll("[data-lang]");
  elements.forEach((element) => {
    element.style.display = (element.getAttribute("data-lang") === lang) ? "" : "none";
  });
}
