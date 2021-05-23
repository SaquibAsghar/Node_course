const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
	console.log("Get me notes");
};

const addNote = (title, body) => {
	const notes = loadNote();
	const checkDuplicate = notes.filter((note) => {
		return note.title === title;
	});
	if (checkDuplicate.length === 0) {
		notes.push({
			title,
			body,
		});
		saveNote(notes);
		return console.log("New note added...");
	}

	return console.log("This title already exist.");
};

const saveNote = (notes) => {
	const dataJson = JSON.stringify(notes);
	fs.writeFileSync("notes.json", dataJson, { flag: "w" });
};

const loadNote = () => {
	try {
		const dataJson = fs.readFileSync("notes.json", "utf8", "r");

		const data = JSON.parse(dataJson);

		return data;
	} catch (error) {
		return [];
	}
};

const removeNote = (title) => {
	let isPresent = false;
	const notes = loadNote();
	notes.filter((note) => {
		if (note.title === title) {
			isPresent = true;
		}
	});
	if (isPresent) {
		const filteredNote = notes.filter((note) => {
			return note.title !== title;
		});
		saveNote(filteredNote);
		return console.log(`Note with title ${title} remove from the list.`);
	}
	return console.log(`No note with title "${title}" found from the list.`);
};

const readNote = (title) => {
	let isPresent = false;
	const notes = loadNote();
	notes.filter((note) => {
		if (note.title.toLowerCase() == title.trim().toLowerCase()) {
			console.log("found");
			isPresent = true;
		}
	});
    debugger
	if (isPresent) {
		notes.filter((note) => {
			if (note.title.toLowerCase() === title.trim().toLowerCase()) {
				return console.log(
					`Here is your note:\n\t${chalk.bgBlue.white.bold.inverse(
						` Title `
					)}: ${chalk.red(note.title)}\n\t${chalk.bgBlue.white.bold.inverse(
						` Description `
					)}: ${chalk.red(note.body)}`
				);
			}
		});
	} else {
		return console.log(
			`${chalk.red(
				`"${title.trim()}" title not found.\nPlease check again...`
			)}`
		);
	}
};

const listAllNotes = () => {
	let count = 0;
	const notes = loadNote();
	if (notes.length !== 0) {
		console.log("Here is the list of your notes");
		const allNotes = notes.map((note) => {
			return console.log(
				`\n${++count}\t${chalk.bgBlueBright.white.bold(` Title `)}: ${
					note.title
				}\n\t${chalk.bgBlueBright.white.bold(` Description `)}: ${note.body}`
			);
		});
		return allNotes;
	}
	return console.log(
		chalk.red.bold(`Notes list empty.\nPlease Enter new note to begin...`)
	);
};

module.exports = {
	getNotes,
	addNote,
	removeNote,
	readNote,
	listAllNotes,
};
