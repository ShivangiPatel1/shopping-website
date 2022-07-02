import React from "react";
import Categories from "../Components/Categories";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import NewsLetter from "../Components/NewsLetter";
import ProductsSection from "../Components/ProductsSection";
import DealRibbon from "../Components/DealRibbon";
import Slider from "../Components/Slider  "

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <DealRibbon/>
      <Slider/>
      <Categories></Categories>
      <ProductsSection/>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </div>
  );
};

export default Home;
