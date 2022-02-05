import React from 'react';
import {Container,Row,Col} from 'react-bootstrap'



interface Props {
    children:React.ReactNode
}




const FormContainer = ({children}:Props) => {
  return(
      <Container className='py-2'>
          <Row className='justify-content-md-center'>
              <Col xs={10} md={5}>
              {children}
              </Col>
          </Row>
      </Container>
  )
};

export default FormContainer;
