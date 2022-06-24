import React from 'react';
import {  Link} from 'react-router-dom'
import './sidebar.css';

const Sidebar = () => {
	return (
		<div className="section-sidebar content-section">
			<div className='sidebar-menu'>
				<Link to="/">Home</Link>
				<Link to="/explore">Explore</Link>
			</div>
		</div>
	) ;
};

export default Sidebar;
