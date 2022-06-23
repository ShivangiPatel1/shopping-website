import React from "react";
import Categories from "../Components/Categories";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import NewsLetter from "../Components/NewsLetter";
import ProductsSection from "../Components/ProductsSection";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Categories></Categories>
      <ProductsSection/>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </div>
  );
};

export default Home;
