import React from "react";
import Badge from '@mui/material/Badge';
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';



const Wrapper = styled.div`
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  align-items:Center;
  background-color:#e64398;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
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
`
//Center fof the Navbar
const Center = styled.div`
  flex: 1;
  text-align:Center
`;
const Logo = styled.h1`
font-weight:bold
`
const Right = styled.div`
  flex: 1;
  display:flex ;
  align-items:Center;
  justify-content:flex-end
`;
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;

`

const Navbar = () => {
  return (
  
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input/>
            <SearchIcon style={{color:"white",fontSize:22}}/>
          </SearchContainer>
        </Left>
        <Center><Logo>SHOPPERS STOP</Logo></Center>
        <Right>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGN IN</MenuItem>
            <MenuItem>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlinedIcon/>
                </Badge>
            </MenuItem>
        </Right>
      </Wrapper>
  
  );
};

export default Navbar;
