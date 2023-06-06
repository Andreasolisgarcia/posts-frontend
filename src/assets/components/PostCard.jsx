import React from 'react';

const PostCard = ({ post, dateFormater }) => {
  return (
    <div className='card'>
     <div className="header">
       
     </div>
      <div className="body">
      <h2>{post.title}</h2>
      <p>{post.content}</p>   
      {/* <p>Updated At: {dateFormater(post.updated_at)}</p> */}
      </div>

      <div className="footer">
        <p>
       {dateFormater(post.created_at)}
        </p>
        <button className='more-btn'> + </button>
      </div>
    </div>
  );
};

export default PostCard;