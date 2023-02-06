"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Child_1 = require("./Child");
const Parent = () => {
    return (<Child_1.ChildAsFC color="red" onClick={() => {
            console.log('Clicked');
        }}></Child_1.ChildAsFC>);
};
exports.default = Parent;
