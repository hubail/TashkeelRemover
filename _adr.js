$(document).ready(function() {
	setInterval(function() {$("#r").html($("#s").val().replace(/[\u064b-\u064f\u0650-\u0652]/g, ""));}, 100);
});
