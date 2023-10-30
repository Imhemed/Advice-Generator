const quat = document.querySelector(".p");
const button = document.querySelector(".button");
const counter = document.querySelector(".counter");
let adviceID;

adviceID = Math.round(Math.random() * 250);
getAdvice();
button.addEventListener("click", (e) => {
	adviceID = Math.round(Math.random() * 250);
	console.log(adviceID);
	getAdvice();
});

async function getAdvice() {
	fetch(`https://api.adviceslip.com/advice/${adviceID}`)
		.then((response) => {
			if (response.status == 200) {
				return response.json();
			}
		})
		.then((data) => {
			console.log(data.slip.advice);
			quat.innerText = `🙶  ${data.slip.advice} 🙷`;
			counter.innerText = adviceID;
		})
		.catch((err) => {
			console.log(err);
		});
}
