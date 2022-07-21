import React from "react";
import Badge from '@mui/material/Badge';
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from "../responsive";
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";


const Container = styled.div`
  height:60px;
  ${mobile({height:"50px;"})}
`

const Wrapper = styled.div`
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  align-items:Center;
  background-color:#e64398;
  ${mobile({padding:"10px 0px"})}
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display:"none"})}
`;
// Left side of the Navbar
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: Center;
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: Center;
  margin-left:5px;
  padding:5px ;
  color:white;
`;
const Input = styled.input`
border:none;
height:20px;
${mobile({width:"50px"})}
`
//Center fof the Navbar
const Center = styled.div`
  flex: 1;
  text-align:Center
`;
const Logo = styled.h1`
font-weight:bold;
${mobile({fontSize:"24px"})}
`
const Right = styled.div`
  flex: 1;
  display:flex ;
  align-items:Center;
  justify-content:flex-end;
  ${mobile({flex:2, justifyContent:"center"})}
`;
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
${mobile({fontSize:"12px", marginLeft:"10px"})}
`

const Navbar = () => {

  const quantity = useSelector(state => state.cart.quantity)

  return (
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="search"/>
            <SearchIcon style={{color:"white",fontSize:22}}/>
          </SearchContainer>
        </Left>
        <Center><Logo>SHOPPERS STOP</Logo></Center>
        <Right>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGN IN</MenuItem>

            <Link to="/cart">
                <MenuItem>
                    <Badge badgeContent={quantity} color="primary">
                        <ShoppingCartOutlinedIcon/>
                    </Badge>
                </MenuItem>
            </Link>
        </Right>
      </Wrapper>
  
  );
};

export default Navbar;
