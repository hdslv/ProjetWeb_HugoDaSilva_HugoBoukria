const images = ["img/campus.jpg", "img/campus2.jpg", "img/campus3.jpg"]; 
let index = 0;

function changeImage() {
    const carousel = document.getElementById("carousel-image");
    if (carousel) {
        index = (index + 1) % images.length;
        carousel.src = images[index];
    }
}

// Change l'image toutes les 5 secondes
setInterval(changeImage, 5000);

// Fonction pour basculer le mode
function toggleDarkMode() {
    const isLight = document.body.classList.toggle("light");
    const btn = document.querySelector(".mode-toggle-btn");
    
    if (btn) {
        btn.innerText = isLight ? "🌙 Mode sombre" : "☀️ Mode clair";
    }
    
    // On enregistre le choix pour que l'accueil reste dans le mode choisi
    localStorage.setItem("theme", isLight ? "light" : "dark");
}

// Au chargement, on vérifie si l'utilisateur avait choisi le mode clair
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem("theme");
    const btn = document.querySelector(".mode-toggle-btn");
    
    // Si on est sur l'accueil et qu'un thème clair était sauvé
    if (savedTheme === "light") {
        document.body.classList.add("light");
        if (btn) btn.innerText = "🌙 Mode sombre";
    }

});


