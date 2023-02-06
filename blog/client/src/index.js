"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_dom_1 = __importDefault(require("react-dom"));
// import GuestList from './state/GuestList';
// import UserSearch from './state/UserSearch';
const PostCreate_1 = __importDefault(require("./post/PostCreate"));
const PostList_1 = __importDefault(require("./post/PostList"));
const App = () => {
    return (<div className='container'>
		{/* <GuestList /> */}
		{/* <UserSearch /> */}
		<h1>Create Post</h1>
		<PostCreate_1.default />
		<hr />
		<h1>Posts</h1>
		<PostList_1.default />
    </div>);
};
react_dom_1.default.render(<App />, document.querySelector('#root'));
