import React from 'react'
import styled from "styled-components"
import {popularProducts} from "../data"
import ProductCards from './ProductCards'

const Container = styled.div`
padding:20px;
display:flex;
flex-wrap: wrap;
justify-content: space-between;`

const ProductsSection = () => {
  return (
   <Container>
    {popularProducts.map((item)=>
<ProductCards item={item} key={item.id}></ProductCards>
    )}
   </Container>
  )
}

export default ProductsSection