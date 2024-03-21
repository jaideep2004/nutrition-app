import "./App.css";
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import Main from "./components/Main/Main";
import LatestBlogs from "./components/Main/LatestBlogs";
import BlogPost from "./components/Main/BlogPost";
import Footer from "./components/Footer/Footer";
import Header2 from "./components/Header/Header2";

function App() {
	return (
		<>
			

			<BrowserRouter>
			
				
				<Header2/>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/blog/:id' element={<BlogPost />} />
				</Routes>
				<Footer/>
			</BrowserRouter>
		</>
	);
}

export default App;
