"use strict";
exports.__esModule = true;
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var app = (0, express_1["default"])();
app.use(body_parser_1["default"].urlencoded({ extended: true }));
app.get('/', function (req, res) {
});
app.post('/', function (req, res) {
    return res.send("Hello World");
});
app.listen(3000, function () {
    console.log('Server started on port 3000');
});
