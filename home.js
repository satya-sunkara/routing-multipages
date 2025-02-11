import React from "react";
import { Link } from "react-router-dom";




const Home = () => {
    return (
        <>
            
            <h2 className="name">Home</h2>
            <div className="name">
            <Link to="/About">About</Link>
            <Link to="/Contact">contact</Link>
            <Link to="/product">product</Link>
             </div>

            

        </>
       
    )


}

export default Home
