import './App.css'
import AdminDashboard from './components/AdminDashboard'
import BlogPost from './components/BlogPost'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
function App() {
 

  return (
    <>
      
      <Router>
      
        <Routes>
         
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
        
    </Router>
     
    </>
  )
}

export default App
