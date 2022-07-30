import React from "react";
import styled from "styled-components";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import { Route, Link, Routes , Navigate} from "react-router-dom";


const Circle = styled.div`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
const Info = styled.div`
opacity:0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(0,0,0,0.5);
  display: flex;
  z-index: 3;
  align-items: center;
  justify-content: center;
   transition: all 0.5s ease ; 
   cursor:pointer ;
`;
const Icon = styled.div`

  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
const Container = styled.div`
  display: flex;
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
opacity:1 ;
  }
`;
const ProductCards = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} alt="product image"/>
      <Info>
        <Icon>
          <AddShoppingCartIcon />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
          <SearchIcon />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderIcon />
        </Icon>
      </Info>
    </Container>
  );
};

export default ProductCards;
