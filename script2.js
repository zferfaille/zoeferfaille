window.addEventListener('load', function() {
    setActiveTab('en_ce_moment'); // Définit l'onglet "en_ce_moment" comme actif par défaut
    setVisibility('en_ce_moment_div'); 
    setCVScroll(); // Gérer la barre de défilement pour le CV
});


document.getElementById('en_ce_moment').addEventListener('click', function() {
    setActiveTab('en_ce_moment');
    setVisibility('en_ce_moment_div');
});

document.getElementById('realisations').addEventListener('click', function() {
    setActiveTab('realisations');
    setVisibility('realisations_div');
 setRealisationsScroll();

});

document.getElementById('competences').addEventListener('click', function() {
    setActiveTab('competences');
    setVisibility('competences_div');
});

document.getElementById('contact').addEventListener('click', function() {
    setActiveTab('contact');
    setVisibility('contact_div');
});

document.getElementById('cv').addEventListener('click', function() {
    setActiveTab('cv');
    setVisibility('cv_div');
     setCVScroll();
});

//fonction qui permet de rendre les onglets actifs/non actifs pour le survol 
function setActiveTab(tabId) {
    var tabElements = document.querySelectorAll('.sidebar li a');
    for (var i = 0; i < tabElements.length; i++) {
        var tabElement = tabElements[i];
        if (tabElement.id === tabId) {
            tabElement.parentNode.classList.add('active');
        } else {
            tabElement.parentNode.classList.remove('active');
        }
    }
}





function setVisibility(tabId) {
    var tabElements = document.querySelectorAll('.selected-items-box div');
    for (var i = 0; i < tabElements.length; i++) {
        var tabElement = tabElements[i];

        if (tabElement.id === tabId) {
            tabElement.style.visibility = "visible";
            showChildrenElements(tabElement);  
        } else {
            tabElement.style.visibility = "hidden";
            hideChildrenElements(tabElement);
        }
    }
}

function showChildrenElements(element) {
    var children = element.querySelectorAll('*');
    for (var i = 0; i < children.length; i++) {
        children[i].style.visibility = "visible";
    }
}

function hideChildrenElements(element) {
    var children = element.querySelectorAll('*');
    for (var i = 0; i < children.length; i++) {
        children[i].style.visibility = "hidden";
    }
}



function setCVScroll() {
    var cvDiv = document.getElementById('cv_div');
    cvDiv.style.overflowY = "auto"; // Ajoute une barre de défilement verticale
    cvDiv.style.height = "400px"; 
}

function setRealisationsScroll() {
    var realDiv = document.getElementById('realisations_div');
   realDiv.style.overflowY = "auto"; // Ajoute une barre de défilement verticale
    realDiv.style.height = "400px"; 
}

