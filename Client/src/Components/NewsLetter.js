import React from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #b39bc8;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const SubTitle = styled.h3`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({textAlign:"center"})}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;


const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  border: 1px solid lightgray;
  ${mobile({width:"80%"})}
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>NewsLetter</Title>
      <SubTitle>Get Timely updates from your favorite products</SubTitle>
      <InputContainer>
        {" "}
        <Input placeholder="Your email"></Input>
        <Button>
          <SendIcon></SendIcon>
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
