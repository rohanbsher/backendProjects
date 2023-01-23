import express from 'express';
import bodyParser from 'body-parser';
import { randomBytes } from 'crypto';

const app = express();
app.use(bodyParser.json());

const posts = {};

app.get('/posts', (req, res) => {
	res.send(posts);
});

app.post('/posts', (req, res) => {
	const id = randomBytes(4).toString('hex');
	const { title } = req.body;

	posts[id] = {
		id, title
	};
	
	res.send(posts[id]);

});

app.listen(4000, () => {
	console.log('Listening on port 4000');
});