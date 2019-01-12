import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { Menu, MenuItem, IconButton } from '@material-ui/core';
import { PermIdentity } from '@material-ui/icons';
import '../App.css';
class Header extends Component {
  state = {
    anchorEl: null
  };
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = (status) => {
    if (status === "logout") {
      localStorage.removeItem('login');
      this.props.history.push('/');
    }
    console.log(status);
    this.setState({ anchorEl: null });
  };
  isLogin() {
    const style = { btn: `App-Avatar` }
    const login = localStorage.getItem('login');
    if (login) {
      return (
        <IconButton className={style.btn} onClick={this.handleClick}>
          <PermIdentity />
        </IconButton>
      )
    } else {
      return (
        <div>
          <Link to="/login">
            <Button logIn>Login</Button>
          </Link>
          <Link to="/signup">
            <Button >Cadastrar</Button>
          </Link>
        </div>
      )
    }
  }
  goToMain = () => {
    console.log('dsda');
  }
  render() {
    const { anchorEl } = this.state;
    return (
      <Container>
        <Logo><A href="/">Mportal</A></Logo>
        {this.isLogin()}
        <Menu open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={this.handleClose}>
          <Link to="/list">
            <MenuItem onClick={this.handleClose}>Minhas Historias</MenuItem>
          </Link>
          <MenuItem onClick={this.handleClose}>Configuraćões</MenuItem>
          <MenuItem onClick={() => this.handleClose('logout')}>Logout</MenuItem>
        </Menu>
      </Container>
    );
  }
}


export default withRouter(Header);

const A = styled.a`
  text-decoration: none;
  cursor:pointer;  
  color: inherit;
`;

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
  background: ${ props => props.logIn ? "white" : "rgb(0, 121, 211)"};
  color: ${ props => props.logIn ? "rgb(0, 121, 211)" : "white"};
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
  border: 2px solid rgb(0,121,211);
  border-radius: 3px;
  cursor:pointer;
`;
