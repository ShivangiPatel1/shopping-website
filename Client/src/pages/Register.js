import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #edc601;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  background-color: white;
  padding: 20px;
  ${mobile({ width: "75%" })}
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 30px 0px 0px;
`;

const Aggrement = styled.span`
  margin: 20px 0;
`;
const Button = styled.button`
  width: 40%;
  padding: 15px 20px;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Register = () => {
    const [userName, setuserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setemail] = useState("");
    let navigate = useNavigate();
    const RegisterUser = (e) => {
        e.preventDefault();
        console.log(userName)
        console.log(email)
        console.log(password)
        fetch("https://cpsc2650project.herokuapp.com/api/auth/register/", {
          // Adding method type
          method: "POST",
          // Adding body or contents to send
          body: JSON.stringify({
            "username":userName,
            "email":email,
            "password":password
          }),
          // Adding headers to the request
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          // Converting to JSON
          .then((response) => response.json())
          navigate("/login", { replace: true });
    }
  return (
    <Container>
      <Wrapper>
        <Title>Create an Account</Title>
        <Form  method="post" onSubmit={(e)=> RegisterUser(e)}>
          <Input placeholder="Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="User Name" onChange={(e)=>setuserName(e.target.value)}/>
          <Input placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)} />
          <Input placeholder="Enter Email"  onChange={(e)=>setemail(e.target.value)} />
          <Aggrement>
            By creating a password, you are consent to the privacy policy
          </Aggrement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );

}

export default Register;
