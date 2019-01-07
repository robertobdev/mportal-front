import React, { Component } from "react";
import { TextField, Button } from '@material-ui/core';
import { CloudUpload } from '@material-ui/icons';
import styled from 'styled-components';
import '../App.css';
import axios from 'axios';
class CreateStory extends Component {

  imgDefault = `https://cdn.pixabay.com/photo/2014/06/01/21/05/photo-effect-359981_960_720.jpg`;
  story = {
    title: '',
    subtitle: '',
    description: '',
    image: null,
    imagePreview: this.imgDefault,
  }
  state = {
    story: this.story
  }

  handleImage = event => {
    console.log(event);
  }

  handleClick = event => {
    document.getElementById('fileInput').click();
  }
  onChange = (file) => {
    this.imgDefault = URL.createObjectURL(file);
    let change = this.story;
    change.image = file;
    change.imagePreview = this.imgDefault;
    this.setState({ store: change });
    console.log(this.imgDefault);
  }

  handleOnChange = (event) => {
    let change = this.story;
    change[event.target.name] = event.target.value;

    this.setState({ story: change });
    console.log(this.state.story);
  }

  handleSave = event => {
    const fd = new FormData();
    fd.append('image', this.state.story.image, 'image');
    const login = JSON.parse(localStorage.getItem('login'));
    const config = {
      headers: {'Authorization': "Bearer " + login.success.token}
    };
    let a = { file : this.state.story.imagePreview, name : 'dsadasd'};
    axios.post(`http://localhost/api/story`, a, config)
      .then( res => {
        console.log(res);
      });
  }
  render() {
    const style = { btn: `App-Btn-SignUp`, uploadBtn: `App-Upload` };
    const { image } = this.state.story;
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
            onChange={this.handleOnChange}
          />
          <TextField
            id="outlined-name"
            label="Subtítulo"
            type="text"
            margin="normal"
            variant="outlined"
            name="subtitle"
            onChange={this.handleOnChange}
          />
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows="9"
            defaultValue="Default Value"
            margin="normal"
            variant="outlined"
            name="description"
            onChange={this.handleOnChange}
          />
          <Upload>
            <input type="file" style={{ display: 'none' }} id="fileInput"
              onChange={e => { this.onChange(e.currentTarget.files[0]) }} />
            <Photo src={image} />
            <Button variant="contained" color="default" className={style.uploadBtn} onClick={(event) => this.handleClick(event)}>
              Upload
              <CloudUpload />
            </Button>
          </Upload>

          <Button variant="contained" color="primary" className={style.btn} onClick={this.handleSave}>
            Entrar
          </Button>
        </Content>

      </Container>
    );
  }
}

const Upload = styled.div`
  display: flex;
  align-items:center;
`;
const Photo = styled.img`
  flex: 3;
  max-height:160px;
`;


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


