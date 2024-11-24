document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("preferredLanguage")) {
      const userLanguage = navigator.language || navigator.userLanguage;
      if (userLanguage.startsWith("cs")) {
        localStorage.setItem("preferredLanguage", "cs");
        if (location.pathname.startsWith("/en")) {
          location.href = location.pathname.replace("/en", "");
        }
      } else {
        localStorage.setItem("preferredLanguage", "en");
        if (!location.pathname.startsWith("/en")) {
          location.href = "/en" + location.pathname;
        }
      }
    }
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-button");
  
    const pathMapping = {
      "/index.html": "/en/index.html",
      "/o-mne/": "/en/about-me/",
      "/co-nabizim/": "/en/services/",
      "/kontakt/": "/en/contact/",
      "/graficky-design/": "/en/graphic-design/",
      "/vytvarne-vzdelavani/": "/en/art-education/",
    };
  
    const reverseMapping = Object.fromEntries(
      Object.entries(pathMapping).map(([key, value]) => [value, key])
    );
  
    if (location.pathname.startsWith("/en")) {
      toggleButton.textContent = "CZ";
    } else {
      toggleButton.textContent = "EN";
    }
  
    toggleButton.addEventListener("click", () => {
      const currentPath = location.pathname;
      const newPath =
        currentPath.startsWith("/en")
          ? reverseMapping[currentPath] || currentPath.replace("/en", "")
          : pathMapping[currentPath] || "/en" + currentPath;
  
      location.href = newPath;
    });
  });
  