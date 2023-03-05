// screen width is 256, height is 192

// create the sprite variables outside the setup function so you
// can use them in other functions
let ball;
let rightPaddle;
let leftPaddle;
let topWall;
let downWall;
let halfLine;
let rPlayerScore = 0;
let lPlayerScore = 0;

// code in the setup function gets run once at the start of the game
function setup() {
	let imgBall = spriteArt(`
..wwww..
.ww..ww.
ww....ww
w......w
w......w
ww....ww
.ww..ww.
..wwww..`);

	let imgPaddle = spriteArt('.wwwwww.\nwwwwwwww\n' + 'ww....ww\n'.repeat(42) + 'wwwwwwww\n.wwwwww.');

	// creates a ball sprite and places it in center of the screen
	ball = new Sprite();
	ball.image = imgBall;
	ball.x = width / 2;
	ball.y = height / 2;
	ball.diameter = 8;
	ball.bounciness = 1; // full bounciness
	ball.friction = 0; // no friction
	ball.speed = Math.round(random(1, 4));
	ball.direction = Math.round(random(0, 20));

	// TODO: create paddle sprites
	rightPaddle = new Sprite();
	rightPaddle.img = imgPaddle;
	rightPaddle.x = width - 10;
	rightPaddle.collider = 'k';
	leftPaddle = new Sprite();
	leftPaddle.img = imgPaddle;
	leftPaddle.x = 10;
	leftPaddle.collider = 'k';

	// TODO: create walls
	let imgWall = spriteArt('xyuw'.repeat(100));
	let imgWall2 = spriteArt('b\nu\nr\nm\n'.repeat(100));
	topWall = new Sprite();
	topWall.img = imgWall;
	topWall.y = 1;
	topWall.collider = 's';
	downWall = new Sprite();
	downWall.img = imgWall;
	downWall.y = height;
	downWall.collider = 's';
	halfLine = new Sprite();
	halfLine.img = imgWall2;
	halfLine.collider = 'none';
}

// code in the draw function gets run 60 times per second
function draw() {
	background('b');

	if (ball.x < -200) {
		ball.speed = 0;
		rPlayerScore++;
		ball.direction = Math.round(random(-80, 80));
		ball.speed = Math.round(random(1, 4));
	} else if (ball.x > width + 200) {
		ball.speed = 0;
		ball.direction = Math.round(random(100, 220));
		lPlayerScore++;
		ball.speed = Math.round(random(1, 4));
	}
	txt(lPlayerScore, 2, 10);
	txt(rPlayerScore, 2, 22);
	if (ball.collided(rightPaddle)) {
		ball.speed += 0.3;
	} else if (ball.collided(leftPaddle)) {
		ball.speed += 0.3;
	} else if (ball.collided(topWall)) {
		ball.speed += 0.6;
	} else if (ball.collided(downWall)) {
		ball.speed += 0.6;
	}

	if (ball.x < -200 || ball.x > width + 200) {
		ball.x = width / 2;
		ball.y = height / 2;
	}

	// TODO: move the paddles
	leftPaddle.speed = 0;
	if (kb.pressing('w') && leftPaddle.y > 23) {
		leftPaddle.direction = -90;
		leftPaddle.speed = 5;
	} else if (kb.pressing('a') && leftPaddle.x > 8) {
		leftPaddle.direction = 180;
		leftPaddle.speed = 5;
	} else if (kb.pressing('s') && leftPaddle.y < height - 23) {
		leftPaddle.direction = 90;
		leftPaddle.speed = 5;
	} else if (kb.pressing('d') && leftPaddle.x < width / 2 - 4) {
		leftPaddle.direction = 0;
		leftPaddle.speed = 5;
	}
	rightPaddle.speed = 0;
	if (kb.pressing('ArrowUp') && rightPaddle.y > 23) {
		rightPaddle.direction = -90;
		rightPaddle.speed = 5;
	} else if (kb.pressing('ArrowLeft') && rightPaddle.x > width / 2 + 4) {
		rightPaddle.direction = 180;
		rightPaddle.speed = 5;
	} else if (kb.pressing('ArrowDown') && rightPaddle.y < height - 23) {
		rightPaddle.direction = 90;
		rightPaddle.speed = 5;
	} else if (kb.pressing('ArrowRight') && rightPaddle.x < width - 8) {
		rightPaddle.direction = 0;
		rightPaddle.speed = 5;
	}
}
