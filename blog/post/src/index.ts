import express, { Request, Response } from 'express';
import { randomBytes } from 'crypto';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

interface PostProps {
	id: number,
	title: string
}

const posts: PostProps[] = [{
	id: 0,
	title: 'Post 0'
}, {
	id: 1,
	title: 'Post 1'
}];


app.get('/posts', (req: Request, res: Response) => {
	res.send(posts);
});

app.post('/posts', (req: Request, res: Response) => {

	const id = Math.floor(Math.random()*1000); // hexadecimal number of 4 bytes
	const { title } = req.body; //as PostProps;

	posts.push({ id, title });

	let store: PostProps = {} as PostProps;
	const addedPost = posts.filter((post) => {
		if (post.id === id) {
			store = post;
		}//
	});

	res.status(201).send(store);

});

app.listen(4000, () => {
	console.log('Listening on port 4000');
});