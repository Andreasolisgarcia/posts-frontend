import React from 'react';
import PostCard from '../components/PostCard';


const Posts = ({ posts, dateFormater }) => {
    return (
        <div className="container">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} dateFormater = {dateFormater}/>
        ))}
      </div>
    );
};

export default Posts;