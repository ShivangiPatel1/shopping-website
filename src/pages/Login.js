import styled from "styled-components"

const Container = styled.div`
    
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
                <link>Forget Password</link>
                <link>Create a new Account</link>

            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login