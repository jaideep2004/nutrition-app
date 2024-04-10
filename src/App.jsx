import './App.css'
import AdminDashboard from './components/AdminDashboard'
import BlogPost from './components/BlogPost'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Dashboard from './components/Dashboard';
function App() {
 

  return (
    <>
      
      <Router>
      
        <Routes>
         
        <Route path="/" element={<Dashboard />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
        
    </Router>
     
    </>
  )
}

export default App
