import React from "react";
import "./Category.css"
import profile from '../assets/profile.png'
import {FaYoutube} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaApple} from "react-icons/fa"
import {FaTelegram} from "react-icons/fa"
// import { Button } from "@material-tailwind/react";
 const Category = () => {
    return (
        <>
         <section className="category">
          
      <div className="up">
      <div className="rasm">
      <img src={profile} alt="profile" />
          
      </div>
      <div className="past">
      <h1>Ogabek Pirmamatov</h1>
          <p>Software Engineer</p>
         <div className="icons">
         <FaYoutube/>
         <FaGithub/>
         <FaApple/>
         <FaTelegram/>
         </div>
      </div>
      </div>
         <p className="p-text">I write about non-technical stuff in the technical world.</p>
        
        <div className="btns">
            <button className="one-btn">Read Blog</button>
            <button className="two-btn">About Me</button>
        </div>



         </section>
         
        </>
    )
}
export default Category
