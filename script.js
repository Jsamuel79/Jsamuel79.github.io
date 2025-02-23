// Sélectionne le bouton
const darkModeToggle = document.getElementById("dark-mode-toggle");

// Fonction pour mettre à jour le texte du bouton
function updateButtonText() {
    if (document.body.classList.contains("dark-mode")) {
        darkModeToggle.textContent = "☀️ Mode Clair";
    } else {
        darkModeToggle.textContent = "🌙 Mode Sombre";
    }
}

// Vérifie si l'utilisateur avait déjà activé le mode sombre
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    updateButtonText();
}

// Écoute le clic sur le bouton
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Met à jour le texte du bouton
    updateButtonText();

    // Sauvegarde l'état du mode sombre
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});

