import React, { Component } from 'react';
import styled from 'styled-components';
import Signature from './Signature';
import Info from './Info';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
class SideStory extends Component {
  
  handleClick = (id) => {
    const path = `/story/${id}`;
    this.props.history.push(path);
  }

  render = () => {
    const {direction, story} = this.props;
    return (
      <Container direction={direction}  onClick={this.handleClick.bind(this, story.id)}>
        <Photo sideLeft src={`http://localhost/storage/${story.image}`} alt="mainStory"></Photo>
        <Infos>
          <Info title={story.title} subTitle={story.subtitle}/>
          <Signature name={story.user.name} date={moment(story.date).format('ll')}/>
        </Infos>
      </Container>
    )};
} 

export default withRouter(SideStory);

const Photo = styled.img`
  flex: 1;
  height: 150px;
  width: 150px;
  margin-bottom: 16px;
  margin-left: ${props => props.sideLeft ? '24px;' : '0'}
`;

const Container = styled.div`
  ${props => props.direction === 'right' ? `display: flex` : 'display: block; text-align: center;'};
  flex-direction: ${props => props.direction === 'left' ? 'row' : 'row-reverse'};
`;

const Infos = styled.div`
  display:flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
