import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import ProductCards from "./ProductCards";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ProductsSection = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `https://cpsc2650project.herokuapp.com/api/products?category=${cat}`
            : "https://cpsc2650project.herokuapp.com/api/products"
        );
      setProducts(res.data)
      } catch (e) {
        console.log(e);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(()=>{
    cat && setFilteredProducts(
      products.filter(item=>Object.entries(filters).every(([key,value])=>
        item[key].includes(value)
      ))
    )
  },[products,filters])


  useEffect(()=>{
    if(sort ==="newest"){
      setFilteredProducts(prev=>
          [...prev].sort((a,b)=> a.createdAt - b.createdAt)
      );
    }else if(sort ==="asc"){
      setFilteredProducts(prev=>
        [...prev].sort((a,b)=> a.price - b.price)
      );
    }else{
      setFilteredProducts(prev=>
        [...prev].sort((a,b)=> b.price - a.price)
      );    
    }

  },[sort])

  return (
    <Container>
      {cat ? filteredProducts.map((item) => (
        <ProductCards item={item} key={item.id}></ProductCards>
      )) : products
           .slice(0,8)
           .map((item) => (
        <ProductCards item={item} key={item.id}></ProductCards>
      ))}
    </Container>
  );
};

export default ProductsSection;
