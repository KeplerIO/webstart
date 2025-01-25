const dayElement = document.getElementById("day");
const dateElement = document.getElementById("date");
const timeElement = document.getElementById("time");

function tick() {
	setInterval(() => {
		const now = new Date();
		dayElement.innerText = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(now);
		dateElement.innerText = new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(now).replace(",", "");
		timeElement.innerText = now.toLocaleTimeString();
	}, 1000);
}

export default {
	tick
}

