import React, { Component } from "react";
import {
  Button, List, ListItem, ListItemText,
  ListItemSecondaryAction, IconButton,
  Dialog, DialogActions, DialogContent, DialogContentText,
  Slide, DialogTitle
} from '@material-ui/core';
import styled from 'styled-components';
import { DeleteForever, Edit } from '@material-ui/icons';
import '../App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { config } from '../Utils/GetToken';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class ListStory extends Component {

  constructor() {
    super();
  }

  state = {
    open: false,
    toDelete: null,
    stories: []
  };

  handleClickOpen = (id) => {
    this.setState({ open: true, toDelete: id });
  };

  handleClose = () => {
    this.setState({ open: false, toDelete: null });
  };

  handleClickDelete = () => {
    axios.delete(`http://localhost/api/story/${this.state.toDelete}`, config)
    .then( res => {
      let stories = this.state.stories.filter((story) =>{
        return story.id !== this.state.toDelete;
      })
      this.setState({open: false, stories});
      console.log(res);
    });
  }

  componentWillMount() {
    axios.get(`http://localhost/api/story`, config)
      .then(res => {
        this.setState({ stories: res.data });
        console.log(res);
      });
  }


  render() {
    const style = { btn: `App-Btn-SignUp` };
    const { stories } = this.state;
    return (
      <Container>
        <Header>
          <h2>Minhas Histórias</h2>
          <Link to="/create">
            <Button>Nova História</Button>
          </Link>
        </Header>
        <Content>
          <List>
            {stories.map(story => {
              return (
                <ListItem key={story.id}>
                  <ListItemText primary={story.title} />
                  <ListItemSecondaryAction>
                    <IconButton onClick={() => this.handleClickOpen(story.id)}>
                      <DeleteForever />
                    </IconButton>
                    <Link to={`/create/${story.id}`}>
                      <IconButton>
                        <Edit />
                      </IconButton>
                    </Link>
                  </ListItemSecondaryAction>
                </ListItem>
              )
            })}
          </List>
        </Content>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
        >
          <DialogTitle id="alert-dialog-slide-title">
            Confirmação de exclusão
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Você realmente deseja excluir essa história?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Não
            </Button>
            <Button onClick={this.handleClickDelete} color="primary">
              Sim
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    );
  }
}

const Container = styled.div`
  border:1px solid #cccccc;
  display:flex;
  margin: 0 auto;
  width: 100%;
  max-width: 1080px;
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
  display: flex;
  justify-content: space-between;
`;

export default ListStory;


