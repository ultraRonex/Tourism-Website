import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import VisitorPage from './pages/VisitorPage';
import GuidePage from './pages/GuidePage';
import BloggerPage from './pages/BloggerPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import BlogDetail from './pages/BlogDetail';
import PlaceDetail from './pages/PlaceDetail'; 
// import BloggerProfile from './pages/BloggerPage';
// import AvailablePlace from './components/AvailablePlace'; // Uncomment if needed
import { ToastContainer } from 'react-toastify';
// import BlogDetails from "./pages/BlogDetails"; // REMOVE this if not used
import HeritageDetail from "./pages/HeritageDetail";
import CultureDetail from "./pages/CultureDetail";
import AdventureDetail from "./pages/AdventureDetail";



import './App.css';


import AdminDashboard from './pages/AdminDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/visitor" element={<VisitorPage />} />
        <Route path="/guide" element={<GuidePage />} />
        <Route path="/blogger" element={<BloggerPage />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        {/* <Route path="/add-blog" element={<AddBlog />} /> */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} /> 
        <Route path="/place/:id" element={<PlaceDetail />} />    
        <Route path="/explore/heritage" element={<HeritageDetail />} />
        <Route path="/explore/culture" element={<CultureDetail />} />
        <Route path="/explore/adventure" element={<AdventureDetail />} />  
      </Routes>
      <ToastContainer />

    </Router>
  );
}

export default App;
