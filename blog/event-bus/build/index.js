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
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
// associate a middleware function with the app
app.use(body_parser_1.default.json());
app.post('/events', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const events = req.body;
    yield axios_1.default.post('http://localhost:4000/events', events).catch((err) => {
        console.log(err.message);
    });
    yield axios_1.default.post('http://localhost:4001/events', events).catch((err) => {
        console.log(err.message);
    });
    yield axios_1.default.post('http://localhost:4002/events', events).catch((err) => {
        console.log(err.message);
    });
    res.send({ status: 'OK' });
}));
app.listen(4005, () => {
    console.log('Listening on 4005');
});
