const express = require('express');
const https = require('https');// native node module
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res, next) => {
	res.sendFile(__dirname + '/index.html');
})

app.post('/', (req, res) => {
	const cityName = req.body.cityName
	// res.send("Post request is received for : " + cityName)
	// console.log(cityName)
	const apiKey = "633548baa1a70c5a65f44788038b589e"
	// const cityParam = cityName
	const unitParam = "metric"
	const url = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units="+ unitParam + "&appid="+apiKey;
	
	https.get(url, function(response){
		console.log(res.statusCode);

		response.on("data", function(data) {
			// converting the data to javascript object
			const weatherData = JSON.parse(data)
			const icon = weatherData.weather[0].icon
			const image = "http://openweathermap.org/img/wn/"+icon+"@2x.png"
			const temp = weatherData.main.temp
			// const city = weatherData.name
			const weatherDescription = weatherData.weather[0].description
			// console.log(weatherDescription)
			// console.log(weatherData);
			// console.log(temp);
			// console.log(weatherDescription);
			// const tempInCel = Math.round(Number(temp) - 273.15, 4)
			res.write("<h1>Weather in " + cityName +" feels like : "+  weatherDescription+"</h1>")
			res.write("<h1>Temperature is : " + temp +" celsius. </h1>")
			res.write("<img src="+ image + ">")
			res.send()
			// res.send("temperature is : "+ temp)
			// res.send("Weather is Ludhiana feels like : "+ weatherDescription)
			// const object = {
			// 	name : "Rohan",
			// 	hobby : "soccer"
			// }
			// // packing down the wardrobe to specific string using JSON.stringify
			// console.log(JSON.stringify(object.name));
			// console.log(object.name);
			// console.log(JSON.stringify(weatherData.coord));
		})
	})

	// res.send("Server is running" + res)
})








app.listen(3600, function(){
	console.log("Server running on Port 3600")
})

