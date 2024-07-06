import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Home/HomePage.jsx";
import MenuPage from "./Menu/MenuPage.jsx";
import PlansPage from "./Plans/PlansPage.jsx";
import BlogPage from "./Blog/BlogPage.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/plans" element={<PlansPage/>}/>
        <Route path="/blog" element={<BlogPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
