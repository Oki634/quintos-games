async function start() {
	// your code goes here
	let mode = await prompt('B2D or D2B?');
	let number;
	if (mode == 'B2D') {
		let binary = await prompt('type a binary number');
		binary = binary.toString();
		number = 0;
		for (let i = binary.length - 1; i >= 0; i--) {
			if (binary[binary.length - 1 - i] == '1') {
				log(i);
				number += 2 ** i;
			}
		}
	} else {
		let decimal = await prompt('type a decimal number');
		let power = floor(Math.log2(decimal)); // get 3

		number = '';
		while (power >= 0) {
			log(decimal, power);
			if (decimal >= 2 ** power) {
				decimal -= 2 ** power;
				number += '1';
				power--;
			} else {
				number += '0';
				power -= 1;
			}
			log(number);
		}
	}
	await alert(number);
}
