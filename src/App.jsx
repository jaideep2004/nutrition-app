import "./App.css";
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import Main from "./components/Main/Main";
import LatestBlogs from "./components/Main/LatestBlogs";
import BlogPost from "./components/Main/BlogPost";
import Footer from "./components/Footer/Footer";
import Header2 from "./components/Header/Header2";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Main2 from "./components/Main/Main2";
import Podcast from "./components/Podcast/Podcast";
import Signup from "./components/Signup/Signup";
import Success from "./components/Success";
import Fail from "./components/Fail";
import DietPlans from "./components/DietPlans/DietPlans";

function App() {
	return (
		<>
			

			<BrowserRouter>
			
				
				<Header2/>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/blog/:id' element={<BlogPost />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/success' element={<Success />} />
					<Route path='/fail' element={<Fail />} />
					<Route path='/dietplans' element={<DietPlans />} />

				</Routes>
				
				
				<Footer/>
			</BrowserRouter>
		</>
	);
}

export default App;
