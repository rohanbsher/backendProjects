"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const react_1 = __importStar(require("react"));
const axios_1 = __importDefault(require("axios"));
const CommentCreate_1 = __importDefault(require("../comment/CommentCreate"));
const CommentList_1 = __importDefault(require("../comment/CommentList"));
const PostList = () => {
    const [posts, setPosts] = (0, react_1.useState)([]);
    const fetchPosts = () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield axios_1.default.get('http://localhost:4000/posts');
        setPosts(res.data);
    });
    // Empty function and critically an empty array as the second argument
    // that tells react to only run this once
    (0, react_1.useEffect)(() => {
        fetchPosts();
    }, []);
    const renderedPosts = posts.map((post) => {
        return (<div className="card" style={{ width: '30%', marginBottom: '20px' }} key={post.id}>
        <div className="card-body">
          <h3>{post.title}</h3>
          <h3>{post.id}</h3>
          <CommentList_1.default postId={post.id}/>
          <CommentCreate_1.default postId={post.id}/>
        </div>
      </div>);
    });
    return (<div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>);
};
exports.default = PostList;
