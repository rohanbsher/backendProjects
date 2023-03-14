/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Comment {
	  postId: number;
	  content?: string;
}

const CommentList: React.FC<Comment> = (postId: Comment) => {
  const [comments, setComments] = useState<Comment[]>([]);

  const fetchData = async () => {
    const res = await axios.get(
      `http://posts.com/posts/${postId}/comments`
    );

    setComments(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderedComments = comments.map((comment) => {
    return <li key={comment.postId}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
