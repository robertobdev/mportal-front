import React, { Component } from "react";
import { TextField, Button } from '@material-ui/core';
import styled from 'styled-components';
import '../App.css';
import axios from 'axios';
import { Error, Form}  from '../components/Style';
import { url } from '../Utils/GetToken';
class SignUp extends Component {

  state = {
    signup: {
      name: '',
      email: '',
      password: '',
      c_password: ''
    },
    error: null
  };

  handleInput = (event) => {
    let change = this.state.signup;
    change[event.target.name] = event.target.value;
    this.setState({ signup: change });
    console.log(this.state.signup);
  }

  handleClick = (event) => {
    event.preventDefault();
    axios.post(`${url}register`, this.state.signup)
    .then( res => {
      localStorage.setItem('login', JSON.stringify(res.data));
      this.props.history.push("/");
      console.log(res);
    }).catch( err => {
      this.setState({error: true});
    });
  }

  render() {
    const style = { btn: `App-Btn-SignUp` }
    const showError = this.state.error ?  <Error> Erro ao registrar login </Error> : '';
    return (
      <Container>
        <Header>
          <h2>Cadastrar</h2>
        </Header>
        <Content>
          {showError}
          <Form onSubmit={this.handleClick}>
            <TextField
              label="Name"
              margin="normal"
              variant="outlined"
              name="name"
              onChange={this.handleInput}
              required
            />
            <TextField
              label="Email"
              type="email"
              margin="normal"
              variant="outlined"
              name="email"
              onChange={this.handleInput}
              required
            />
            <TextField
              label="Senha"
              type="password"
              margin="normal"
              variant="outlined"
              name="password"
              inputProps={{ minLength: 6 }}
              onChange={this.handleInput}
              required
            />
            <TextField
              label="Confirmacão de Senha"
              type="password"
              margin="normal"
              variant="outlined"
              name="c_password"
              inputProps={{ minLength: 6 }}
              onChange={this.handleInput}
              required
            />
            <Button variant="contained" color="primary" type="submit" className={style.btn}>
              Cadastrar
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
export default SignUp;


