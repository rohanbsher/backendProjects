"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
const posts = [{
        id: 0,
        title: 'Post 0',
        comments: [{ id: 0, content: 'Comment 0' }]
    }];
app.get('/posts', (req, res) => {
    res.send(posts);
    console.log("query service get post" + posts);
});
app.post('/events', (req, res) => {
    // res.send('You can post to this endpoint...')
    const event = req.body;
    if (event.type === 'PostCreated') {
        const { id, title, comments } = event.data;
        posts.push({ id, title, comments: [] });
        console.log("post created in query");
        console.log(posts);
    }
    if (event.type === 'CommentCreated') {
        // if(e)
        console.log("comment created in query");
        // console.log(event.data)
        const { id, content, postId } = event.data;
        const post = posts[postId];
        if (post && post.comments) {
            post.comments.push({ id, content });
        }
    }
    res.send(posts);
});
app.listen(4002, () => {
    console.log('Listening on 4002');
});
