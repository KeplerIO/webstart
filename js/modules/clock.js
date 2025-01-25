const dayElement = document.getElementById("day");
const dateElement = document.getElementById("date");
const timeElement = document.getElementById("time");

const dayFormatter = new Intl.DateTimeFormat("en-US", {
	weekday: "long"
});

const dateFormatter = new Intl.DateTimeFormat("en-US", {
	month: "long",
	day: "numeric",
	year: "numeric"
});

function tick() {
	setInterval(() => {
		const now = new Date();
		dayElement.innerText = dayFormatter.format(now);
		dateElement.innerText = dateFormatter.format(now).replace(",", "");
		timeElement.innerText = now.toLocaleTimeString();
	}, 1000);
}

export default {
	tick
}

