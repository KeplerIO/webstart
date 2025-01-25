const dayElement = document.getElementById("day");
const dateElement = document.getElementById("date");
const timeElement = document.getElementById("time");

function updateClock() {
	const now = new Date();
	dayElement.innerText = new Intl.DateTimeFormat("en-US", {weekday: "long"}).format(now);
	dateElement.innerText = new Intl.DateTimeFormat("en-US", {month: "long", day: "numeric", year: "numeric"}).format(now).replace(",", "");
	timeElement.innerText = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);

//const searchBox = document.getElementById("google-search-text");
//searchBox.value = "TESTERtesting";
//console.log(searchBox);
//

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

