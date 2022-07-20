import styled from "styled-components"
// import { mobile } from "../responsive"

const Container = styled.div`

    width: 100vw;
    height: 100vh;
    background-color: #edc601;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 25%;
    background-color:  white;
    padding: 20px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300 ;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
`
const Button = styled.button`
    width: 40%;
    padding: 15px 20px;
    border: none;
    background-color: teal;
    color: white;
    cursor:pointer;
    margin-bottom: 10px;
`

const Link = styled.a`
  margin:5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;

`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign In</Title>
            <Form>
                <Input placeholder="User name"/>
                <Input placeholder="Password"/>
                <Button>Login</Button>

                <Link>Forget Password</Link>
                <Link>Create a new Account</Link>

                <link>Forget Password</link>
                <link>Create a new Account</link>

            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login