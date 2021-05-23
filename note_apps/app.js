// const getNotes = require('./notes');
// const path = require('path');
const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./note");

// yargs.command({
// 	command: "add",
// 	describe: "This commmand will add",
// 	handler: function () {
// 		console.log("Calling add handler");
// 	},
// });

// yargs.command({
// 	command: "remove",
// 	describe: "This method will remove note",
// 	handler: () => {
// 		console.log("Calling remove handler");
// 	},
// });

// yargs.command({
// 	command: "read",
// 	describe: "This will read note",
// 	handler: () => {
// 		console.log("Calling remove handler");
// 	},
// });

// const list = {
// 	command: "list",
// 	describe: "This will list note",
// 	handler: console.log("Calling list handler"),
// };

// const adding = {
// 	command: "adding",
// 	describe: "This will add note.",
// 	builder: {
// 		title: {
// 			describe: "Note Title",
// 			demandOption: true,
// 			type: "string",
// 		},
// 	},
// 	handler: (argv) => {
// 		notes.addNote(argv.title, argv.body)
// 	},
// };

const commands = [
	{
		command: "list",
		describe: "This will list all notes.",
		builder: {
			title: {
				describe: "Show all note",
				// demandOption: true,
				// type: "string",
			},
		},
		handler: () => {
			notes.listAllNotes()
		},
	},
	{
		command: "add",
		describe: "This will add note.",
		builder: {
			title: {
				describe: "Note Title",
				demandOption: true,
				type: "string",
			},
			body: {
				describe: "Description",
				demandOption: true,
				type: "string",
			},
		},
		handler: (argv) => {
			notes.addNote(argv.title, argv.body);
		},
	},
	{
		command: "remove",
		describe: "This will remove note.",
		builder: {
			title: {
				describe: "Note title",
				demandOption: true,
				type: "string",
			},
		},
		handler: (argv) => {
			notes.removeNote(argv.title);
		},
	},
	{
		command: "read",
		describe: "This will read note.",
		builder: {
			title: {
				describe: "Read Note",
				demandOption: true,
				type: "string",
			},
		},
		handler: (argv) => {
			notes.readNote(argv.title);
		},
	},
];
yargs.command(commands);

// yargs.command(adding)

// console.log("75 line ",yargs.argv);
yargs.parse();

// const fs = require("fs");
// const {name, add} = require('./utils');

// console.log(name);
// console.log(add(5, 9))
