import React from "react";
import Home from "./home";
import About from "./about"
import Contact from "./contact"
import Product from "./product"


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";


function App() {
  return  ( 
    <Router>
         <Routes>
              <Route path="/" element={ <Home/> } /> 
              <Route path="/about" element={ <About/> } /> 
              <Route path="/contact" element={<Contact/>}/> 
              <Route path="/product" element={<Product/>}/>         
          </Routes>  
          
    </Router>        
  )
}

export default App;
