import React, { Component } from "react";
import { TextField, Button } from '@material-ui/core';
import styled from 'styled-components';
import '../App.css';
import axios from 'axios';
import { Error, Form } from '../components/Style';
class LogIn extends Component {
  state = {
    login: {
      email: "",
      password: ""
    },
    error : null
  }

  handleLogin = (event) => {
    event.preventDefault();
    axios.post('http://localhost/api/login', this.state.login)
      .then(res => {
        localStorage.setItem('login', JSON.stringify(res.data));
        this.props.history.push("/");
      }).catch(() => {
        this.setState({error : true});
      });
  }

  handleChange = event => {
    let change = this.state.login;
    change[event.target.name] = event.target.value;
    console.log(change);
    this.setState({ login: change });
  }

  render() {
    const style = { btn: `App-Btn-SignUp` }
    const showError = this.state.error ? <Error>Usuario ou senha inválidos</Error> : '';
    return (
      <Container>
        <Header>
          <h2>Login</h2>
        </Header>
        <Content>
          {showError}
          <Form onSubmit={this.handleLogin}>
            <TextField
              label="Email"
              type="email"
              margin="normal"
              variant="outlined"
              name="email"
              required
              onChange={this.handleChange}
            />
            <TextField
              required
              label="Senha"
              type="password"
              margin="normal"
              name="password"
              onChange={this.handleChange}
              variant="outlined"
            />
            <Button type="submit" variant="contained" color="primary" className={style.btn}>
              Entrar
            </Button>
          </Form>
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


