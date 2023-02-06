import ReactDOM from 'react-dom';
// import GuestList from './state/GuestList';
// import UserSearch from './state/UserSearch';
import PostCreate from './post/PostCreate';
import PostList from './post/PostList';

const App = () => {
  return (
    <div className='container'>
		{/* <GuestList /> */}
		{/* <UserSearch /> */}
		<h1>Create Post</h1>
		<PostCreate />
		<hr />
		<h1>Posts</h1>
		<PostList />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
