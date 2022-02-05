import {SyntheticEvent, useState} from 'react';
import {Form,Button} from 'react-bootstrap'
import { RouteComponentProps } from 'react-router';
import FormContainer from '../components/FormContainer'

interface Props {
  history: RouteComponentProps['history']
}


const LoginScreen = ({history}: Props) => {

const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const submitHandler = async(e:SyntheticEvent) =>{

  e.preventDefault()
  await fetch('https://localhost:8081/api/login',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      credentials:'include',
      body:JSON.stringify({
        email,
        password
      }),
    })

    history.push
}
  return (
    <FormContainer>
      <h1>Login </h1>
    <Form onSubmit={submitHandler}>
  <Form.Group className="my-3" controlId="email">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email address"    
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    />
  
  </Form.Group>

  <Form.Group className="my-3" controlId="password">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" 
     value={password}
     onChange={(e)=>setPassword(e.target.value)}
    />
  </Form.Group>
  
  <Button className='my-3' variant="primary" type="submit">
    Submit
  </Button>
</Form>
</FormContainer>
  )
};

export default LoginScreen;
