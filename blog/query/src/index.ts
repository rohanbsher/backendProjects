import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

interface PostProps {
	id: number,
	title: string
	comments?: { id: number, content: string }[]
}

interface CommentProps {
	id: number,
	content: string
	postId: number
}

interface Events {
	type: string,
	data: CommentProps | PostProps
}

const posts: PostProps[] = [{
	id: 0,
	title: 'Post 0',
	comments: [{id: 0, content: 'Comment 0'}]
}];

app.get('/posts', (req: Request, res: Response) => {
	res.send(posts);
	console.log("query service get post" + posts);

});

app.post('/events', (req: Request, res: Response) => {
	// res.send('You can post to this endpoint...')

	const event: Events = req.body as Events;

	if(event.type === 'PostCreated') {
		const { id, title, comments } = event.data as PostProps;
		posts.push({id, title, comments: []});
		console.log("post created in query")
		console.log(posts)
	}

	if(event.type === 'CommentCreated') {
		// if(e)
		console.log("comment created in query")
		// console.log(event.data)
		const { id, content, postId } = event.data as CommentProps;
		const post = posts[postId]
		if(post && post.comments){
			post.comments.push({id, content});
		}
	}

	res.send(posts);
});

app.listen(4002, () => {
	console.log('Listening on 4002');
});
 