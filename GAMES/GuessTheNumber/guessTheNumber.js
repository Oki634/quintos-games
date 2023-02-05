async function start() {
	// your code goes here!
	let num = random(1, 100);
	num = round(num);
	let guess = 0;

	while (num != guess) {
		guess = await prompt('Guess a number 1 to 100');

		if (guess > num) {
			await alert('your guess is too high!');
		} else if (guess < num) {
			await alert('your guess is too low');
		} else {
			await alert('your guess is correct');
		}
	}

	exit();
}
