// example film table
let header = `
| id | film title                      |
|====|=================================|`;

let genres = ['Fantasy', 'Romance', 'Comedy', 'Drama', 'Crime'];
let allFilms;
let members;

async function start() {
	let filePath = QuintOS.dir + '/films.json';
	let data = await fetch(filePath);
	allFilms = await data.json();
	let filePath2 = QuintOS.dir + '/members.json';
	let data2 = await fetch(filePath2);
	members = await data2.json();
	log(members);
	mainMenu();
}
async function mainMenu() {
	erase();
	let table = header;
	for (let film of allFilms) {
		if (film.title.length >= 30) {
			table = table + '| ' + film.id + ' | ' + film.title.slice(0, 28) + '... |\n';
		} else {
			table = table + '| ' + film.id + ' | ' + film.title.padEnd(32, ' ') + '|\n';
		}
	}
	txt(table, 6, 0);
	let cmd = await prompt('Main Menu\n0: View Member\n1: View Film Info\n2: Exit', 16, 0, 40);
	if (cmd[0] == 0) {
		for (let member of members) {
			if (member.id == cmd[2]) {
				await viewMember(member);
			}
		}
	} else if (cmd[0] == 1) {
		let filmID = cmd.slice(2);

		await viewFilmInfo(filmID);
		mainMenu();
	} else {
		exit();
	}
}
async function viewMember(member) {
	erase();
	txt('name: ' + member.name + '\n' + 'ID: ' + member.id, 2, 2);

	let table = header;

	for (let filmID of member.rented) {
		for (let film of allFilms) {
			if (filmID == film.id) {
				if (film.title.length >= 30) {
					table = table + '| ' + film.id + ' | ' + film.title.slice(0, 28) + '... |\n';
				} else {
					table = table + '| ' + film.id + ' | ' + film.title.padEnd(32, ' ') + '|\n';
				}
			}
		}
	}
	txt(table, 6, 0);

	let cmd = await prompt('Menu\n0: Back to Main Menu\n1: View Film Info\n2: Rent film\n3: Return film', 16, 0, 40);
	if (cmd == 0) {
		mainMenu();
	} else if (cmd[0] == 1) {
		await viewFilmInfo(cmd.slice(2));
		viewMember(member);
	} else if (cmd[0] == 2) {
		member.rented.push(cmd.slice(2));
		viewMember(member);
	} else {
		let filmID = cmd.slice(2);
		for (let i = 0; i < member.rented.length; i++) {
			if (filmID == member.rented[i]) {
				member.rented.splice(i, 1);
			}
		}

		viewMember(member);
	}
}

async function viewFilmInfo(filmID) {
	erase();
	for (let film of allFilms) {
		if (filmID == film.id) {
			await alert(
				'title: ' +
					film.title +
					'\ngenre: ' +
					genres[film.genre] +
					'\nrating: ' +
					film.rating +
					'\ndescription: ' +
					film.description,
				2,
				0,
				40
			);
		}
	}
}
