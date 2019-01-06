import React, { Component } from 'react';
import styled from 'styled-components';
import Signature from './Signature';
import Info from './Info';
import { Photo } from './Style';
import {withRouter} from 'react-router-dom';
class MainStory extends Component {
  constructor(){
    console.log(localStorage.getItem('login'));
    super();
  }
  handleClick = (id) => {
    const path = `/story/${id}`;
    this.props.history.push(path);
    
  }
  render(){
    const {story} = this.props;
    return (
      <Container onClick={this.handleClick.bind(this, story.id)}>
        <Photo src={story.image} alt="mainStory"></Photo>
        <Info title={story.title} subTitle={story.subTitle}/>
        <Signature name={story.author} date={story.date}/>
      </Container>
    )
  }
}
export default withRouter(MainStory);

const Container = styled.div`
  display: flex;
  flex-direction:column;
`;