// Can you check the following codes? I tried to run this but I couldn't even type anything on the display
// I also want to change the size/layout of the buttons but don't know how to do. I researched on the internet but I couldn't find a good code can be used here.

const log = console.log;

let screen = document.getElementById('screen');

if (inp == 'DEL') {
	screen.value.slice(0, -1); // I want to delete the last letter on the display but seems doesn't work
} else if (inp != '=') {
	screen.value += inp;
} else if (inp == 'AC') {
	screen.value.clear(); // I want to delete everything on the display but seems doesn't work
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
