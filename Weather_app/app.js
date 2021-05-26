const getGeoInfo = require("./utils/geoLocation");
const getWeatherForcast = require("./utils/getWeather");

const loc = process.argv[2];

getGeoInfo(loc, (data) => {
	getWeatherForcast(data, (data)=>{
		console.log(data)
	});
});
