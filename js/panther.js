// APPARITON PROGRESSIVE DES ELEMENTS AVEC FADEIN ET SLIDE

// création d'une class .fadeInSlideScroll et attribution de cette class à tous les éléments qu'on veut animer à l'ouverture d'une page (web) avec "fade in" et "slide" suivant le "scroll"

// cibler toutes les class .fadeInSlideScroll pour l'apparition progressif des éléments avec fade-In + slide
const fadeInSlideScrollElements =
	document.querySelectorAll(".fadeInSlideScroll");

// vérifier si l'élément est visible à l'écran
function isElementVisible(element) {
	const rect = element.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
	);
}

// apparition progressive des éléments (.fadeInSlideScroll) fade-In + slide
function handleScrollFadeSlide() {
	fadeInSlideScrollElements.forEach((element) => {
		if (isElementVisible(element)) {
			element.style.opacity = "1";
			element.style.visibility = "visible";
			element.style.transform = "translateX(0)";
			element.style.transition =
				"opacity 3s ease, visibility 3s ease, transform 3s ease";
		}
	});
}

// gerer l'événement de défilement et l'apparition progressive
window.addEventListener("scroll", handleScrollFadeSlide);

// Appel de la fonction handleScrollFadeSlide
handleScrollFadeSlide();
