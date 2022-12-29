const btn = document.getElementById("marked");
const red = document.querySelectorAll(".dot");
const bck = document.querySelectorAll(".unmarked");
const number = document.querySelector(".nr-not");

btn.addEventListener("click", () => {
	red.forEach((element) => element.classList.remove("dot"));

	for (const element of bck) {
		element.classList.remove("unmarked");
	}

	number.innerHTML = "0";
});
