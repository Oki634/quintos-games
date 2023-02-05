let frog, lilypads;
let bigJump, smallJump, fall;
function preload() {
	frog = new Sprite();
	frog.addAni('frog_jump.png', { frameSize: [32, 16], frames: 7 });
	lilypads = new Group();
	lilypads.addAni('lilypads.png', { frameSize: [16, 16], frames: 12 });
	smallJump = loadSound('sounds/retro_jump_bounce_12.wav');
	bigJump = loadSound('sounds/retro_jump_bounce_01.wav');
	fall = loadSound('sounds/retro_jump_bounce_08.wav');
	smallJump.setVolume(0.3);
	bigJump.setVolume(0.3);
	fall.setVolume(0.3);
}

function setup() {
	world.gravity.y = 10;
	noStroke();

	frog.x = 0;
	frog.y = 80;
	frog.w = 10;
	frog.h = 8;
	frog.rotationLock = true;
	frog.layer = 2;

	lilypads.y = 90;
	lilypads.w = 10;
	lilypads.h = 2;
	lilypads.collider = 'static';
	lilypads.layer = 1;
	makeLilyPads();
}

function makeLilyPads() {
	// TODO: use a loop to make more lily pads

	let count = 0;
	for (let i = 0; i < 50; i++) {
		let lily = new lilypads.Sprite();
		lily.x = i * 16;

		lily.ani.frame = round(random(0, 11));
		lily.ani.frameDelay = round(random(60, 140));

		count++;
		if (random() < 0.3 || count >= 5) {
			i++;
			count = 0;
		}
	}
}

function draw() {
	background('0');
	fill('3');
	rect(0, 0, width, 90);

	// if frog is on the ground
	if (frog.y >= 83 && frog.vel.y <= 0) {
		frog.ani.frame = 0;
		frog.x = round(frog.x / 16) * 16;
		if (kb.presses('up')) {
			// little jump
			frog.ani.play();
			frog.velocity.y = -1.43;
			frog.velocity.x = 0.96;
			smallJump.play();
		} else if (kb.presses('right')) {
			// BIG jump!
			frog.ani.play();
			frog.velocity.y = -2;
			frog.velocity.x = 1.35;
			bigJump.play();
		}
	} else if (frog.y >= 144 && frog.y <= 150) {
		fall.play();
		frog.y = 80;
		frog.x = 0;
	}

	camera.x = frog.x + 64;
}
