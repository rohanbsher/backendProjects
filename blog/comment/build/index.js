"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
const commentsByPostId = {};
app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsByPostId[req.params.id] || []);
});
app.post('/posts/:id/comments', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const commentId = Math.floor(Math.random() * 100000);
    const { content } = req.body;
    const comments = commentsByPostId[req.params.id] || [];
    comments.push({ id: commentId, content });
    commentsByPostId[req.params.id] = comments;
    yield axios_1.default.post('http://localhost:4005/events', {
        type: 'CommentCreated',
        data: {
            id: commentId,
            content: content,
            postId: req.params.id
        }
    }).catch((err) => {
        console.log(err.message);
    });
    console.log("Comment Created " + commentId + " content : " + content + " post id : " + req.params.id);
    res.status(201).send(comments);
}));
app.post('/events', (req, res) => {
    console.log('Received Event Comment', req.body.type);
    res.send({});
});
app.listen(4001, () => {
    console.log('Listening on 4001');
});
