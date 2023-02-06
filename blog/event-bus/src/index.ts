import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const app = express();
// associate a middleware function with the app
app.use(bodyParser.json());

app.post('/events', async (req: Request, res: Response) => {
	const events = req.body;

	await axios.post('http://localhost:4000/events', events).catch((err) => {
		console.log(err.message);
	});

	await axios.post('http://localhost:4001/events', events).catch((err) => {
		console.log(err.message);
	});

	await axios.post('http://localhost:4002/events', events).catch((err) => {
		console.log(err.message);
	});

	res.send({ status: 'OK' });
});	

app.listen(4005, () => {
	console.log('Listening on 4005');
});