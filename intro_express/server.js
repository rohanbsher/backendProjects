
const express = require('express');
const superHeroes = require('superheroes');
const superVillain = require('supervillains');

const app = express();

// server started on port 3000
app.listen(3000, function(){
	console.log('Express server listening on port')
})

app.get('/', (req, res) => {
	res.send("Welcome to Home page");
})

app.get('contac', (req, res) => {
	res.send("");
})

app.get('/superhero', (req, res) => {
	res.send("SuperHero: " + superHeroes.random());
})

app.get('/supervillain', (req, res) => {
	res.send("SuperVillain: " + superVillain.random());
})