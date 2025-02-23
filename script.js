// Sélectionne le bouton
const darkModeToggle = document.getElementById("dark-mode-toggle");

// Vérifie si l'utilisateur avait déjà activé le mode sombre
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}

// Écoute le clic sur le bouton
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Sauvegarde l'état du mode sombre
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});

