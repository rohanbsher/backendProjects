import express, { Request, Response} from 'express';
import bodyParser from 'body-parser';
import { randomBytes } from 'crypto';
import cors from 'cors';
import axios from 'axios';

const app = express();
app.use(bodyParser.json());
app.use(cors());

interface CommentProps {
	id: number,
	content: string
}

const commentsByPostId: {[key: string]: CommentProps[]} = {};

app.get('/posts/:id/comments', (req: Request, res: Response) => {

	res.send(commentsByPostId[req.params.id] || []);

});

app.post('/posts/:id/comments', async (req: Request, res: Response) => {
	const commentId = Math.floor(Math.random()*100000);
	const { content } = req.body as CommentProps;

	const comments: CommentProps[] = commentsByPostId[req.params.id] || [];

	comments.push({ id: commentId, content });

	commentsByPostId[req.params.id] = comments;

	await axios.post('http://localhost:4005/events', {
		type: 'CommentCreated',
		data: {
			id: commentId,
			content,
			postId: req.params.id
		}
	}).catch((err) => {
		console.log(err.message);
	});

	res.status(201).send(comments);

});


app.post('/events', (req: Request, res: Response) => {
	console.log('Received Event Comment', req.body.type);
	res.send({});
})

app.listen(4001, () => {
	console.log('Listening on 4001');
});