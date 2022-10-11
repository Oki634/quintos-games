const log = console.log;

let screen = document.getElementById('screen');
function btnPressed(inp) {
	if (inp == 'DEL') {
		screen.value.slice(0, -1); // I want to delete the last letter on the display but seems doesn't work.
	} else if (inp == 'AC') {
		screen.value = ' ';
	} else if (inp != '=') {
		screen.value += inp;
	} else {
		let eq = screen.value.split('');
		for (let i = 0; i < eq.length; i++) {
			if (eq[i] == 'x') {
				eq[i] = '*';
			} else if (eq[i] == '÷') {
				eq[i] = '/';
			}
		}
		screen.value = eval(eq.join(''));
	}
}
