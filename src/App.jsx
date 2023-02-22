import React from "react";
import { Route, Routes } from "react-router";
import Category from "./components/category/Category";
import Header from "./components/Layout/Header";
import Academy from "./pages/Academy/Academy"
import Blog from "./pages/Blog/Blog";
import Channel from "./pages/Channel/Channel";
import Talks from "./pages/Talks/Talks";

 
 const App = () => {
    return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Category/>}/>
        <Route path="/academy" element={<Academy />}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/talks" element ={<Talks/>}/>
        <Route path="/channel" element = {<Channel/>} />
       
      </Routes>

    </>
    )
}

export default App