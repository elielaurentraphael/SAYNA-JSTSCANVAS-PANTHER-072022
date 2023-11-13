// SCROLLING PROGRESSIF

// initialisation avec la methode "ready"
$(document).ready(function () {
	$(".btnVoirPlus").on("click", function (e) {
		// annuler l’action de l’ancre "preventDefault"
		e.preventDefault();
		// Au clic sur le bouton ".btnVoirPlus"
		// Page cible = target
		let target = $(this).attr("href");
		// atteindre doucement, progressivement la cible, on peut varier "duree"
		// ajustage du point haut du cible (+/- ecart)
		let ecart = 100;
		let duree = 1500;
		$("html, body").animate(
			{
				scrollTop: $(target).offset().top - ecart,
			},
			duree
		); // cette ligne produit l'effet progressif
		return false;
	});
});

// ZOOM DES IMAGES

// T'Challa : la width 374px doit devenir 450px, soit 76px de plus (20% de plus), c'est à dire: scale(1.2)

$(".pantherhome5").mouseenter(function () {
	$(this).css({
		cursor: "pointer",
		transition: "0.3s ease-in-out",
		scale: "1.2",
	});
});

$(".pantherhome5").mouseleave(function () {
	$(this).css("scale", "1");
});

// Pantherhome2.png : 509px --> 692px donne un zoom de 36% ou scale(1.36)

$(".pantherhome6").mouseenter(function () {
	$(this).css({
		cursor: "pointer",
		transition: "0.3s ease-in-out",
		scale: "1.36",
	});
});

$(".pantherhome6").mouseleave(function () {
	$(this).css("scale", "1");
});

// Pantherhome_slider_1.png : 295px --> 386px / scale(1.3)

$(".pantherhome2").mouseenter(function () {
	$(this).css({
		cursor: "pointer",
		transition: "0.3s ease-in-out",
		scale: "1.3",
	});
});

$(".pantherhome2").mouseleave(function () {
	$(this).css("scale", "1");
});

// DEFILE DES PERSONNAG🇪🇪

// on va stocker les personnages dans un tableau "arrayPerson", les noms des personnages dans un tableau "arrayName" et, les infos des personnages dans un tableau "arrayInfo". La correspondance est : arrayPerson[0] --> arrayName[0] --> arrayInfo[0] et, ainsi de suite

const arrayPerson = [
	"./assets/illustration et logo/1_Landing_page/Pantherhome_slider_1.png",
	"./assets/illustration et logo/1_Landing_page/Pantherhome_slider_2.png",
	"./assets/illustration et logo/1_Landing_page/Pantherhome_slider_3.png",
	"./assets/illustration et logo/1_Landing_page/Pantherhome_slider_4.png",
	"./assets/illustration et logo/1_Landing_page/Pantherhome_slider_5.png",
	"./assets/illustration et logo/1_Landing_page/Pantherhome_slider_6.png",
	"./assets/illustration et logo/1_Landing_page/Pantherhome_slider_7.png",
	"./assets/illustration et logo/1_Landing_page/Pantherhome_slider_8.png",
	"./assets/illustration et logo/1_Landing_page/Pantherhome_slider_9.png",
	"./assets/illustration et logo/1_Landing_page/Pantherhome_slider_10.png",
];

const arrayName = [
	"KILLMONGER",
	"OKOYE",
	"SHURI",
	"NAKIA",
	"RAMONDA",
	"W’kabi",
	"m’baku",
	"ZURI",
	"EVERETT KENNETH ROSS",
	"ULYSSE KLAUE",
];

const info1 =
	"La sauvagerie de N'Jadaka alors qu'il servait dans une unité d'opérations noires de l'arméeaméricaine lui a valu le surnom de Killmonger. D’origine Wakandaise, et se sentant abandoné par sa nation, il cherche à détroner T’Challa dans une quête vers le pourvoir.";

const info2 =
	"Okoye est le général des Dora Milaje (groupe d’élite de femmes guerrières) et le chef des forces armées et des renseignements wakandais. Témoin du couronnement de T'Challa, elle se joint à lui dans de nombreuses aventures.";

const info3 =
	"Shuri est la Princesse du Wakanda, la fille de T'Chaka et de Ramonda, la soeur de T'Challa et la leader du Groupe de Design du Wakanda. Innovatrice, elle est chargée de créer une grande partie de la technologie moderne du Wakanda ainsi que les Habits de la Panthère.";

const info4 =
	"Nakia est une membre des Chiens de Guerre et l'amoureuse de T'Challa. Elle est souvent en mission à travers le monde, assistant aux grandes détresses de nombreux peuples et commence à croire avec force que le Wakanda pourrait activement les aider.";

const info5 =
	"Ramonda est la Reine Mère du Wakanda, épouse de T'Chaka et mère de T'Challa et Shuri. Elle se tenait aux côtés de son fils quand il devint le Roi du Wakanda, mais fut forcée de partir en exil lorsque Erik Killmonger vainquit T'Challa et prit le contrôle du trône.";

const info6 =
	"W'Kabi est l'ancien chef de la sécurité pour la Tribu de la Porte du Wakanda ainsi que l'ancien meilleur ami de T'Challa. Ayant perdu la foi en son roi pour avoir échouer à capturer Ulysses Klaue, l'homme responsable de la mort de ses parents, W'Kabi apporta son soutien à Erik Killmonger et lui permit de prendre le trône du Wakanda";

const info7 =
	"M'Baku est le chef de la Tribu Jabari, un groupe de Wakandais qui s'étaient écartés de la société principale du Wakanda et un fervant opposant du pouvoir de T'Challa, mais échoua à le vaincre lors de l'affrontement rituel pour le trône, avant de l'aider à défendre le Wakanda face à Erik Killmonger.";

const info8 =
	"Zuri était un ancien membre des Chiens de Guerre et un shaman Wakandais, loyal conseiller de son Roi. Après avoir gardé les secrets de T'Chaka à propos de sa gestion de la mort de N'Jobu dans le passé, Zuri continua à soutenir le Roi du Wakanda alors que T'Challa reprenait le trône.";

const info9 =
	"L'Agent Everett Ross est un agent de la CIA et un ancien Commissaire Exécutif à l'Antiterrorisme pour la Force Conjointe Anti-Terroriste. Après avoir quitté la Force Conjointe Anti-Terroriste, Ross fut chargé de traquer et neutraliser Ulysses Klaue, ce qui plaça Ross sur le chemin de Black Panther, qui cherchait à capturer de nouveau Klaue pour ses crimes passés.";

const info10 =
	"Ulysses Klaue est un criminel international, gangster et vendeur d'armes sur le marché noir. En 1992, il collabora avec N'Jobu afin de voler une quantité importante de vibranium au Wakanda. Bien qu'il soit parvenu à voler et à s'échapper avec un stock important, il reçut une marque sur le cou de la part des Wakandais.";

const arrayInfo = [
	info1,
	info2,
	info3,
	info4,
	info5,
	info6,
	info7,
	info8,
	info9,
	info10,
];

const btnNext = document.querySelector(".next");

$(".next").css("cursor", "pointer");

const person1 = document.querySelector(".pentherhome4");
const name1 = document.querySelector(".text2 h3");
const infoName1 = document.querySelector(".text2 p");

const person2 = document.querySelector(".pentherhome3");
const name2 = document.querySelector(".text1 h3");
const infoName2 = document.querySelector(".text1 p");

let indice = 0;

// défilé des personnages par appuye du bouton "btnNext"

btnNext.addEventListener("click", (e) => {
	e.preventDefault();

	if (indice < arrayPerson.length - 2) {
		$("#person1").attr("src", arrayPerson[indice]);
		$(".text2 h3").html(arrayName[indice]);
		$(".text2 p").html(arrayInfo[indice]);

		$("#person2").attr("src", arrayPerson[indice + 1]);
		$(".text1 h3").html(arrayName[indice + 1]);
		$(".text1 p").html(arrayInfo[indice + 1]);

		indice = indice + 2;
	} else {
		$("#person1").attr("src", arrayPerson[indice]);
		$(".text2 h3").html(arrayName[indice]);
		$(".text2 p").html(arrayInfo[indice]);

		$("#person2").attr("src", arrayPerson[indice + 1]);
		$(".text1 h3").html(arrayName[indice + 1]);
		$(".text1 p").html(arrayInfo[indice + 1]);

		indice = 0;
	}
});

// SELECTION D'UNE IMAGE

// l'image selectionnée se retrouve toujours sur l'extrémité gauche du bandeau
$("#person1").on("click", function () {
	$("#select").attr("src", $(this).attr("src"));
});

$("#person2").on("click", function () {
	$("#select").attr("src", $(this).attr("src"));
});

// POPUP BOX DU FORMULAIRE

// définition des constantes
const formulaire = document.querySelector(".formulaire");
const popup = document.querySelector(".popup");
const inputTextLanding = document.querySelector(".inputTextLanding");
const inputMailLanding = document.querySelector(".inputMailLanding");
const inputTextareaLanding = document.querySelector(".inputTextareaLanding");
const btnFormLanding = document.querySelector(".btnFormLanding");

document.addEventListener("DOMContentLoaded", () => {
	btnFormLanding.addEventListener("click", function (e) {
		e.preventDefault();
		if (!inputTextLanding.value == "" && !inputMailLanding.value == "") {
			$(".popup").html("Message recu<br />Merci !");
			$(".formulaire").css("display", "none");
			$(".popup").css("display", "flex");
			setTimeout(() => {
				$(".popup").css("display", "none");
				$(".popup").html("");
				$(".inputTextLanding").val("");
				$(".inputMailLanding").val("");
				$(".formulaire").css("display", "block");
			}, 4000);
		} else {
			$(".popup").html("Veuillez renseigner<br />votre nom et adresse email");
			$(".formulaire").css("display", "none");
			$(".popup").css("display", "flex");
			setTimeout(() => {
				$(".popup").css("display", "none");
				$(".popup").html("");
				$(".formulaire").css("display", "block");
			}, 4000);
		}
	});
});
