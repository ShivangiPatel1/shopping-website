import React ,{useState,useEffect} from 'react'
import styled from "styled-components"
import {popularProducts} from "../data"
import ProductCards from './ProductCards'
import axios from "axios"

const Container = styled.div`
padding:20px;
display:flex;
flex-wrap: wrap;
justify-content: space-between;`

const ProductsSection = ({cat,filters,sort}) => {
  const [products,setProducts]=useState([]);
  const [filteredProducts,setFilteredProducts]=useState([])
  useEffect(() => {
    
  const getProducts = async ()=>{
    try{
  const res = await axios.get(cat ? `http://localhost:8080/api/products?category=${cat}`:"http://localhost:8080/api/products")
  console.log(res)
    } catch(e){
console.log(e)
    }
  }
    getProducts()
  }, [])
  
  return (
   <Container>
    {popularProducts.map((item)=>
<ProductCards item={item} key={item.id}></ProductCards>
    )}
   </Container>
  )
}

export default ProductsSection