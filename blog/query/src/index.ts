import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/posts', (req: Request, res: Response) => {
	res.send('Hi there!');
});

app.post('/events', (req: Request, res: Response) => {
	res.send('You can post to this endpoint...')
});

app.listen(4003, () => {
	console.log('Listening on 4003');
});
 