import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/register" element = {<Register/>}/>
          <Route path = "/login" element = {<Login/>}/>

      </Routes>
    </>
  );
}

export default App;
