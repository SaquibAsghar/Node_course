const request = require("postman-request");

const getGeoCode = (location, cb) => {
	const map_access_token =
		"pk.eyJ1Ijoic2FxdWliYXNnaGFyLTE2IiwiYSI6ImNrcDJleXRpNDB4ZWoyb3RlNXBlaDEzNmsifQ.2FF5AHzXcZs9NqMXtEBsPw";
	let limit = 1;
	const mapUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=${map_access_token}&limit=${limit}`;

	request({ url: mapUrl, json: true }, (err, res) => {
		let message = "";
		if (err) {
			message = "Something went wrong";
			return cb(message, undefined);
		} else if (res.body.features.length === 0) {
            console.log(res.body)
			message = "Can't find location. Try another location.";
			return cb(message, undefined);
		} else {
			const data = {
				longNlatt: res.body.features[0].center.reverse(),
				place_name: res.body.features[0].place_name,
			};

			return cb(message, data);
		}
	});
};

module.exports = { getGeoCode };
