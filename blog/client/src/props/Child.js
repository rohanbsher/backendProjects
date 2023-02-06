"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChildAsFC = exports.Child = void 0;
const Child = ({ color, onClick }) => {
    return <div>
	{color}
	<button onClick={onClick}>Click Me</button>
	</div>;
};
exports.Child = Child;
// Another way to define a function component in TypeScript
const ChildAsFC = ({ color, onClick }) => {
    return <div>
	{color}
	<button onClick={onClick}>Click Me</button>
	</div>;
};
exports.ChildAsFC = ChildAsFC;
