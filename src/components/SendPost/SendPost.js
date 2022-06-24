import React, { useEffect, useState } from 'react';
import './SendPost.css';

const SendPost = () => {
	const [draft, setDraft]  = useState(null);

	const handleDraft = (e) => {
		console.log(e.target.value);
		setDraft(e.target.value)
	}

	return (
		<div className="send-post-box">
			<div className="send-post-box_container">
				<div className="send-post-box_img">
					<img src="https://pbs.twimg.com/profile_images/1477432716912115716/Wkss-kMQ_400x400.jpg" />
				</div>
				<div className='send-post-box-post_content'>
					<div className="send-post-box_editor">
						<textarea
							className="send-post-box_editor_textarea"
							type="text"
							name="draft"
							value={draft}
							onChange={(e) => handleDraft(e)}
							placeholder="What's happening?"
						/>
					</div>
					<div className="send-post-box_buttons">
						<a href="#" className="post_btn">
							Post
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SendPost;
