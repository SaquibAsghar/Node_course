const request = require("postman-request");
const {getGeoCode} = require("./utils/geoLocation");
const getWeather = require('./utils/getWeather')

const access_key = "db83186412c5adec5a422f55b32ea9b6";

// let loc = "New Delhi";

// const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=${loc}`;

// const map_access_token =
// "pk.eyJ1Ijoic2FxdWliYXNnaGFyLTE2IiwiYSI6ImNrcDJleXRpNDB4ZWoyb3RlNXBlaDEzNmsifQ.2FF5AHzXcZs9NqMXtEBsPw";

// const limit = 1;

// const location = "New Delhi";

// const mapUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${map_access_token}&limit=${limit}`;

// request({ url, json: true }, (err, res) => {
// 	if (err) {
// 		return console.log("Something went wrong");
// 	}
// 	const data = res.body;
// 	console.log(
// 		`Weather: ${data.current.weather_descriptions[0]}. Currently it is ${data.current.temperature} C degree. It feels liks ${data.current.feelslike} C degree.`
// 	);
// });

// request({ url: mapUrl, json: true }, (err, res) => {
// 	if (err) {
// 		return console.log("Something went wrong");
// 	} else {
// 		// const data = JSON.parse(res.body);
// 		const data = res.body;
// 		const len = data.features.length;
// 		if (len > 0) {
// 			const longNlat = data.features[0].center;
// 			return console.log(
// 				`The longitude and lattitude of ${data.features[0].text} is : ${longNlat[0]} and ${longNlat[1]} respectively.`
// 			);
// 		}
// 		return console.log("Unable to find location");
// 	}
// });

// const getGeoCode = (location, cb) => {
// 	const map_access_token =
// 		"pk.eyJ1Ijoic2FxdWliYXNnaGFyLTE2IiwiYSI6ImNrcDJleXRpNDB4ZWoyb3RlNXBlaDEzNmsifQ.2FF5AHzXcZs9NqMXtEBsPw";
// 	let search_loc = "New Delhi";
// 	let limit = 1;
// 	const mapUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${search_loc}.json?access_token=${map_access_token}&limit=${limit}`;

// 	request({ url: mapUrl, json: true }, (err, res) => {
// 		let message = "";
// 		if (err) {
// 			message = "Something went wrong";
// 			return cb(message, undefined);
// 		} else if (res.body.features.length === 0) {
// 			message = "Can't find location. Try another location.";
// 			return cb(message, undefined);
// 		} else {
// 			// console.log(res.body)
// 			const data = {
// 				longNlatt: res.body.features[0].center,
// 				// tude: res.body.features[0].center[1],
// 				place_name: res.body.features[0].place_name,
// 			};

// 			return cb(message, data);
// 		}
// 	});
// };

const callback = (mess, data) => {
	// console.log(mess);
	// console.log(data);
	if (mess) {
		return mess;
	}
	return getWeather(data, weatherInfo);
};
const userSearchLoc = process.argv
getGeoCode(userSearchLoc, callback);

// const getWeather = (loc, cb) => {
// 	const url_access_key = "db83186412c5adec5a422f55b32ea9b6";
// 	const url = `http://api.weatherstack.com/current?access_key=${url_access_key}&query=${loc[0]}`;
//     let message = "";
//     request({url, json:true}, (err, res)=>{
//         if (err){
//             message = 'some err '
//             return cb(message, undefined)
//         }else if(res.body.success === false){
//             message = "Provided location not valid"
//             return cb(message, undefined)
//         }
//         const data = res.body
//         return cb(message, data)
//     })
// };

const weatherInfo = (mess, data) => {
	if (mess) {
		return console.log(mess)
	}
	return console.log(
        `Weather: ${data.current.weather_descriptions[0]}. Currently it is ${data.current.temperature} C degree. It feels liks ${data.current.feelslike} C degree.`);
};

// getWeather("New Delhi", weatherInfo)

