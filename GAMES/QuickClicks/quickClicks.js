const target = `
 .d88b. 
.8P  Y8.
88    88
88    88
 8b  d8 
 'Y88P' `.slice(1);
// slice removes the first character from the String
// in this case I remove the new line at the beginning
// so the first line of the button will be at the proper
// row value

const imposter = `
 .d00b. 
.0P  Y0.
00    00
00    00
 0b  d0 
 'Y00P' `.slice(1);

let targetRow;
let targetCol;

let times = [];
function background() {
	for (let i = 1; i < 29; i++) {
		if (i % 2 == 0) {
			text('/' + '⎺⎺\\_/'.repeat(15), i);
		} else {
			text('\\' + '_/⎺⎺\\'.repeat(15), i);
		}
	}
}

async function showStats() {
	let speeds = [];
	for (let i = 0; i < times.length - 1; i++) {
		speeds.push(times[i + 1] - times[i]);
	}
	log(speeds);

	let sum = 0;
	for (let i = 0; i < speeds.length; i++) {
		sum += speeds[i];
	}
	let average = sum / speeds.length;

	let fastest = speeds[0];
	let slowest = speeds[0];
	for (let i = 1; i < speeds.length; i++) {
		if (speeds[i] <= fastest) {
			fastest = speeds[i];
		}
		if (speeds[i] >= slowest) {
			slowest = speeds[i];
		}
	}

	await alert('Your average speed is ' + round(average) + 'ms. Fastest: ' + fastest + ' Slowest; ' + slowest);
}

/* Part A: find the range of row and column values the target can be placed at */
function makeTargets() {
	times.push(Date.now());
	log(times);
	erase();
	background();
	if (times.length == 10) {
		showStats();
		return;
	}

	targetRow = round(random(1, 23));
	targetCol = round(random(1, 71));
	button(target, targetRow, targetCol, makeTargets);

	for (let i = 0; i < 4; i++) {
		let row = targetRow;
		let col = targetCol;
		while (row == targetRow && col == targetCol) {
			row = round(random(1, 23));
			col = round(random(1, 71));
		}
		button(imposter, row, col, imposterClick);
	}
}
async function imposterClick() {
	erase();
	text(target, targetRow, targetCol);
	await alert('GAME OVER', 12, 30, 29);
	erase();
	times = [];
	makeTargets();
}

async function start() {
	background();
	await alert('try to click the button with 8s as fast as you can!', 12, 30, 20);
	makeTargets();
}
