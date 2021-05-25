const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
	res.send("Welcome to home page");
});
app.get("/about", (req, res) => {
	res.send("<h1>About page<h1/>");
});
app.get("/weather", (req, res) => {
	res.send("<h2>Weather page<h2/>");
});
app.get("/help", (req, res) => {
	res.send("<h2>Help page<h2/>");
});

app.listen(port, () => {
	console.log(`Server is running at port number ${port}`);
});
