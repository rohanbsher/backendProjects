const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const request = require('request');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
	res.send('server is running')
});

app.listen(3700, function() {
	console.log('Server listening on port')
})