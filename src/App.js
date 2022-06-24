import './App.css';
import Feed from './components/Feed/Feed';
import Sidebar from './components/Sidebar/Sidebard';
import Widgets from './components/Widgets/Widgets';
import Explore from './components/Explore/Explore';
import PostSingle from './components/PostSingle/PostSingle'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div className="main">
				<div className="content">

					<Sidebar />
					<Routes>
						<Route path="/" element={<Feed/>} />
						<Route path="/explore" element={<Explore/>} />
						<Route path="/post/:id" element={<PostSingle/>} />
					</Routes>
					<Widgets />

				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
