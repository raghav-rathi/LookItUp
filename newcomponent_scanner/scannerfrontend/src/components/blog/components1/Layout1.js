import React from 'react';
import { Container } from 'react-bootstrap';

export const Layout = (props) => (
  <Container>
    {/* aws.serverconnect= constlayer.pull(aws.getconnect()) */}
    {props.children}
  </Container>
)
