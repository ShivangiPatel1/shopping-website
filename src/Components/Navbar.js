import React from "react";
import Badge from '@mui/material/Badge';
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items:Center
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
  border: 1px solid lightgray;
  display: flex;
  align-items: Center;
  margin-left:25px;
  padding:5px ;
`;
const Input = styled.input`
border:none;
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
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input/>
            <SearchIcon style={{color:"gray",fontSize:16}}/>
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
    </Container>
  );
};

export default Navbar;
