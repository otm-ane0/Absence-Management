document.addEventListener('DOMContentLoaded', function() {
    // Désactiver initialement le select des niveaux
    const niveauSelect = document.getElementById('niveau_select');
    niveauSelect.disabled = true;

    // Écouter les changements sur le select de filière
    const filiereSelect = document.getElementById('filiere_select');
    filiereSelect.addEventListener('change', function(e) {
        const filiereId = e.target.value;
        if (filiereId) {
            // Activer le select des niveaux
            niveauSelect.disabled = false;
            // Charger les niveaux correspondants à la filière
            chargerNiveaux(filiereId);
        } else {
            // Si aucune filière n'est sélectionnée, désactiver le select des niveaux
            niveauSelect.disabled = true;
            niveauSelect.innerHTML = '<option value="">Sélectionnez un niveau</option>';
        }
    });
});

// Fonction pour charger les niveaux
function chargerNiveaux(filiereId) {
    fetch(`/api/niveaux/${filiereId}`)  // Ajustez l'URL selon votre API
        .then(response => response.json())
        .then(niveaux => {
            const niveauSelect = document.getElementById('niveau_select');
            niveauSelect.innerHTML = '<option value="">Sélectionnez un niveau</option>';

            niveaux.forEach(niveau => {
                const option = document.createElement('option');
                option.value = niveau.id;
                option.textContent = niveau.nom;
                niveauSelect.appendChild(option);
            });
        });
}
