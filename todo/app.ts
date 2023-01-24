import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {

});

app.post('/', (req, res) => {
	return res.send("Hello World");
});

app.listen(3000, () => {
	console.log('Server started on port 3000');
});

