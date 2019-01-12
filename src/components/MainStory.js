import React, { Component } from 'react';
import styled from 'styled-components';
import Signature from './Signature';
import Info from './Info';
import {withRouter} from 'react-router-dom';
import moment from 'moment';
class MainStory extends Component {

  handleClick = (id) => {
    const path = `/story/${id}`;
    this.props.history.push(path);
    
  }
  render(){
    const {story} = this.props;
    return (
      <Container onClick={this.handleClick.bind(this, story && story.id)}>
        <Photo src={story && `http://localhost/storage/${story.image}` } alt="mainStory"></Photo>
        <Info title={story && story.title} subTitle={story && story.subtitle}/>
        <Signature name={story && story.user.name} date={story && moment(story.date).format('ll')}/>
      </Container>
    )
  }
}
export default withRouter(MainStory);

const Photo = styled.img`
  flex: 1;
  height: 150px;
  margin-bottom: 16px;
  margin-left: ${props => props.sideLeft ? '24px;' : '0'}
`;

const Container = styled.div`
  display: flex;
  flex-direction:column;
  flex:2;
`;