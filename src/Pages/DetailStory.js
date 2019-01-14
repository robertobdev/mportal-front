import React, { Component } from 'react';
import Info from '../components/Info';
import Signature from '../components/Signature';
import styled from 'styled-components';
import axios from 'axios';
import moment from 'moment';
import {url, urlImg} from '../Utils/GetToken';
class DetailStory extends Component {

  constructor() {
    super();
    this.state = {
      story: { user: { name : '' } }
    };
  }

  componentWillMount = () => {
    const id = this.props.match.params.id;
    axios.get(`${url}stories/${id}`)
      .then(res => {
        this.setState({ story: res.data });
      });
  }

  render() {
    const { story } = this.state;
    return (
      <div>
        <Img image={`${urlImg}${story.image}`} />
        <Content>
          <Info title={story.title} subTitle={story.subtitle} />
          <Signature name={story.user.name} date={moment(story.date).format('ll')} />
          <Text>{story.description}</Text>
        </Content>
      </div>
    );
  }
}
const Content = styled.div`
  display:flex;
  margin: 0 auto;
  width: 100%;
  max-width: 1080px;
  justify-content: space-between;
  flex-direction: column;
  padding:25px;
`;
const Img = styled.div`
  background-image: url(${props => props.image});
  height: 500px;
  background-size: cover;
`;

const Text = styled.div`
  margin-left: 12px;
  margin-top: 20px;
`;


export default DetailStory; 