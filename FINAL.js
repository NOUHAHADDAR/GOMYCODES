document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".container, form");

    function revealSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight - 50) {
                section.classList.add("visible");
            }
        });
    }

    // Appliquer l'effet au chargement et au scroll
    window.addEventListener("scroll", revealSections);
    revealSections(); // Vérifier au démarrage

    // Mode sombre
    const toggleDarkMode = document.getElementById("toggle-dark-mode");
    toggleDarkMode.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Ajout d'un effet de clic sur les boutons de réservation
    document.querySelectorAll(".cta-btn").forEach(btn => {
        btn.addEventListener("click", function() {
            alert("Réservation en cours...");
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".container, form");

    function revealSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight - 50) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections();

    // Mode sombre
    const toggleDarkMode = document.getElementById("toggle-dark-mode");
    toggleDarkMode.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Confirmation de réservation
    const reservationForm = document.getElementById("reservation-form");
    reservationForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Empêche la soumission classique

        // Récupérer les valeurs du formulaire
        const nom = document.getElementById("nom").value;
        const email = document.getElementById("email").value;
        const destination = document.getElementById("destination").value;

        // Vérifier si tous les champs sont remplis
        if (nom && email && destination) {
            // Afficher le message de confirmation
            alert(`✅ Merci ${nom} ! Votre réservation pour ${destination} a bien été prise en compte. 📩 Un email de confirmation a été envoyé à ${email}.`);
            
            // Réinitialiser le formulaire après soumission
            reservationForm.reset();
        } else {
            alert("⚠️ Veuillez remplir tous les champs du formulaire !");
        }
    });
}); 
