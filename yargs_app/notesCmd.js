const fs = require("fs");
const chalk = require("chalk");

const loadNotes = () => {
	try {
		let data;
		data = fs.readFileSync("notes-data.json", "utf8", { flag: "r" });
		const parsedData = JSON.parse(data);
		return parsedData;
	} catch (error) {
		return [];
	}
};

const saveNote = (data) => {
	const strigifiedData = JSON.stringify(data);
	fs.writeFileSync("notes-data.json", strigifiedData, { flag: "w" });
	return console.log("Note saved.");
};

const checkDuplicacy = (notes, title) => {
	const isDuplicate = notes.find(
		(ele) => ele.title.trim().toLowerCase() === title.trim().toLowerCase()
	);
	return isDuplicate;
};

const addNote = (title, body) => {
	const notes = loadNotes();
	if (notes.length > 0) {
		// const isPresent = checkDuplicacy(notes, title)
		// if (isPresent === undefined) {
		if (checkDuplicacy(notes, title) === undefined) {
			const notesData = {
				title: title.trim(),
				body: body.trim(),
			};
			notes.push(notesData);
			saveNote(notes);
			return;
		}
		return console.log("This title already exist");
	} else {
		const notesData = {
			title,
			body,
		};
		notes.push(notesData);
		saveNote(notes);
	}
};

const updateNote = (title, body) => {
	const notes = loadNotes();
	if (notes.length > 0) {
		if (checkDuplicacy(notes, title)) {
			notes.forEach((note) => {
				if (note.title === title) {
					return (note.body = body);
				}
			});
			return saveNote(notes);
			
		}
		return console.log("No note found to update");
	}

	return console.log(`No Note to update`);
};

const readNote = (title) => {
	const notes = loadNotes();
	if (notes.length > 0) {
		if (checkDuplicacy(notes, title)) {
			const singleNote = notes.filter((note) => note.title === title);
			return console.log(
				`Your note\nTitle: ${singleNote[0].title}\nDescription: ${singleNote[0].body}`
			);
		}
		return console.log("Note not found.");
	}
	return console.log("Your Notes list is empty.");
};
const removeNote = (title) => {
	const notes = loadNotes();
	if (notes.length > 0) {
		if (checkDuplicacy(notes, title)) {
			const newNote = notes.filter((note) => {
				return note.title !== title;
			});
			console.log(newNote);
			saveNote(newNote);
			return;
		}
		return console.log("No note found");
	}
	return console.log("No Note to remove.");
};
const listAll = () => {
	const notes = loadNotes();

	if (notes.length) {
		let countNotes = 0;
		console.log(`Displaying all your notes\n`);
		notes.forEach((element) => {
			console.log(
				`${++countNotes}\t${chalk.bgGray.yellow(
					"Title"
				)}: ${chalk.bgBlueBright.inverse(element.title)}`
			);
			console.log(
				`\t${chalk.bgGray.yellow.inverse(
					"Description"
				)}: ${chalk.bgBlueBright.inverse(element.body)}\n`
			);
			return;
		});
		return;
	}

	return console.log("Your Notes list is empty.");
};

module.exports = {
	listAll,
	addNote,
	readNote,
	removeNote,
	updateNote,
};
