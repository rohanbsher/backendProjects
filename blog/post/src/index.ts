import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import axios from 'axios';

const app = express();
app.use(bodyParser.json());
app.use(cors());

interface PostProps {
	id: number,
	title: string
}

const posts: PostProps[] = [{
	id: 0,
	title: 'Post 0'
}];


app.get('/posts', (req: Request, res: Response) => {
	res.send(posts);
});

app.post('/posts/create', async (req: Request, res: Response) => {

	const id = Math.floor(Math.random() * 1000); // hexadecimal number of 4 bytes
	const { title } = req.body as PostProps;

	posts.push({ id, title });

	let store: PostProps = {} as PostProps;
	posts.filter((post) => {
		if (post.id === id) {
			store = post;
		}
	});

	await axios.post('http://event-bus-srv:4005/events', {
		type: 'PostCreated',
		data: {
			id,
			title,
		}
	}).catch((err) => {
		console.log(err.message);
	});

	res.status(201).send(store);

});

app.post('/events', (req: Request, res: Response) => {
	console.log('Received Event Post', req.body.type);
	res.send({});
});

app.listen(4000, () => {
	console.log('V21');
	console.log('Listening on port at 4000');
});