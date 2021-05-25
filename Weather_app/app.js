const {getGeoCode} = require("./utils/geoLocation");
const getWeather = require('./utils/getWeather')

const callback = (mess, data) => {
	if (mess) {
		return mess;
	}
	return getWeather(data, weatherInfo);
};
const userSearchLoc = process.argv[2]
getGeoCode(userSearchLoc, callback);

const weatherInfo = (mess, data) => {
	if (mess) {
		return console.log(mess)
	}
	return console.log(
        `Weather: ${data.current.weather_descriptions[0]}. Currently it is ${data.current.temperature} C degree. It feels liks ${data.current.feelslike} C degree.`);
};