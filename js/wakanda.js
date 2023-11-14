// effet hover du Pantherwakanda3.png / 649px --> 831px : 28% de plus / scale(1.28)

$("#pantherwakanda3").on("mouseenter", function () {
	$(this).css({
		cursor: "pointer",
		scale: "1.28",
		transition: "0.3s ease",
	});
});

$("#pantherwakanda3").on("mouseleave", function () {
	$(this).css({
		scale: "1",
		transition: "0.3s ease",
	});
});
