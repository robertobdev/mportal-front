import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
const Header = () => (
  <Container>
    <Logo>Mportal</Logo>
    <Link to="/login">
      <Button logIn>Login</Button>
    </Link>
    <Link to="/signup">
      <Button >Cadastrar</Button>
    </Link>
  </Container>
);
export default Header;

const Container = styled.div`
  margin: 20px 0 20px 0;
  display: flex;
  align-items: center;
  box-shadow: 0 2px #cccccc;
  padding:5px;
`;

const Logo = styled.span`
  flex: 1;
  font-size:2em;
  color: rgb(0,121,211);
`;

const Button = styled.button`
  background: ${ props => props.logIn ? "white"  : "rgb(0, 121, 211)" };
  color: ${ props => props.logIn ? "rgb(0, 121, 211)" : "white" };
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
  border: 2px solid rgb(0,121,211);
  border-radius: 3px;
  cursor:pointer;
`;
