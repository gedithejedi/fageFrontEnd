import React, { useEffect, useState } from 'react';
import useFetch from '../../useFetch';
import SendPost from '../SendPost/SendPost';
import PostFeed from '../PostFeed/PostFeed';
import './feed.css';

const Feed = () => {

	const {data: posts, isLoading, error} = useFetch("http://localhost:3001/posts")

	return (
		<div className="section-feed content-section">
			<SendPost />
			{error && <div>{error}</div>}
			{isLoading && <div>Loading...</div>}
			{posts.length > 0 && <PostFeed posts={posts}></PostFeed>}
		</div>
	);

};

export default Feed;
