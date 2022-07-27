import React from "react";
import Categories from "../Components/Categories";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import NewsLetter from "../Components/NewsLetter";
import ProductsSection from "../Components/ProductsSection";
import DealRibbon from "../Components/DealRibbon";
import Slider from "../Components/Slider"
import { useSelector } from "react-redux";
const Home = () => {
  const user = useSelector((state)=>state.user.currentUser);
  return (
    <div>
      <Navbar></Navbar>
      <DealRibbon/>
      <Slider/>
      <Categories></Categories>
      {user ? <ProductsSection/> :null}
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </div>
  );
};

export default Home;
