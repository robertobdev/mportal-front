import React, { Component } from "react";
import { Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import styled from 'styled-components';
import { DeleteForever, Edit } from '@material-ui/icons';
import '../App.css';

class ListStory extends Component {

  constructor() {
    super();
  }

  render() {
    const style = { btn: `App-Btn-SignUp` }
    return (
      <Container>
        <Header>
          <h2>Minhas Histórias</h2>
          <Button>Nova História</Button>
        </Header>
        <Content>
          <List>
            <ListItem>
              <ListItemText primary="Single-line item" />
              <ListItemSecondaryAction>
                <IconButton>
                  <DeleteForever />
                </IconButton>
                <IconButton>
                  <Edit />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
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


