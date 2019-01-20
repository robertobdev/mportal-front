import React, { Component } from 'react';
import styled from 'styled-components';
import MainStory from '../components/MainStory';
import SideStory from '../components/SideStory';
import axios from 'axios';
import { url } from '../Utils/GetToken';
class Main extends Component {
  state = {
    stories: { sideStories: { highlights: null, list: null }, main: null }
  }

  componentWillMount() {
    axios.get(`${url}stories`).then(res => {
      this.setState({ stories: res.data });
    });
  }

  render() {
    const { stories } = this.state;
    return (
      <Content>
        <Section>
          <MainStory story={stories.mainStory} />
          <SectionSideStories>
            {this.state && stories.sideStories.highlights && stories.sideStories.highlights.map(story => {
              return <SideStory key={story && story.id} direction="left" story={story} />
            })}
          </SectionSideStories>
        </Section>
        <div className="App-Divider"></div>
        <Section sideStory>
          {stories.sideStories.list && stories.sideStories.list.map((story) => {
            return <SideStory key={story && story.id} direction="right" story={story} />
          })}
        </Section>
      </Content>
    );
  }
}

const Section = styled.section`
  display: flex;
  flex-direction: ${props => props.sideStory ? "column" : "row"};
`;
const SectionSideStories = styled.section`
  margin-left: 16px;
  flex:1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Content = styled.div`
  max-width: 1080px;
  width: 100%;
  justify-content: space-between;
  margin: 0 auto;
`;

export default Main;
