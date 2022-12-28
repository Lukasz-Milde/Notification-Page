import "./src/scss/main.scss";
const btn = document.getElementById("marked");
const red = document.querySelectorAll(".dot");
const bck = document.querySelectorAll(".unmarked");

btn.addEventListener("click", () => {
	red.classList.remove("dot");
	bck.classList.remove("unmarked");
});
