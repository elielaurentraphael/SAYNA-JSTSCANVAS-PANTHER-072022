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

// ZOOM DE 10px DE PLUS AU PASSAGE DE LA SOURIE POUR LES TITRES "h1" et "h2" DES TROIS PAGES

// zoom de "h1" : de 68px à 78px soit un grandissement de 15% --> scale(1.2)

$("h1").mouseenter(function () {
	$(this).css({
		cursor: "pointer",
		transition: "0.3s ease-in-out",
		scale: "1.2",
	});
});

$("h1").mouseleave(function () {
	$(this).css("scale", "1");
});

// zoom de "h2" : de 32px à 42px soit un grandissement de 31% --> scale(1.31)

$("h2").mouseenter(function () {
	$(this).css({
		cursor: "pointer",
		transition: "0.3s ease-in-out",
		scale: "1.31",
	});
});

$("h2").mouseleave(function () {
	$(this).css("scale", "1");
});
