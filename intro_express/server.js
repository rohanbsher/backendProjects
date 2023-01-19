
const express = require('express');
const superHeroes = require('superheroes');
const superVillain = require('supervillains');

const app = express();

// nodemon monitors any changes in the code and 
// automatically restarts the server

// server started on port 3000
app.listen(3000, function(){
	console.log('Express server listening on port')
})

app.get('/', (req, res) => {
	res.send("<h1>This is Home page</h1>");
})

app.get('/contact', (req, res) => {
	res.send("Contact at : test@gmail.com");
})

app.get('/about', (req, res) => {
	res.send(" <ul><li>Rohan</li><li>Bhandari</li></ul> ")
})

app.get('/superhero', (req, res) => {
	res.send("SuperHero: " + superHeroes.random());
})

app.get('/supervillain', (req, res) => {
	res.send("SuperVillain: " + superVillain.random());
})
