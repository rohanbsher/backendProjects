"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
const posts = [{
        id: 0,
        title: 'Post 0'
    }, {
        id: 1,
        title: 'Post 1'
    }];
app.get('/posts', (req, res) => {
    res.send(posts);
});
app.post('/posts', (req, res) => {
    const id = Math.floor(Math.random() * 1000); // hexadecimal number of 4 bytes
    const { title } = req.body; //as PostProps;
    posts.push({ id, title });
    let store = {};
    const addedPost = posts.filter((post) => {
        if (post.id === id) {
            store = post;
        } //
    });
    res.status(201).send(store);
});
app.listen(4000, () => {
    console.log('Listening on port 4000');
});
