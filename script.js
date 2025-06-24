const skillPortfolio = document.getElementById("skillPortfolio");
// const projetPortfolio = document.getElementById("projetPortfolio");

fetch("baseDeDonne.json")
  .then((response) => response.json())
  .then((data) => {
    // const tout = document.getElementById("tout");
    // const web = document.getElementById("web");
    // const PrototypeFigma = document.getElementById("PrototypeFigma");

    // tout.addEventListener("click", () => {
    //     afficherCard(data);
    // });

    // web.addEventListener("click", () => {
    //   const webClick = data.filter((product) => product.category === "web");
    //   afficherCard(webClick);
    // });

    // PrototypeFigma.addEventListener("click", () => {
    //   const PrototypeFigmaClick = data.filter((product) => product.category === "Prototype Figma");
    //   afficherCard(PrototypeFigmaClick);
    // });

    const skill = document.createElement("div");
    skill.classList.add("skill");
skill.id= "MonParcours";

    const outPackOffice = document.createElement("div");
    outPackOffice.classList.add("out");
    const packOffice = data.packOffice;
    packOffice.forEach((element) => {
      console.log(element);
      const packOfficeDiv = document.createElement("div");
      packOfficeDiv.classList.add("pOD");
      packOffice.textContent = "PackOffice";

      const logo = document.createElement("img");
      logo.src = element.logo;
      logo.alt = element.nom;

      const nom = document.createElement("h3");
      nom.textContent = element.nom;

      const niveau = document.createElement("p");
      niveau.textContent = element.niveau;

      packOfficeDiv.appendChild(logo);
      packOfficeDiv.appendChild(nom);
      packOfficeDiv.appendChild(niveau);

      outPackOffice.appendChild(packOfficeDiv);
      skill.appendChild(outPackOffice);
    });

    const outdeveloppementWeb = document.createElement("div");
    outdeveloppementWeb.classList.add("out");
    const developpementWeb = data.developpementWeb;
    developpementWeb.forEach((element) => {
      const developpementWebDiv = document.createElement("div");
      developpementWebDiv.classList.add("dWD");

      const logo = document.createElement("img");
      logo.src = element.logo;
      logo.alt = element.nom;

      const nom = document.createElement("h3");
      nom.textContent = element.nom;

      const niveau = document.createElement("p");
      niveau.textContent = element.niveau;

      developpementWebDiv.appendChild(logo);
      developpementWebDiv.appendChild(nom);
      developpementWebDiv.appendChild(niveau);

      outdeveloppementWeb.appendChild(developpementWebDiv);
      skill.appendChild(outdeveloppementWeb);
    });

    const outdeveloppementMobile = document.createElement("div");
    outdeveloppementMobile.classList.add("out");
    const developpementMobile = data.developpementMobile;
    developpementMobile.forEach((element) => {
      const developpementMobileDiv = document.createElement("div");
      developpementMobileDiv.classList.add("dMD");

      const logo = document.createElement("img");
      logo.src = element.logo;
      logo.alt = element.nom;

      const nom = document.createElement("h3");
      nom.textContent = element.nom;

      const niveau = document.createElement("p");
      niveau.textContent = element.niveau;

      developpementMobileDiv.appendChild(logo);
      developpementMobileDiv.appendChild(nom);
      developpementMobileDiv.appendChild(niveau);
      outdeveloppementMobile.appendChild(developpementMobileDiv);
      skill.appendChild(outdeveloppementMobile);
    });

    const outDesign = document.createElement("div");
    outDesign.classList.add("out");
    const design = data.design;
    design.forEach((element) => {
      const designDiv = document.createElement("div");
      designDiv.classList.add("dD");

      const logo = document.createElement("img");
      logo.src = element.logo;
      logo.alt = element.nom;

      const nom = document.createElement("h3");
      nom.textContent = element.nom;

      const niveau = document.createElement("p");
      niveau.textContent = element.niveau;

      designDiv.appendChild(logo);
      designDiv.appendChild(nom);
      designDiv.appendChild(niveau);

      outDesign.appendChild(designDiv);
      skill.appendChild(outDesign);
    });

    // const nomProjet = document.createElement("h2");
    // nomProjet.textContent = "MES PROJETS";
    // const sousNomProjet = document.createElement("h3");
    // sousNomProjet.textContent = "Production";
    // projet.appendChild(sousNomProjet);
    // projet.appendChild(nomProjet);
    
    const projet = document.createElement("div");
    projet.classList.add("projet");


    const projets = data.projets;
    projets.forEach((element) => {
      const projetsDiv = document.createElement("div");
      projetsDiv.classList.add("pjD");

      const descriptionProjet = document.createElement("div");
      descriptionProjet.classList.add("description");

      const description = document.createElement("h4");
      description.textContent = element.description;

      const img = document.createElement("img");
      img.src = element.img;
      img.alt = element.nom;

      const nom = document.createElement("h3");
      nom.textContent = element.nom;

      const lien = document.createElement("a");
      lien.href = element.lien;
      lien.target = "_blank";
      lien.textContent = "ici pour acceder au site";

      projetsDiv.appendChild(descriptionProjet);
      projetsDiv.appendChild(img);
      projetsDiv.appendChild(nom);
      projetsDiv.appendChild(lien);
      projet.appendChild(projetsDiv);
    });

    skillPortfolio.appendChild(skill);
    skillPortfolio.appendChild(projet);
  });

//   .catch((error) => {
//     // console.error("Erreur lors du chargement des produits : ", error);
//   })

// ajout du Bot
// ... après création des containers 'skill' et 'projet'

skill.classList.add("skill", "fade-in");
projet.classList.add("projet", "fade-in");

skillPortfolio.appendChild(skill);
skillPortfolio.appendChild(projet);

// Déclencher l’animation fade-in après insertion dans le DOM
setTimeout(() => {
  document.querySelectorAll(".fade-in").forEach((el) => {
    el.classList.add("visible");
  });
}, 100);
