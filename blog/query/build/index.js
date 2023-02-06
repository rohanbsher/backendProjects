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
app.get('/posts', (req, res) => {
    res.send('Hi there!');
});
app.post('/events', (req, res) => {
    res.send('You can post to this endpoint...');
});
app.listen(4003, () => {
    console.log('Listening on 4003');
});
