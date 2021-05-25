const express = require("express");
const path = require("path");
const hbs = require('hbs')

// console.log(__dirname);
// console.log(__filename)

const publicDirectory = path.join(__dirname, "../static/public/");

const app = express();
const port = process.env.PORT || 3000;
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, '../templates/partials')

// Set template engine to hbs
app.set("view engine", "hbs");

// tell the express where to look for template files other than default 'views' folder present at root folder
app.set("views", viewsPath);

hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectory));

app.get("/", (req, res) => {
	res.render("index", {
		title: "Weather App",
		name: "Saquib Asghar",
	});
});

app.get("/about", (req, res) => {
	res.render("about", {
		title: "About Me",
		name: "Saquib Asghar",
	});
});

app.get("/help", (req, res) => {
	res.render("help", {
		title: "Help Page",
        name: "Saquib Asghar",
		mess: "Some test message",
	});
});

app.get("/weather", (req, res) => {
	res.json([
		{
			place: "New Delhi",
			forecast: 25,
		},
		{
			place: "New York",
			forecast: 20,
		},
		{
			place: "New Bali",
			forecast: 32,
		},
		{
			place: "Boston",
			forecast: 15,
		},
	]);
});

app.get('*', (req, res)=>{
    res.status(404).send("<h1>Page Not Found</h1>")
})

app.listen(port, () => {
	console.log(`Server is running at port number ${port}`);
});
