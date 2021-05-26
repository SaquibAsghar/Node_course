const request = require("postman-request");

const getWeatherForcast = (data, cb) => {
	if (!data.status) {
		return cb(data);
	}
	const url_access_key = "db83186412c5adec5a422f55b32ea9b6";
	const url = `http://api.weatherstack.com/current?access_key=${url_access_key}&query=${data.co_ordinate}`;

	request({ url, json: true }, (err, res) => {
		let message = "";
		let status;
		if (err) {
			status = false;
			message = "Something went wrong";
			const data = {
				status,
				message,
			};

			return cb(data);
		}
		const { location, current } = res.body;
		status = true;
		const data = {
			status,
			location,
			current,
		};
		return cb(data);
	});
};

module.exports = getWeatherForcast;
