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
	return console.log("New note added.");
};

const addNote = (title, body) => {
	const notes = loadNotes();
	if (notes.length > 0) {
		const isPresent = notes.find(
			(ele) => ele.title.trim().toLowerCase() === title.trim().toLowerCase()
		);
		if (isPresent === undefined) {
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

const listAll = () => {
	const notes = loadNotes();

	if (notes.length) {
        let countNotes = 0
        console.log(`Displaying all your notes\n`)
		notes.forEach((element) => {
			console.log(`${++countNotes}\t${chalk.bgGray.yellow('Title')}: ${chalk.bgBlueBright.inverse(element.title)}`)
			console.log(`\t${chalk.bgGray.yellow.inverse('Description')}: ${chalk.bgBlueBright.inverse(element.body)}\n`)
            return
        }
		);
		return;
	}

	return console.log("Your Notes list is empty.");
};

module.exports = {
	listAll,
	addNote,
};
