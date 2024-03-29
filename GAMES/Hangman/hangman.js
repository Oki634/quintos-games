const hangman = [
	`
  +---+
  |   |
      |
      |
      |
      |
=========`,
	`
  +---+
  |   |
  O   |
      |
      |
      |
=========`,
	`
  +---+
  |   |
  O   |
  |   |
      |
      |
=========`,
	`
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========`,
	`
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========`,
	`
  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
=========`,
	`
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========`
];

const wordsList =
	'abruptly absurd abyss affix askew avenue awkward axiom azure bagpipes bandwagon banjo bayou beekeeper bikini blitz blizzard boggle bookworm boxcar buckaroo buffalo buffoon buzzard buzzing buzzwords cobweb croquet crypt cycle disavow dizzying duplex dwarves embezzle equip espionage euouae exodus faking fishhook fixable fjord flapjack flopping fluffiness flyby foxglove frazzled frizzled funny gabby galaxy galvanize gazebo gizmo glow glyph gnarly gnostic gossip grogginess haiku haphazard hyphen icebox injury ivory ivy jackpot jawbreaker jaywalk jazzy jelly jigsaw jinx jiujitsu jockey jogging joking jovial joyful juicy jukebox jumbo kayak kazoo keyhole kilobyte kiosk kitsch kiwifruit klutz knapsack lengths lucky luxury marquee matrix megahertz microwave mnemonic mystify nightclub nowadays oxidize oxygen pajama phlegm pixel pizazz polka psyche puppy puzzling quartz queue quip quiz quizzes razzmatazz rhythm scratch snazzy squawk staff strength stretch stronghold stymie subway swivel syndrome thrift thumb topaz transcript transgress transplant twelfth unknown unzip vaporize voodoo vortex walkway waltz wave wavy waxy well whomever witch wizard wristwatch xylophone yacht youthful yummy zigzag zilch zipper zodiac zombie';

// the start function gets run when the game starts
async function start() {
	// your code goes here! below this line

	/* Part A: split the wordsList String into an array called words, then choose a random word */
	let words = wordsList.split(' ');
	log(words);

	let randomNumber = round(random(0, words.length));
	let word = words[randomNumber];
	log(word);

	/* Part B: make an array with a line for each letter in the word */
	// Example word: 'quiz'
	// lines -> ['_', '_', '_', '_']
	let lines = '_'.repeat(word.length).split('');
	log(lines);

	/* Part C: show the lines for the word below the hangman art */
	let guess;

	let wrongAmount = 0;
	let correctAmount = 0;

	while (correctAmount != word.length) {
		guess = await prompt(hangman[wrongAmount] + '\n' + lines.join(' '));
		let i = 0;
		let isCorrect = false;
		while (i < word.length) {
			if (guess == word[i]) {
				lines[i] = word[i];
				isCorrect = true;
				correctAmount++;
			}
			i++;
		}
		if (!isCorrect) {
			wrongAmount++;
		}
		if (correctAmount == word.length) {
			await alert('YOU WON THE GAME');
			break;
		}
		if (wrongAmount == 6) {
			await alert('GAME OVER! The correct answer was  ' + word);
			break;
		}
	}

	exit(); // exits the game
} // end of the start function
