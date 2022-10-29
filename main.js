function newColorA() {
	let symbols, color;
	symbols = "0123456789ABCDEF";

	color = "#";

	for(let i = 0; i < 6; i++){
		color = color + symbols[Math.floor(Math.random() * 16)]
	}
	document.getElementById('first').style.background = color;
	document.getElementById('A').innerHTML = color;
}
function newColorB() {
	let symbols, color;
	symbols = "0123456789ABCDEF";

	color = "#";

	for(let i = 0; i < 6; i++){
		color = color + symbols[Math.floor(Math.random() * 16)]
	}
	document.getElementById('second').style.background = color;
	document.getElementById('B').innerHTML = color;
}
function newColorC() {
	let symbols, color;
	symbols = "0123456789ABCDEF";

	color = "#";

	for(let i = 0; i < 6; i++){
		color = color + symbols[Math.floor(Math.random() * 16)]
	}
	document.getElementById('rd').style.background = color;
	document.getElementById('C').innerHTML = color;
}
function newColorD() {
	let symbols, color;
	symbols = "0123456789ABCDEF";

	color = "#";

	for(let i = 0; i < 6; i++){
		color = color + symbols[Math.floor(Math.random() * 16)]
	}

	document.getElementById('th').style.background = color;
	document.getElementById('D').innerHTML = color;
}
function newColorE() {
	let symbols, color;
	symbols = "0123456789ABCDEF";
	
	color = "#";
	
	for(let i = 0; i < 6; i++){
		color = color + symbols[Math.floor(Math.random() * 16)]
	}	
	document.getElementById('tj').style.background = color;
	document.getElementById('E').innerHTML = color;
}

function newColor() {
	newColorA();
	newColorB();
	newColorC();
	newColorD();
	newColorE();

}

const keyBoard = document.querySelector('keyBoard');

keyBoard.addEventListener('keydown', (e) => {
	if (e.composed.toLowerCase() === 'Space') {
		newColor();
	}
})