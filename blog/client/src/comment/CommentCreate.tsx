import React, { useState } from 'react';
import axios from 'axios';

interface CommentCreateProps {
  postId: number;
}

const CommentCreate: React.FC<CommentCreateProps> = (
  postId: CommentCreateProps
) => {
  const [content, setContent] = useState('');
  //   let postId = post.id;

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // don't let the browser submit the form
    event.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });

    setContent('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
