const btnEnigme = document.querySelector(".btnEnigme");
const enigmeNumero = document.querySelector(".enigmeNumero");
const enigmePhrase1 = document.querySelector(".enigmePhrase1");
const enigmePhrase2 = document.querySelector(".enigmePhrase2");
const enigmePhrase3 = document.querySelector(".enigmePhrase3");
const reponse = document.getElementById("reponse");

arrayNum = ["ENIGME NUMERO <span>2</span>", "ENIGME NUMERO <span>3</span>"];

array1 = [
	"Une anecdote intéressante est écrite juste en dessous mais elle est codée par un<br /> code césar également appelé code de “chiffrement par décalage”. L’alphabet a été<br /> décalé, trouve la clé de chiffrement qui te permettrait de retrouver les lettres et<br /> retranscris la phrase :",
	"Lorsque T’Challa mange l’herbe en forme de coeur pour recevoir les pouvoirs du<br /> Black Panther, il voit son père afin de lui demander conseil afin de devenir un bon<br /> roi. Cette scène rappelle la même scène d’un certain film où un père dit à son fils de<br /> ne pas oublier qui il est et d’où il vient. Quel est ce film ?",
];

array2 = [
	"Tm nqtu lmjcbm i Wikstivl mv Kitqnwzvqm. Qt a'ioqb lm ti dqttm lwvb mab<br /> wzqoqviqzm Zgiv Kwwotmz mb moitmumvb ti dqttm ycq i dc viqbzm tm<br /> uwcdmumvb xwtqbqycm lma jtiks xivbpmza",
	"01001100 01000101 00100000 01010010 01001111 01001001<br />00100000 01001100 01001001 01001111 01001110 00001101<br />00001010",
];

array3 = [
	"<span>Le savais tu ?</span>Plusieurs sources s’entendent pour dire que la lettre la plus utilisée en français<br />est la lettre E. En pourcentage de fréquence, la lettre est utilisée à 14% dans<br /> unephrase. Et si tu regardais quel symbole revient le plus souvent pour en<br /> déduire son décalage dans l’alphabet ?",
	"<span>Le savais tu ?</span> Le philosophe Francis Bacon inventa en 1605 un alphabet bilitère, uniquement<br /> composé des deux lettres A et B. C'est en quelque sorte l'ancêtre du système<br />binaire des ordinateurs actuels car toute lettre pouvait être construite avec un<br />enchainement précis de ces deux lettres, tandis que le système binaire<br />informatique utilise 0 et 1.",
];

if ($(".enigmeNumero").text().split(" ")[2] == 1) {
	btnEnigme.addEventListener("click", (e) => {
		e.preventDefault();
		// on suppose que la vraie réponse est : reponse1
		if (reponse.value === "reponse1") {
			$(".enigmeNumero").html(arrayNum[0]);
			$(".enigmePhrase1").html(array1[0]);
			$(".enigmePhrase2").html(array2[0]);
			$(".enigmePhrase3").html(array3[0]);
		} else {
			alert("Vous devrez réessayer !");
		}
	});
}
