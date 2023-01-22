// start of wrapper (I will explain how this works later)
async function start() {
	// your code goes here! below this line

	// the user hasn't made a choice yet
	let path = 0;
	let potion = 0;
	let sword = false;
	let playerHP = 200;
	let bossHP = 500;
	let playerAttack = Math.round(random(1, 80));
	let bossAttack = Math.round(random(20, 40));
	let swordAttack = Math.round(random(50, 150));
	let potionHeal = Math.round(random(10, 100));
	let attack = 0;
	while (path != null) {
		// while path is not null (nothing)
		// null in this case indicates the player cancelled out of the prompt

		let message = ''; // initialize message to empty String

		if (path == 0) {
			/* Part A0: Start your story! */
			message =
				'You are at a dungeon and trying to defeat a dragon. You can see three paths. Type one of the numbers and press enter to choose your path.\n\n\t' +
				'1: left\n\t' + //find key
				'2: center\n\t' + //find sword
				'3: right'; //find the dragon
		}
		if (path == 1) {
			message = 'You chose to go left. Oh, there is a potion. Do you want to get it?\n\n\t' + '4: yes\n\t' + '5: no';
		}
		if (path == 2) {
			message = 'You chose to go center. Oh, there is a sword. Do you want to get it?\n\n\t' + '6: yes\n\t' + '7: no';
		}
		if (path == 3) {
			message =
				'There are four paths. Which one do you choose?\n\n\t' +
				'7: left\n\n\t' + //potion
				'8: center\n\n\t' + //sword
				'9: right\n\n\t' + //dragon
				'10: ????';
		}
		if (path == 4) {
			await alert('You got the potion!');
			potion++;
			path = 3;
		}
		if (path == 5) {
			path = 3;
		}
		if (path == 6) {
			await alert('You got a sword');
			sword = true;
			path = 9;
		}
		if (path == 7) {
			await alert('You got a potion');
			path = 9;
		}
		if (path == 8) {
			if (sword) {
				await alert('Oh no. You lost your sword');
				sword = false;
			} else {
				await alert('You got a sword');
				sword = true;
			}
			path = 9;
		}
		if (path == 9) {
			//fight
			while (playerHP > 0 && bossHP > 0) {
				message =
					'Oh my got!!!!! There is a dragon. You should defeat him!\n' +
					'What will you do?\n' +
					'Player HP: ' +
					playerHP +
					'\n' +
					'Dragon HP: ' +
					bossHP +
					'\n' +
					'Potion: ' +
					potion +
					'\n\n' +
					'1: Attack\n' +
					'2: Use potion\n';
				path = await prompt(message);
				if (sword) {
					attack = swordAttack;
				} else {
					attack = playerAttack;
				}
				if ((path = 1)) {
					bossHP -= attack;
					playerHP -= bossAttack;
				} else {
					if (potion > 0) {
						playerHP += potionHeal;
						potion--;
					} else {
						playerHP -= bossAttack;
					}
				}
			}
			if (playerHP <= 0) {
				await alert('GAME OVER');
				path = 11;
			} else {
				await alert('congratulation! You defeated the dragon');
				path = 11;
			}
			if (path == 10) {
				await alert('Oh no. There was a whole. YOU DIED');
				path = 11;
			}
			if (path == 11) {
				message = 'DO you want to play this game again?\n' + '0: yes\n' + '12: no';
			}
			if (path == 12) {
				break;
			}
		}

		// prompt the player to choose a path
		path = await prompt(message);

		/* Part C: check if the player made a valid choice, reject invalid choices */
		// if () {
		// 	await alert('You should choose the right decision');
		// 	paths = 0;
		// }
	}

	exit(); // exits the game
} // end wrapper
