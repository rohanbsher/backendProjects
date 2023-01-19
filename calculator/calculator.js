const express = require('express');
const app = express();

const bodyParser = require('body-parser')
// extended allows us to post nested object 
// this code is written everytime using body parser
// basically parses the form body
app.use(bodyParser.urlencoded({extended: true}))

app.listen(3600, function() {
	console.log('Port 3000 is running');
})


app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

app.post('/', function(req, res) {
	// console.log(req.body)
	let val1 = Number(req.body.n1)
	let val2 = Number(req.body.n2)
	let ans = val1 + val2
	res.send("Addition is " + ans)
})

app.get('/bmi', (req, res) => {
	res.sendFile(__dirname + '/bmiCalculator.html')
})

app.post('/bmi', (req, res) => {
	let weight = parseFloat(req.body.weight)
	let height = parseFloat(req.body.height)
	let bmi = weight / (height * height)

	res.send("weight : " + weight + " height : "+height+ " bmi is : " + bmi)

})

app.get('/square', (req, res) => {
	res.sendFile(__dirname + '/square.html')
})

app.post('/square', (req, res) => {
	let num = Number(req.body.numToSquare)
	let answer = num * num

	res.send("numToSquare : " + num + " answer is " + answer)
})

app.get('/root', (req, res) => {
	res.sendFile(__dirname + '/root.html')
})

app.post('/root', (req, res) => {
	let num = Number(req.body.numToRoot)
	let answer = Math.sqrt(num)

	res.send("numToRoot : " + num + " answer is : " + answer)
})