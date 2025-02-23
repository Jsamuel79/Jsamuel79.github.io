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

// Sélectionner toutes les sections
const sections = document.querySelectorAll("section");

function checkVisibility() {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        // Si la section est visible dans la fenêtre, ajouter la classe 'visible'
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            section.classList.add("visible");
        } else {
            section.classList.remove("visible");
        }
    });
}

// Écouter le scroll et vérifier la visibilité
window.addEventListener("scroll", checkVisibility);

// Initialiser pour les sections déjà visibles au premier chargement
checkVisibility();

let isScrolling = false;

window.addEventListener("scroll", () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            checkVisibility();
            isScrolling = false;
        });
        isScrolling = true;
    }
});

