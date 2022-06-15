import React from "react";
import Categories from "../Components/Categories";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import NewsLetter from "../Components/NewsLetter";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Categories></Categories>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </div>
  );
};

export default Home;
