import "./src/scss/main.scss";
const btn = document.getElementById("marked");
const red = document.querySelectorAll(".dot");
const bck = document.querySelectorAll(".unmarked");

btn.addEventListener("click", () => {
	red.forEach(removeDot);
	function removeDot(element) {
		element.classList.remove("dot");
	}
	bck.forEach(removeBck);
	function removeBck(element) {
		element.classList.remove("unmarked");
	}
});
