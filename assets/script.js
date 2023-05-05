const slides = [
    {
      "image": "slide1.jpg",
      "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
      "image": "slide2.jpg",
      "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
      "image": "slide3.jpg",
      "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
      "image": "slide4.png",
      "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
  ];

  // Sélectionner les éléments DOM
  const banner = document.getElementById("banner");
  const leftArrow = document.getElementById("left-arrow");
  const rightArrow = document.getElementById("right-arrow");
  const bannerImg = document.getElementById("banner-img");
  const paragraphbanner = document.querySelector("p")


  // Initialiser l'index de la diapositive actuelle à 0
  let currentSlideIndex = 0;

  // Fonction qui met à jour l'image et la description en fonction de l'index de la diapositive
  function updateBanner() {
    const currentSlide = slides[currentSlideIndex];
    bannerImg.src = "./assets/images/slideshow/" + currentSlide.image;	
	paragraphbanner.innerHTML=currentSlide.tagLine;
    updateDots();

  }

  // Fonction qui met à jour les points de la bannière en fonction de l'index de la diapositive
  function updateDots() {
    const dotElements = banner.querySelectorAll(".dot");
    for (let i = 0; i < dotElements.length; i++) {
      if (i == currentSlideIndex) {
        dotElements[i].classList.add("dot_selected");
      } 
      else {
        dotElements[i].classList.remove("dot_selected");
      }
    }
  }
// Initialiser le point sélectionné
  const dots = document.querySelectorAll(".dot");
  dots[0].classList.add("dot_selected");

  // Ajouter un événement de click à la flèche gauche
  leftArrow.addEventListener("click", function (event) {
    console.log("Click sur la flèche gauche");
    currentSlideIndex = (currentSlideIndex + slides.length - 1) % slides.length;
    updateBanner()
  });
  // 

  // Ajouter un événement de click à la flèche droite
  rightArrow.addEventListener("click", function (event) {
    console.log("Click sur la flèche droite");
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    bannerImg.src = "./assets/images/slideshow/" + slides[currentSlideIndex].image;
    updateBanner()
  });
