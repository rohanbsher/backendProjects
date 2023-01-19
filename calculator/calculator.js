const express = require('express');
const app = express();

const bodyParser = require('body-parser')
// extended allows us to post nested object 
// this code is written everytime using body parser
app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, function() {
	console.log('Port 3000 is running');
})


app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

app.get('/bmi', (req, res) => {
	res.sendFile(__dirname + '/bmiCalculator.html')
})

app.post('/', function(req, res) {
	// console.log(req.body)
	let val1 = Number(req.body.n1)
	let val2 = Number(req.body.n2)
	let ans = val1 + val2
	res.send("Addition is " + ans)
})

app.post('/bmi', (req, res) => {
	let weight = parseFloat(req.body.weight)
	let height = parseFloat(req.body.height)
	let bmi = weight / (height * height)

	res.send("weight : " + weight + " height : "+height+ " bmi is : " + bmi)

})


