import React, { Component } from 'react';
import styled from 'styled-components';
import Signature from './Signature';
import Info from './Info';
import { Photo } from './Style';
import { withRouter } from 'react-router-dom';
class SideStory extends Component {
  constructor(){
    super();
  }
  handleClick = (id) => {
    const path = `/story/${id}`;
    this.props.history.push(path);
  }

  render = () => {
    const {direction, story} = this.props;
    return (
      <Container direction={direction}  onClick={this.handleClick.bind(this, story.id)}>
        <Photo sideLeft src={story.image} alt="mainStory"></Photo>
        <Infos>
          <Info title={story.title} subTitle={story.subTitle}/>
          <Signature name={story.author} date={story.date}/>
        </Infos>
      </Container>
    )};
} 

export default withRouter(SideStory);

const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.direction === 'left' ? 'row' : 'row-reverse'};
`;

const Infos = styled.div`
  display:flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
