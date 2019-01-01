import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {Menu, MenuItem, IconButton} from '@material-ui/core';
import { PermIdentity } from '@material-ui/icons';
import '../App.css';
class Header extends Component {
  state = {
    anchorEl: null
  };
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };


  render() {
    const { anchorEl } = this.state;
    const style = {btn: `App-Avatar`}
    return(
      <Container>
        <Logo>Mportal</Logo>
        <Link to="/login">
          <Button logIn>Login</Button>
        </Link>
        <Link to="/signup">
          <Button >Cadastrar</Button>
        </Link>
        <IconButton className={style.btn} onClick={this.handleClick}>
          <PermIdentity />
        </IconButton>
        <Menu open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={this.handleClose}>
          <MenuItem onClick={this.handleClose}>Minhas Historias</MenuItem>
          <MenuItem onClick={this.handleClose}>Criar História</MenuItem>
          <MenuItem onClick={this.handleClose}>Configuraćões</MenuItem>
          <MenuItem onClick={this.handleClose}>Logout</MenuItem>
        </Menu>
      </Container>
    );
  }
} 


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
