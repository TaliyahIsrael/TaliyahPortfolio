$(document).ready(function(){

	$(".slider").click(function() {
		$("#light-image").toggle();
		var sound = document.getElementById("audio");
		sound.play();
	})

});