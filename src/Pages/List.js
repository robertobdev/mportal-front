import React, { Component } from "react";
import { TextField, Button } from '@material-ui/core';
import styled from 'styled-components';
import '../App.css';
class LogIn extends Component {

  render() {
    const style = {btn: `App-Btn-SignUp`}
    return (
      <Container>
        <Header>
          <h2>Login</h2>
        </Header>
        <Content>
          
        </Content>
        
      </Container>
    );
  }
}

const Container = styled.div`
  border:1px solid #cccccc;
  display:flex;
  margin: 0 auto;
  width: 100%;
  max-width: 700px;
  justify-content: space-between;
  flex-direction: column;
`;

const Content = styled.div`
  justify-content: space-between;
  flex-direction: column;
  display:flex;
  margin:30px;
`;

const Header = styled.div`
  background:#F7F7F7;
  border-bottom: 1px solid #cccccc;
  padding-left:16px;
`;
export default LogIn;


