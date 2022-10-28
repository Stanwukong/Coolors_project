class Color {
  	constructor(hex, element) {
		this.hex = hex;
		this.element = element;
	}

	setHex (hex) {
		this.hex = hex;
		this.element.style.backgroundColor = hex;
		this.element.querySelector('.box').value = hex;
	}

	generateHex () {
		const chars = '0123456789ABCDEF';
		let hex = '#';
		for (let i = 0; i < 6; i++) {
			hex += chars[Math.floor(Math.random() * 16)];
		}

		this.setHex(hex);

		return hex;

	}
}
