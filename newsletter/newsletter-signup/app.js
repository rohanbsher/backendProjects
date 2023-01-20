const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const request = require('request');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// provides path to static file 
app.use(express.static("public"))

app.get('/', (req, res) => {
	// res.send('server is running')
	res.sendFile(__dirname + '/signup.html')
});

app.post('/', (req, res) => {

	const firstName = req.body.fName
	const lastName = req.body.lName
	const email = req.body.email

	console.log(firstName + ' ' + lastName + ' ' + email)
	
	const data = {
		members : [
			{
				email_address: email,
				status: "subscribed",
				merge_fields: {
					FNAME: firstName,
					LNAME: lastName
				}
			}
		]
	}

	const jsonData = JSON.stringify(data);
	const url = "https://us21.api.mailchimp.com/3.0/lists/8cdaf8b7ec";
	const option = {
		method : "POST",
		auth : "rohan:ef5e29cf08b936ed55499185655b56ed-us21"
	}

	// const request = https.request(url, option, function(response){
	// 	response.on('data', function(data){
	// 		console.log(JSON.parse(data))
	// 	})
	// })

	// request.write(data)
	// request.end()

});

app.listen(3700, function() {
	console.log('Server listening on port')
})

// const apiKey = "ef5e29cf08b936ed55499185655b56ed-us21"
// const listId = "8cdaf8b7ec"