import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentCreate from '../comment/CommentCreate';
import CommentList from '../comment/CommentList';

interface Post {
  id: number;
  title: string;
}

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4000/posts');
    setPosts(res.data);
  };

  // Empty function and critically an empty array as the second argument
  // that tells react to only run this once
  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = posts.map((post) => {
    return (
      <div
        className="card"
        style={{ width: '30%', marginBottom: '20px' }}
        key={post.id}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
          <h3>{post.id}</h3>
          <CommentList postId={post.id} />
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};

export default PostList;
