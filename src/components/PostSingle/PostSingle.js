import React from 'react';
import {useParams} from 'react-router-dom';
import './PostSingle.css';

const PostSingle = (props) => {

	const { id } = useParams()

	return (
	
		<div className="posts-single section-feed content-section">
			<h1>Single Post page with the comments id = {id}</h1>
		</div>

	);

};

export default PostSingle;