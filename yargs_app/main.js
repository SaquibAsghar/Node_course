const yargs = require("yargs");
const notes = require("./notesCmd");

yargs.version("2.0.0");

const myCommands = [
	{
		command: "add",
		describe: "Add new note to list",
		builder: {
			title: {
				describe: "Title for note",
				demandOption: true,
				type: "string",
			},
			body: {
				describe: "Description for note title",
				demandOption: true,
				type: "string",
			},
		},
		handler: (argv) => notes.addNote(argv.title, argv.body),
	},
	{
		command: "update",
		describe: "Update note",
		builder: {
			title: {
				describe: "Title for note",
				demandOption: true,
				type: "string",
			},
			upbody: {
				describe: "Update title body",
				demandOption: true,
				type: "string",
			},
		},
		handler: (argv) => console.log("Updated note to list"),
	},
	{
		command: "remove",
		describe: "Remove note from list",
		builder: {
			title: {
				describe: "Title for note",
				demandOption: true,
				type: "string",
			},
		},
		handler: (argv) => console.log("Removed note from list"),
	},
	{
		command: "read",
		describe: "Read note from list provided title",
		builder: {
			title: {
				describe: "Title for note",
				demandOption: false,
				type: "string",
			},
		},
		handler: (argv) => notes.readNote(argv.title),
	},
	{
		command: "list",
		describe: "List all notes present in list",
		handler: () => notes.listAll()
	},
	{
		command: "del",
		describe: "Delete all notes from list",
		handler: () => console.log("Deleted all notes"),
	},
];

yargs.command(myCommands);

yargs.parse();
