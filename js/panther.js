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

$(window).on("load", function () {
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
});

// zoom de "h2" : de 32px à 42px soit un grandissement de 31% --> scale(1.31)

$(window).on("load", function () {
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
});

// DEFILEMENT SUIVANT LE SCROLL

$(window).on("load", function () {
	$(window).scroll(function () {
		let scroll = $(window).scrollTop();
		$(".lateral-out").css("top", scroll + "px");
	});
});

// ANIMATION DES TRAITS VIOLETS DU COTE HAUT GAUCHE A L'OUVERTURE DE LA PAGE

$(window).on("load", function () {
	// 3s après le chargement de la page, le top des traits violets varie de -26.1vw à 0 (voir fichier _trait-lateral.scss / ligne 5), durée de l'animation: 2.5s
	setTimeout(() => {
		$(".lateral-out").animate({ top: "0" }, 2500);
	}, 3000);
});

// ANIMATION DE LA SOURIS EN CANVAS

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// on met l'image dans le canvas et, c'est le canvas qui va suivre la souris
canvas.style.position = "absolute";
// canvas.style.transform = "translate(-50%, -50%)";
canvas.style.pointerEvents = "none";

// on écoute le mouvement de la souris et, on récupère ses coordonnées
window.addEventListener("mousemove", canvasPos);

// position de la souris (e.pageX, e.pageY)
function canvasPos(e) {
	canvas.style.top = e.pageY + "px";
	canvas.style.left = e.pageX + "px";
}

// on donne des dimensions au canvas
canvas.style.width = "4vw";
canvas.style.height = "4vw";

// on crée une image sourisPanther avec la classe "Image"
const sourisPanther = new Image();

sourisPanther.onload = function () {
	// on dessine (une fois pour toute) le "chauveSouris" et, on adapte ses dimensions aux dimensions du canvas
	// on n'a pas besoin d'effacer le canvas à chaque mouvement de la souris car les coordonnées (0, 0) du "chauveSouris" sur le canvas ne changent pas (c'est le canvas qui bouge avec la souris et, le dessin du "chauveSouris" est immobile sur le canvas).
	ctx.drawImage(sourisPanther, 0, 0, 300, 150);
};

// chemin de la source de l'image sourisPanther
sourisPanther.src = "./assets/illustration et logo/logo_souris_BP2_blanc.png";
