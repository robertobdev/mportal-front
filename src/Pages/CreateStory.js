import React, { Component } from "react";
import { TextField, Button } from '@material-ui/core';
import { CloudUpload } from '@material-ui/icons';
import styled from 'styled-components';
import '../App.css';
class CreateStory extends Component {

  handleImage = event => {
    // console.log(event);
  }

  render() {
    const style = { btn: `App-Btn-SignUp` }
    return (
      <Container>
        <Header>
          <h2>Login</h2>
        </Header>
        <Content>
          <TextField
            id="outlined-name"
            label="Titulo"
            type="text"
            margin="normal"
            variant="outlined"
            name="title"
          />
          <TextField
            id="outlined-name"
            label="Subtítulo"
            type="text"
            margin="normal"
            variant="outlined"
            name="subtitle"
          />
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows="9"
            defaultValue="Default Value"
            margin="normal"
            variant="outlined"
            name="image"
          />
          <div>
          <input type="file" onChange={this.handleImage}/>
          <Button variant="contained" color="default" onChange={this.handleImage}>
            Upload
            <CloudUpload/>
          </Button>

          </div>

          <Button variant="contained" color="primary" className={style.btn}>
            Entrar
          </Button>
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
export default CreateStory;


