function rand(n) {
	return Math.ceil(Math.random() * n);
}
function fortuneCookie(n) {
	let msg;
	if (n == 1) {
		msg = "Good things come to those who wait.";
	} else if (n == 2) {
		msg = "A surprise is waiting for you around the corner.";
	} else {
		msg = "Your hard work will soon pay off.";
	}
	return msg;
}

let numFortunes = 3;
let n = rand(numFortunes);
let fortune = fortuneCookie(n);
alert(`${ fortune }`);