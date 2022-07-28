import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #edc601;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 40%;
    background-color:  white;
    padding: 20px;
    ${mobile({width:"75%"})}
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap ;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300 ;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 30px 0px 0px;
`

const Aggrement = styled.span`
    margin:20px 0;
`
const Button = styled.button`
    width: 40%;
    padding: 15px 20px;
    border: none;
    background-color: teal;
    color: white;
    cursor:pointer;
`



const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create an Account</Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="Last name"/>
                <Input placeholder="User name"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm password"/>
                <Aggrement>By creating a password, you are consent to the privacy policy</Aggrement>
                <Button>Create</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register