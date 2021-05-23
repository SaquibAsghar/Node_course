const fs = require("fs");

const books = [
	{
		title: "Ego is the Enemy",
		autor: "Saquib Asghar",
	},
	{
		title: "CSS basic for Dummy",
		author: "Negoar Moon",
	},
	{
		title: "Html Basic for Dummies",
		author: "Alexander Bell",
	},
	{
		title: "JavaScript for Dummies",
		author: "Mark Tyson",
	},
	{
		title: "JavaScript Advance",
		author: "Mark Tyson, Julliet Roberts",
	},
];

// const book_json = JSON.stringify(books);
// console.log(book_json);

// fs.writeFileSync("01_data.json", book_json, { flag: "w" });

const data =fs.readFileSync('01_data.json', 'utf8', 'r');
console.log(data)
const parse_data = JSON.parse(data)
console.log(parse_data)

// parse_data.name = "Saquib Asghar"
// parse_data.age = 25

// console.log(parse_data)

// fs.writeFileSync("01_data.json", JSON.stringify(parse_data), { flag: "w" });


