import React from "react";
import Categories from "../Components/Categories";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import NewsLetter from "../Components/NewsLetter";
import ProductsSection from "../Components/ProductsSection";
import DealRibbon from "../Components/DealRibbon";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <DealRibbon/>
      <Categories></Categories>
      <ProductsSection/>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </div>
  );
};

export default Home;
