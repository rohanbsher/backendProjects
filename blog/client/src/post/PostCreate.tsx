import React, { useState } from 'react';
import axios from 'axios';

const PostCreate: React.FC = () => {
  const [title, setTitle] = useState('');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // don't let the browser submit the form
    event.preventDefault();

    await axios.post('http://posts.com/posts/create', {
	  title,
	});

	setTitle('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            // classic two way binding
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;

// export default () => {
//   return (
//     <div>
//       <form>
//         <div className="form-group">
//           <label>Title</label>
//           <input className="form-control" />
//         </div>
//         <button className="btn btn-primary">Submit</button>
//       </form>
//     </div>
//   );
// };
