import React, { Component } from "react";
import { Button, List, ListItem, ListItemText, 
        ListItemSecondaryAction, IconButton,
        Dialog, DialogActions, DialogContent,DialogContentText,
        Slide, DialogTitle } from '@material-ui/core';
import styled from 'styled-components';
import { DeleteForever, Edit } from '@material-ui/icons';
import '../App.css';
import { Link } from 'react-router-dom';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class ListStory extends Component {

  constructor() {
    super();
  }

  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  render() {
    const style = { btn: `App-Btn-SignUp` }
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
            <ListItem>
              <ListItemText primary="Single-line item" />
              <ListItemSecondaryAction>
                <IconButton onClick={this.handleClickOpen}>
                  <DeleteForever />
                </IconButton>
                <Link to="/create/3">
                  <IconButton>
                    <Edit />
                  </IconButton>
                </Link>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Content>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Agree
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


