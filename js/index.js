import Clock from "./modules/clock.js";
Clock.tick();

const domains = [
	".com",
	".net",
	".org",
	".gov",
	".io"
]

const searchForm = document.getElementById("google-search-form");

searchForm.addEventListener("submit", (event) => {
	const searchString = document.getElementById("google-search-text").value;
	for(const domain of domains) {
		if(searchString.endsWith(domain)) {
			event.preventDefault();
			let destination = searchString.split(" ").join("");
			window.location.href = "https://" + destination;
		}
	}
});

