// ON DEFINIT LES DIFFERENTES CONSTANTES ET VARIABLES

// bouton "ENVOYER" de l'enigme
const btnEnigme = document.querySelector(".btnEnigme");
// inscription du numéro de l'enigme
const enigmeNumero = document.querySelector(".enigmeNumero");
// la phrase n°1 de l'enigme
const enigmePhrase1 = document.querySelector(".enigmePhrase1");
// phrase n°2
const enigmePhrase2 = document.querySelector(".enigmePhrase2");
// phrase 3
const enigmePhrase3 = document.querySelector(".enigmePhrase3");
// champs de réponse
const reponse = document.getElementById("reponse");
// numéro de l'enigme
let numeroEnigme = 1;

// on stocke l'info du numéro de l'enigme dans le tableau "arrayNum" / arrayNum[0] --> enigme n°1, arrayNum[1] --> enigme 2 et arrayNum[2] --> enigme 3
const arrayNum = [
	"ENIGME NUMERO <span>1</span>",
	"ENIGME NUMERO <span>2</span>",
	"ENIGME NUMERO <span>3</span>",
];

// on stocke les phrases n°1 de l'enigme dans "array1" / array1[0] --> enigme 1 ..etc...
const array1 = [
	"Prouve ton talent d’espion et déchiffre cette réplique d’Okoyé écrite en Wakandais,<br />et apprend par la même occasion la première valeur d’une Dora Milaje",
	"Une anecdote intéressante est écrite juste en dessous mais elle est codée par un<br /> code césar également appelé code de “chiffrement par décalage”. L’alphabet a été<br /> décalé, trouve la clé de chiffrement qui te permettrait de retrouver les lettres et<br /> retranscris la phrase :",
	"Lorsque T’Challa mange l’herbe en forme de coeur pour recevoir les pouvoirs du<br /> Black Panther, il voit son père afin de lui demander conseil afin de devenir un bon<br /> roi. Cette scène rappelle la même scène d’un certain film où un père dit à son fils de<br /> ne pas oublier qui il est et d’où il vient. Quel est ce film ?",
];

// on stocke les phrases n°2 de l'enigme dans "array2" / array2[0] --> enigme 1 ..etc...
const array2 = [
	'"SI JE SUIS FIDELE C’EST<br /> A CE TRONE PEU IMPORTE QUI<br /> MONTE DESSUS"',
	"Tm nqtu lmjcbm i Wikstivl mv Kitqnwzvqm. Qt a'ioqb lm ti dqttm lwvb mab<br /> wzqoqviqzm Zgiv Kwwotmz mb moitmumvb ti dqttm ycq i dc viqbzm tm<br /> uwcdmumvb xwtqbqycm lma jtiks xivbpmza",
	"01001100 01000101 00100000 01010010 01001111 01001001<br />00100000 01001100 01001001 01001111 01001110 00001101<br />00001010",
];

// "font-family" des phrases n°2
const array2FontFam = ['"Wakanda forever"', "sans-serif", "sans-serif"];

// on stocke les phrases n°3 de l'enigme dans "array3" / array3[0] --> enigme 1 ..etc...
const array3 = [
	"<span>Voici la transicription de l’alphabet :</span><br>A = <em>A</em> ; B = <em>b</em> ; C = <em>C</em> ; D = <em>D</em> ; E = <em>E</em> ; F = <em>F</em> ; G = <em>G</em> ; H = <em>H</em> ; I = <em>I</em> ; J = <em>J</em> ;<br>K = <em>K</em> ; L = <em>L</em> ; M = <em>M</em> ; N = <em>N</em> ; O = <em>O</em> ; P = <em>P</em> ; Q = <em>Q</em> ; R = <em>R</em> ; S = <em>S</em> ; T = <em>T</em> ;<br>U = <em>U</em> ; W = <em>W</em> ; X = <em>X</em> ; Y = <em>Y</em> ; Z = <em>Z</em>",
	"<span>Le savais tu ?</span>Plusieurs sources s’entendent pour dire que la lettre la plus utilisée en français<br />est la lettre E. En pourcentage de fréquence, la lettre est utilisée à 14% dans<br /> unephrase. Et si tu regardais quel symbole revient le plus souvent pour en<br /> déduire son décalage dans l’alphabet ?",
	"<span>Le savais tu ?</span> Le philosophe Francis Bacon inventa en 1605 un alphabet bilitère, uniquement<br /> composé des deux lettres A et B. C'est en quelque sorte l'ancêtre du système<br />binaire des ordinateurs actuels car toute lettre pouvait être construite avec un<br />enchainement précis de ces deux lettres, tandis que le système binaire<br />informatique utilise 0 et 1.",
];

// réponses des enigmes
const arrayReponse = ["Réponse1", "Réponse2", "Réponse3"];

// affichage de l'enigme en fonction de son numéro
const affichageEnigmeNum = function (numeroEnigme) {
	$(".popupEnigme").css("display", "none");
	$(".main-enigme").css("height", "100.9vw");

	$(".lettre-e, .formulaire").css("display", "block");
	$(".glyphes").css({
		display: "block",
		fontFamily: array2FontFam[numeroEnigme - 1],
	});
	$(".enigmeNumero").html(arrayNum[numeroEnigme - 1]);
	$(".enigmePhrase1").html(array1[numeroEnigme - 1]);
	$(".enigmePhrase2").html(array2[numeroEnigme - 1]);

	$(".enigmePhrase3").html(array3[numeroEnigme - 1]);
};

// affichage du popupbox suivant la réponse de l'internaute
const enigmePopupBox = function (message) {
	$(".glyphes, .lettre-e, .formulaire").css("display", "none");
	$(".main-enigme").css("height", "60vw");
	$(".popupEnigme").css("display", "flex");
	$(".message").css({
		fontSize: "2vw",
		color: "#fff",
		padding: "0 2vw",
	});
	$(".message").html(message);
};

// FONCTION DE L'ENIGME

// on attend la finition du chargement de la page
$(window).on("load", () => {
	// on affiche l'enigme n°1
	affichageEnigmeNum(numeroEnigme);
	// on écoute l'évènement du bouton "ENVOYER"
	btnEnigme.addEventListener("click", function (e) {
		// on évite le comportement par défaut
		e.preventDefault();
		// on observe le numéro de l'enigme, s'il est égale à 3: c'est la fin du jeu ou, s'il est inférieur à 3: le jeu continu !
		if (numeroEnigme == 3) {
			// si le champs de réponse est vide, on invite l'internaute à inserer sa réponse
			if (!reponse.value == "") {
				if (reponse.value == arrayReponse[numeroEnigme - 1]) {
					// si la réponse == Réponse3, on informe l'internaute qu'il a gagné avec succès
					enigmePopupBox("Félicitation! Vous avez gagné!");
					reponse.value = "";
				} else {
					// sinon, on l'invite à reéssayer
					enigmePopupBox("Réponse fausse, vous devrez reéssayer !");
					reponse.value = "";
					setTimeout(() => {
						affichageEnigmeNum(numeroEnigme);
					}, 4000);
				}
			} else {
				// si l'input est vide et que "ENVOYER" est actionnée, on invite l'internaute à donner sa réponse
				enigmePopupBox("Inserez votre reponse");
				setTimeout(() => {
					affichageEnigmeNum(numeroEnigme);
				}, 4000);
			}
		} else {
			// si le champs de réponse est:
			if (!reponse.value == "") {
				// rempli et que la réponse est:
				if (reponse.value == arrayReponse[numeroEnigme - 1]) {
					numeroEnigme++;
					// bonne, on informe l'internaute qu'il a la bonne réponse, donc il peut continuer le jeu
					enigmePopupBox(
						`C'est la bonne réponse! Voici l'enigme N°${numeroEnigme}`
					);
					reponse.value = "";
					setTimeout(() => {
						if (numeroEnigme == 2) {
							affichageEnigmeNum(numeroEnigme);
							$(".enigmePhrase2").css({
								fontSize: "1.15vw",
								wordSpacing: "0.1vw",
								letterSpacing: "0.01vw",
							});
						} else {
							affichageEnigmeNum(numeroEnigme);
						}
					}, 5000);
				} else {
					// fausse, on invite l'utilisateur àreéssayer
					enigmePopupBox("Réponse fausse, vous devrez reéssayer !");
					reponse.value = "";
					setTimeout(() => {
						affichageEnigmeNum(numeroEnigme);
					}, 4000);
				}
			} else {
				// vide, on invite l'internaute à donner une réponse
				enigmePopupBox("Inserez votre reponse");
				setTimeout(() => {
					affichageEnigmeNum(numeroEnigme);
				}, 4000);
			}
		}
	});
});
