import React, { Component } from "react";
import { TextField, Button, Select, MenuItem } from '@material-ui/core';
import { CloudUpload } from '@material-ui/icons';
import styled from 'styled-components';
import '../App.css';
import { config } from '../Utils/GetToken';
import axios from 'axios';
class CreateStory extends Component {
  id = this.props.match.params.id;
  imgDefault = `https://cdn.pixabay.com/photo/2014/06/01/21/05/photo-effect-359981_960_720.jpg`;
  story = {
    title: '',
    subtitle: '',
    description: '',
    category_id: '',
    user_id: '',
    imagePath: '',
    image: null,
    imagePreview: this.imgDefault,
  }
  state = {
    story: this.story,
    categories: []
  }

  handleClick = (event) => {
    document.getElementById('fileInput').click();
  }
  onChange = (file) => {
    this.imgDefault = URL.createObjectURL(file);
    let change = this.state.story;
    change.imagePreview = this.imgDefault;

    const reader = new FileReader();

    reader.onloadend = () => {
      change.image = reader.result;
      this.setState({ store: change });
    }
    reader.readAsDataURL(file);
  }

  handleOnChange = (event) => {
    let change = this.state.story;
    change[event.target.name] = event.target.value;
    this.setState({ story: change });
  }

  handleSave = (event) => {
    if (this.id) {
      axios.patch(`http://localhost/api/story/${this.id}`, this.state.story, config)
        .then(res => {
          console.log(res);
        });
      return;
    }
    axios.post(`http://localhost/api/story`, this.state.story, config)
      .then(res => {
        console.log(res);
      });
  }

  componentWillMount = () => {
    axios.get(`http://localhost/api/category`, config)
      .then(res => {
        this.setState({ categories: res.data });
        console.log(res.data);
      });
    if (this.id) {
      axios.get(`http://localhost/api/story/${this.id}`, config)
        .then(res => {
          const { category_id, description, id, image, subtitle, title, user_id } = res.data;
          let story = { category_id, user_id, description, id, image, imagePath: image, subtitle, title, imagePreview: `http://localhost/storage/${image}` };
          this.setState({ story });
        });
    }
  }
  render = () => {
    const style = { btn: `App-Btn-SignUp`, uploadBtn: `App-Upload` };
    const { category_id, description, id, image, subtitle, title, imagePreview } = this.state.story;
    const { categories } = this.state;
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
            value={title}
            onChange={this.handleOnChange}
          />
          <TextField
            id="outlined-name"
            label="Subtítulo"
            type="text"
            margin="normal"
            variant="outlined"
            name="subtitle"
            value={subtitle}
            onChange={this.handleOnChange}
          />
          <Select
            value={category_id}
            onChange={this.handleOnChange}
            inputProps={{
              name: 'category_id'
            }}
          >
            {categories.map(category => {
              return <MenuItem key={category.id} value={category.id}>{category.description}</MenuItem>
            })}
          </Select>
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows="9"
            margin="normal"
            variant="outlined"
            name="description"
            value={description}
            onChange={this.handleOnChange}
          />
          <Upload>
            <input type="file" style={{ display: 'none' }} id="fileInput"
              onChange={e => { this.onChange(e.currentTarget.files[0]) }} />
            <Photo src={imagePreview} />
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


