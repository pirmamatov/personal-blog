import React from "react";
import { useNavigate } from "react-router";

import "./index.module.css"
 const Header = () => {
    const navigate = useNavigate();
    window.addEventListener("scroll", function(){
        const header = this.document.querySelector(".header")
        header.classList.toggle("active", this.window.scrollY > 100)
    })
    return(
         <>
    
    <header className="header">
        <div className="scontainer flex" >

            <div className="logo" onClick={()=>navigate("/")}>
                <h3> Ogabek's blog</h3>
            </div>
            <nav>
                <ul className="navigate-list">
                <li onClick={()=>navigate("/academy")}>Academy</li>   
                <li onClick={()=>navigate("/blog")}>Blog</li>  
                <li onClick={()=>navigate("/talks")}>Talks</li>  
                <li onClick={()=>navigate("/channel")}>Channel</li>  
                </ul>
            </nav>
        </div>
    </header>

    
    
    </>
    )
}
export default Header;