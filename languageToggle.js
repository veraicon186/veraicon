
const translations = {
    "cs": {
        "nav-about": "o\u00A0mně",
        "nav-services": "co\u00A0nabízím",
        "nav-portfolio": "portfolio",
        "link-gd-new": "grafický design",
        "link-vv-new": "výtvarná výchova",
        "nav-contact": "kontakt"
    },
    "en": {
        "nav-about": "about\u00A0me",
        "nav-services": "services",
        "nav-portfolio": "portfolio",
        "link-gd-new": "graphic design",
        "link-vv-new": "art education",
        "nav-contact": "contact"
    }
};

// Načtení nebo nastavení výchozího jazyka
let currentLanguage = localStorage.getItem("language") || "cs";

document.addEventListener("DOMContentLoaded", function() {
    changeLanguage(currentLanguage); // Nastaví jazyk při načtení
    document.getElementById("toggle-button").textContent = (currentLanguage === "cs") ? "EN" : "CZ"; // Změní text tlačítka
    
    document.getElementById("toggle-button").addEventListener("click", toggleLanguage); // Nastaví přepínací funkci na tlačítko
});

function toggleLanguage() {
    currentLanguage = (currentLanguage === "cs") ? "en" : "cs"; // Přepne jazyk
    localStorage.setItem("language", currentLanguage); // Uloží jazyk do localStorage
    changeLanguage(currentLanguage); // Aplikuje jazyk
    document.getElementById("toggle-button").textContent = (currentLanguage === "cs") ? "EN" : "CZ"; // Aktualizace textu tlačítka
}

function changeLanguage(lang) {
    // Aktualizace textů v navigaci pomocí translations objektu
    document.getElementById("nav-about").textContent = translations[lang]["nav-about"];
    document.getElementById("nav-services").textContent = translations[lang]["nav-services"];
    document.getElementById("nav-portfolio").textContent = translations[lang]["nav-portfolio"];
    document.getElementById("link-gd-new").textContent = translations[lang]["link-gd-new"];
    document.getElementById("link-vv-new").textContent = translations[lang]["link-vv-new"];
    document.getElementById("nav-contact").textContent = translations[lang]["nav-contact"];
    
    // Skryje nebo zobrazí ostatní jazykové varianty dle data-lang atributu
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        if (element.getAttribute('data-lang') === lang) {
            element.style.display = ''; // Zobrazí prvek pro aktuální jazyk
        } else {
            element.style.display = 'none'; // Skryje ostatní jazykové varianty
        }
    });
}


 // kontakt -  verze podle jazyka
document.addEventListener('DOMContentLoaded', function () {
    const lang = localStorage.getItem('lang'); // očekává 'cs' nebo 'en'

    if (lang === 'en') {
      document.getElementById('email').placeholder = 'Your email address';
      document.getElementById('message').placeholder = 'Message';
      document.getElementById('submit-button').value = 'Send';
    } else {
      document.getElementById('email').placeholder = 'Váš email';
      document.getElementById('message').placeholder = 'Zpráva';
      document.getElementById('submit-button').value = 'Odeslat';
    }
  });