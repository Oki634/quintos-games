let time = 0;
let art = 1;
function setup() {}
function eqX(t) {
	if (art == 0 || art == 5) return cos(t * 5) * 500;
	if (art == 1) return sin(t * 2) * 400 + cos(t) * 200;
	if (art == 2 || art == 4) return tan(t * 7) * 100 + sin(t) * 1000;
	if (art == 3) return (1 / cos(t * 8)) * mouse.y;
}
function eqY(t) {
	if (art == 0 || art == 5) return sin(t * 5) * 400;
	if (art == 1) return cos(t * 2) * 300 + cos(t) * 100;
	if (art == 2) return tan(t * 7) * 100;
	if (art == 3) return (1 / tan(t * 8)) * 100;
	if (art == 4) return cos(t * 7) * mouse.x;
}
function eqX2(t) {
	return sin(t * 7) * 300;
}
function eqY2(t) {
	return sin(t * 10) * 300;
}
function eqX3(t) {
	return sin(t * 20) * 500;
}
function eqY3(t) {
	return sin(t * 15) * 350;
}
function eqX4(t) {
	return sin(t * 21) * 1000;
}
function eqY4(t) {
	return sin(t * 5) * 100;
}
function draw() {
	if (art == 2) {
		background(0, 0, 0, 0);
	} else if (art == 6) {
		background(0, 0, 0, 100);
	} else background(0, 0, 0, 10);
	translate(width * 0.5, height * 0.5);

	if (kb.presses('left')) {
		background(0);
		art--;
	}
	if (kb.presses('right')) {
		background(0);
		art++;
	}

	if (art == 2) {
		translate((frameCount % 2000) - 1000, (frameCount % 2000) - 1000);
	}

	let loopLength = 50;
	if (art == 2) loopLength = 200;
	if (art == 5 || art == 6) loopLength = 10;

	for (let i = 0; i < loopLength; i++) {
		if (art == 1) {
			stroke(5 * i, 3 * i, 2 ** i);
			strokeWeight(5);
		} else if (art == 0) {
			stroke(100, 255, 255);
			strokeWeight(((time % 10) * i) / 2);
		} else if (art == 3) {
			stroke(10 * i);
			//strokeWeight((time % cos(time)) * 50);
			strokeWeight((i + (frameCount % 50)) % 20);
		} else if (art == 4) {
			stroke(random(0, 255), random(0, 255), random(0, 255));
			strokeWeight(random(3, 8));
		} else if (art == 6) {
			stroke(random(50, 200), random(10, 220), random(43, 123));
		} else {
			stroke(200);
			strokeWeight(5);
		}

		if (art == 5) {
			line(eqX(time), eqY(time), eqX2(time), eqY2(time));
		} else if (art == 6) {
			line(eqX3(time), eqY3(time), eqX4(time), eqY4(time));
		} else {
			point(eqX(time), eqY(time));
		}
		if (art == 1) {
			//stroke(255, 100, 60);
			point(eqX2(time), eqY2(time));

			//stroke(55, 50, 10);
			point(eqX3(time), eqY3(time));

			//stroke(100, 0, 255);
			point(eqX4(time), eqY4(time));
		}
		time += 0.1;
	}
	if (art == 0) {
		time += 3;
	}
}
