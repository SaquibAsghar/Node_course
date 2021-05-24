const request = require("postman-request");

const access_key = "db83186412c5adec5a422f55b32ea9b6";

let loc = "New Delhi";

const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=${loc}`;

const map_access_token =
	"pk.eyJ1Ijoic2FxdWliYXNnaGFyLTE2IiwiYSI6ImNrcDJleXRpNDB4ZWoyb3RlNXBlaDEzNmsifQ.2FF5AHzXcZs9NqMXtEBsPw";

const limit = 1;

const location = "New Delhi"

const mapUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${map_access_token}&limit=${limit}`;

// request({ url, json: true }, (err, res) => {
// 	if (err) {
// 		return console.log("Something went wrong");
// 	}
// 	const data = res.body;
// 	console.log(
// 		`Weather: ${data.current.weather_descriptions[0]}. Currently it is ${data.current.temperature} C degree. It feels liks ${data.current.feelslike} C degree.`
// 	);
// });

request({ url: mapUrl, json: true }, (err, res) => {
	if (err) {
		return console.log('Something went wrong');
	} else {
		// const data = JSON.parse(res.body);
		const data = res.body;
        const len = data.features.length
		if (len > 0) {
			const longNlat = data.features[0].center;
			return console.log(
				`The longitude and lattitude of ${data.features[0].text} is : ${longNlat[0]} and ${longNlat[1]} respectively.`
			);
		}
		return console.log("Unable to find location");
	}
});
