import React from 'react';
import './PostFeed.css';
import {  Link} from 'react-router-dom'

const PostFeed = (props) => {

	return (
	
		<div className="posts-feed">
			{ props.posts.map(postItem => (
				<Link to={`/post/${postItem.id}`} >
					<div className='post-feed_post' key={postItem.id}>
						<p>{postItem.post}</p>
					</div>
				</Link>
			))} 
		</div>

	);

};

export default PostFeed;