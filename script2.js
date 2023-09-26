// Les contenus des onglets en tant que chaînes de caractères
var tabContents = {
  'tab1': `
  <h1 class="titre">En ce moment</h1>   
    		
  <img src="inp.png" alt="logoISA" id="logo_isa"/>


      <p id="p_stage"> Effectuant ma dernière année à l'école, je cherche activement mon stage de fin d'étude qui débutera au mois de février pour une durée de 6 mois.
      Je souhaiterais pouvoir effectuer mon stage dans l'UX Design afin d'approfondir mes connaissances dans la CCU :
      
       <br><br>
      ● Maquettage<br>
      ● Conception d'IHM<br>
      ● Requête et analyse des besoins utilisateurs<br>
      ● Présentation des résultats<br>
      </p>
`,
'tab2': `
<h1 class="titre">Réalisations</h1>

<table class="table table-bordered">
<tbody>
  <tr>
    <td class="card">
      <img src="logo_stage.png" alt="Image de la carte" class="card-img">

        <h5 class="card-title">Stage de Recherche en comportement alimentaire mai - septembre 2023</h5>
        <p class="card-text">
        
        J'ai occupé le poste de chargée de projet de recherche en comportement alimentaire. Le projet était un Appel à Manifestation d'Intérêt de la Métropole Lilloise, en collaboration avec JUNIA et l'Anthropo-Lab.
            JUNIA développe une expertise et une offre autour de l'analyse sensorielle, et l’Anthropo-Lab est un laboratoire d'anthropologie expérimentale qui vise à comprendre et faire évoluer les comportements humains. Mon rôle etait d’identifier des marqueurs physiologiques qui traduisent l’appréciation et les émotions lors d’un acte de consommation.
            Mes missions étaient alors de réaliser une revue de littérature, de mettre en place un protocole expérimental, d'analyser les résultats et de les présenter.

        </p>
        <a href="https://docs.google.com/document/d/1ZViDLfTyY3a9MSZ0Gjz8YBHy8ijyGiYGfdVEjjE9QxQ/edit?usp=sharing">Voir le rapport</a>

        <div class="keyword-buttons">
          <span class="keyword-button">#Recherche</span>
          <span class="keyword-button">#FoodScience</span>
          <span class="keyword-button">#Physiologie</span>
        </div>

    </td>
  </tr>
</tbody>
</table>
	
<table class="table table-bordered">
<tbody>
  <tr>
    <td class="card">
      <img src="openBCI.jfif" alt="Image de la carte" class="card-img">

        <h5 class="card-title">Stage Ingénieure de Recherche - 2022</h5>
        <p class="card-text">J'ai travaillé un mois aux côtés d'une Ingénieure de Recherche dans un laboratoire de Sciences cognitives Scalab à Lille. Mes missions étient de prendre en main un casque EEG OpenBCI, de faire une fiche technique et de réaliser un démonstrateur. J'ai pu mettre en place mes compétences en langage Python pour coder un démonstrateur capable de streamer les données du casque en direct, de diffuser sur l'écran une stimulation visuelle périodique et d'enregistrer et traiter les données sous formes de graphiques.</p>
        <a href="https://docs.google.com/document/d/1Fok7RhiAk4yhXiB-a9YoCXeTK-VQ9idydssgww2hLZg/edit?usp=sharing" target="_blank" class="btn btn-primary">Voir le rapport</a>

        <div class="keyword-buttons">
          <span class="keyword-button">#Recherche</span>
          <span class="keyword-button">#SciencesCognitives</span>
          <span class="keyword-button">#Python</span>
          <span class="keyword-button">#EEG</span>
        </div>
    </td>
  </tr>
</tbody>
</table>
<table class="table table-bordered">
<tbody>
  <tr>
    <td class="card">
      <img src="TER.jfif" alt="Image de la carte" class="card-img">

        <h5 class="card-title">Travail Encadré de Recherche (TER) - 2020 / 2021</h5>
        <p class="card-text">Projet encadré par un chercheur en sciences cognitives sur l'étude du lien entre la perception d'objets dans un environnement 3D et la motricité. J'ai eu l'occasion de faire une revue de littérature, d'organiser les passations expérimentales, d'analyser les données, et de rédiger le rapport sous forme d'article scientifique</p>
        <a href="https://drive.google.com/file/d/17PeNToYXTp0lUhW8oK-twm2W5qe-eSw3/view?usp=sharing" target="_blank"class="btn btn-primary">Voir le rapport</a>

      <div class="keyword-buttons">
        <span class="keyword-button">#Recherche</span>
        <span class="keyword-button">#SciencesCognitives</span>
        <span class="keyword-button">#PerceptionMotricite</span>
      </div>
    </td>
  </tr>
</tbody>
</table>

<table class="table table-bordered">
<tbody>
  <tr>
    <td class="card">
      <img src="IconeApp.png" alt="Image de la carte" class="card-img">

        <h5 class="card-title">Conception d'IHM</h5>
        <p class="card-text">Notre projet avec un client extérieur concernait la réalisation d'une maquette d'interface pour une application de quiz mobile sur le thème de l'environnement. Nous avons dû réalisé un recueil des besoins utilisateurs, des persona, modéliser la maquette et enfin la tester.</p>
        <a href="https://www.figma.com/proto/pf6D0IQ39ddqMlAz33TsQl/PINGOUIN?type=design&node-id=81-282&t=i3oj6fDY9Vpoiu4X-1&scaling=scale-down&page-id=12%3A2&starting-point-node-id=81%3A282&mode=design">Voir la maquette</a>
        
        <div class="keyword-buttons">
          <span class="keyword-button">#UXDesign</span>
          <span class="keyword-button">#Maquettage</span>
          <span class="keyword-button">#Figma</span>
        </div>
    </td>
  </tr>
</tbody>
</table>

<table class="table table-bordered">
<tbody>
  <tr>
    <td class="card">
      <img src="UXCleaner.png" alt="Image de la carte" class="card-img">

        <h5 class="card-title">UXCleaner - 2023</h5>
        <p class="card-text">Réalisation d'une extension web permettant de détecter les dark pattern et le dark UX. Implémentation d'un score permettant d'évaluer la fiabilité d'un site web. Réalisation d'une maquette et observations d'utilisateurs. Mon rôle était à la fois d'encadrer une partie de l'équipe en mettant en application mes apprentissages de gestion de projet et de connaissances. Je faisais également partie du pôle UX, en charge de la maquette de l'extension, de l'idéation des détections de dark patterns, et de mise en place des oberservations utilisateurs.</p>
        <a href="https://www.figma.com/proto/uiSQZU10A8I15pCKNXH1ky/Maquette_-UXCleaner_VRORO-(Copy)?node-id=104-323&starting-point-node-id=1%3A2&mode=design" target="_blank" class="btn btn-primary">Voir la maquette</a>

        <div class="keyword-buttons">
          <span class="keyword-button">#UX</span>
          <span class="keyword-button">#Développement</span>
          <span class="keyword-button">#CCU</span>
      </div>
    </td>
  </tr>
</tbody>
</table>

<table class="table table-bordered">
<tbody>
  <tr>
    <td class="card">
      <img src="logoETE.png" alt="Image de la carte" class="card-img">

        <h5 class="card-title">Projet Entraîne Ton Estime (ETE) - 2021</h5>
        <p class="card-text">Le projet visait la réalisation d'un serious game permettant l'entraînement et l'amélioration de l'estime de soi. Etant dans le pôle Recherche, mes missions étaient les suivantes : recherches sur l'état de l'art, idéation d'un protocole expérimental, création de tests permettant d'évaluer l'estime de soi et passations expérimentales. </p>
        <div class="keyword-buttons">
        <span class="keyword-button">#SciencesCognitives</span>
        <span class="keyword-button">#CCU</span>
        <span class="keyword-button">#Recherche</span>
    </div>
    </td>
  </tr>
</tbody>
</table>		

<table class="table table-bordered">
<tbody>
  <tr>
    <td class="card">
      <img src="logoMIXSC.png" alt="Image de la carte" class="card-img">

        <h5 class="card-title">M.I.x.S.C - 2021-2022</h5>
        <p class="card-text">Notre projet avec un client extérieur était d'étudier le lien entre les émotions et la musique. Nous avons donc créé une musique utilisant les battements bi-neuronaux, permettant la relaxation. Pour mesurer le niveau de relaxation; nous avons utilisé le casque EEG EMOTIV. Nous avons ainsi réalisé un état de l'art, crée une musique ainsi qu'un protocole expérimental. Enfin nous avons traité et analysé les données. </p>
        <div class="keyword-buttons">
          <span class="keyword-button">#SciencesCognitives</span>
          <span class="keyword-button">#EEG</span>
          <span class="keyword-button">#Recherche</span>
          <span class="keyword-button">#Protocole</span>
        </div>
    </td>
  </tr>
</tbody>
</table>	
`,
'tab3': `
  <h1 class="titre">Compétences</h1>
  <table>
      <thead>
          <tr>
              <th>Langages informatiques</th>
              <th>Facteurs humains</th>
              <th>Soft Skills</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>Python<br> C#<br> HTML<br> CSS<br> JavaScript<br> PHP<br> SQL<br> RStudio <br> Kotlin <br> Matlab </td>
              <td>CCU<br> UXDesign<br> Maquettage<br> Conception d'IHM</td>
              <td>Curiosité<br> Adaptabilité<br> Empathie</td>
          </tr>
      </tbody>
  </table>
`,
'tab4': `
  <h1 class="titre">Contact</h1>
  <strong>Adresse mail :</strong>
  <span class="email">zferfaille@ensc.fr</span>
  <p>
      <strong>Linkedin :</strong>
      <a href="https://www.linkedin.com/in/zo%C3%A9-ferfaille/" target="_blank" id="in">
          <img src="inn.png" alt="profil" id="logo_in"/>
      </a>
  </p>
`,
'tab5': `
<img src="cv_portfolio.png" alt="profil"  width="1100" height="1500" />
`,
  };
  
  document.getElementById('en_ce_moment').parentNode.classList.add('active');

  function changeTab(tabId) {
    // Récupérer la div de contenu
    var contentDiv = document.getElementById('content');
  
    // Effacer le contenu actuel
    contentDiv.innerHTML = '';
  
    // Injecter le contenu approprié en fonction de l'onglet cliqué
    if (tabContents.hasOwnProperty(tabId)) {
      contentDiv.innerHTML = tabContents[tabId];
    } else {
      contentDiv.innerHTML = 'Contenu par défaut';
    }
  }
  

  window.onload = function() {
    changeTab('tab1');
  };



  document.getElementById('en_ce_moment').addEventListener('click', function() {
   
    // Ajouter la classe active à l'onglet actuel
    document.getElementById('en_ce_moment').parentNode.classList.add('active');

    // Retirer la classe active des autres onglets
    document.getElementById('competences').parentNode.classList.remove('active');
    document.getElementById('realisations').parentNode.classList.remove('active');
    document.getElementById('contact').parentNode.classList.remove('active');
    document.getElementById('cv').parentNode.classList.remove('active');
});



document.getElementById('realisations').addEventListener('click', function() {
    document.getElementById('realisations').parentNode.classList.add('active');

    document.getElementById('competences').parentNode.classList.remove('active');
    document.getElementById('en_ce_moment').parentNode.classList.remove('active');
    document.getElementById('contact').parentNode.classList.remove('active');
    document.getElementById('cv').parentNode.classList.remove('active');

});


document.getElementById('competences').addEventListener('click', function() {
   
    document.getElementById('competences').parentNode.classList.add('active');

    document.getElementById('realisations').parentNode.classList.remove('active');
    document.getElementById('en_ce_moment').parentNode.classList.remove('active');
    document.getElementById('contact').parentNode.classList.remove('active');
    document.getElementById('cv').parentNode.classList.remove('active');


});



document.getElementById('contact').addEventListener('click', function() {
  
    document.getElementById('contact').parentNode.classList.add('active');

    document.getElementById('realisations').parentNode.classList.remove('active');
    document.getElementById('en_ce_moment').parentNode.classList.remove('active');
    document.getElementById('competences').parentNode.classList.remove('active');
    document.getElementById('cv').parentNode.classList.remove('active');


});


document.getElementById('cv').addEventListener('click', function() {
  
  document.getElementById('cv').parentNode.classList.add('active');

  document.getElementById('realisations').parentNode.classList.remove('active');
  document.getElementById('en_ce_moment').parentNode.classList.remove('active');
  document.getElementById('competences').parentNode.classList.remove('active');
  document.getElementById('contact').parentNode.classList.remove('active');


});