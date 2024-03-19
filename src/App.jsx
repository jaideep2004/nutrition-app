import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import Main from "./components/Main/Main";
import LatestBlogs from "./components/Main/LatestBlogs";
import BlogPost from "./components/Main/BlogPost";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<>
			

			<BrowserRouter>
			
        <Header />
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
