import React,{useState} from 'react'
import {useLocation} from "react-router-dom"
import styled from "styled-components"
import Navbar from "../Components/Navbar"
import DealRibbon from '../Components/DealRibbon'
import NewsLetter from '../Components/NewsLetter'
import Footer from '../Components/Footer'
import { mobile } from '../responsive'
import ProductsSection from '../Components/ProductsSection'
const Container = styled.div``;


const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({width:"0px 20px", display:"flex", flexDirection:"column"})}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({marginRight:"0px"})}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({margin:"10px 0px"})}
`;
const Option = styled.option``;

const AllProduct = () => {
  const location = useLocation();
  const [filters,setFilters]=useState({})
  const [sort,setSort]=useState({})
  let cat = location.pathname.split("/")[2]
  const handleFilter =(e)=>{
    const value = e.target.value;
    setFilters({
      ...filters,
     [e.target.name]:value 
    })
  }
  
  return (
    <Container>
    <Navbar />
   <DealRibbon/>
    <Title>{cat}</Title>
    <FilterContainer>
      <Filter>
        <FilterText>Filter Products:</FilterText>
        <Select name={"color"} onChange={(e)=>handleFilter(e)}>
          <Option disabled selected>
            Color
          </Option>
          <Option>White</Option>
          <Option>Black</Option>
          <Option>Red</Option>
          <Option>Blue</Option>
          <Option>Yellow</Option>
          <Option>Green</Option>
        </Select>
        <Select name={"size"} onChange={(e)=>handleFilter(e)}>
          <Option disabled selected>
            Size
          </Option>
          <Option>XS</Option>
          <Option>S</Option>
          <Option>M</Option>
          <Option>L</Option>
          <Option>XL</Option>
        </Select>
      </Filter>
      <Filter>
        <FilterText>Sort Products:</FilterText>
        <Select onChange={(e)=>setSort(e.target.value)}>
          <Option value="newest">Newest</Option>
          <Option value="asc">Price (asc)</Option>
          <Option value="desc">Price (desc)</Option>
        </Select>
      </Filter>
    </FilterContainer>
    <ProductsSection cat={cat} filters={filters} sort={sort}/>
    <NewsLetter />
    <Footer />
  </Container>
  )
}

export default AllProduct