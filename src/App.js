import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import styled from 'styled-components';
import MainStory from './components/MainStory';
import SideStory from './components/SideStory';

class App extends Component {
  render() {
    return (
      <Content>
        <Header />
        <Section>
          <MainStory src="https://cdn-images-1.medium.com/max/1000/1*9sCetaK23zSJmcvNXYhhUA.jpeg" />
          <SectionSideStories>
            <SideStory direction="left" src="https://cdn-images-1.medium.com/max/1000/1*9sCetaK23zSJmcvNXYhhUA.jpeg" />
            <SideStory direction="left" src="https://cdn-images-1.medium.com/max/1000/1*9sCetaK23zSJmcvNXYhhUA.jpeg" />
            <SideStory direction="left" src="https://cdn-images-1.medium.com/max/1000/1*9sCetaK23zSJmcvNXYhhUA.jpeg" />
          </SectionSideStories>
        </Section>
        <div className="App-Divider"></div>
        <Section sideStory>
          <SideStory direction="right" src="https://cdn-images-1.medium.com/max/1000/1*9sCetaK23zSJmcvNXYhhUA.jpeg" />
          <SideStory direction="right" src="https://cdn-images-1.medium.com/max/1000/1*9sCetaK23zSJmcvNXYhhUA.jpeg" />
          <SideStory direction="right" src="https://cdn-images-1.medium.com/max/1000/1*9sCetaK23zSJmcvNXYhhUA.jpeg" />
          <SideStory direction="right" src="https://cdn-images-1.medium.com/max/1000/1*9sCetaK23zSJmcvNXYhhUA.jpeg" />
          <SideStory direction="right" src="https://cdn-images-1.medium.com/max/1000/1*9sCetaK23zSJmcvNXYhhUA.jpeg" />
          <SideStory direction="right" src="https://cdn-images-1.medium.com/max/1000/1*9sCetaK23zSJmcvNXYhhUA.jpeg" />  
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
`;
const Content = styled.div`
  max-width: 1080px;
  width: 100%;
  justify-content: space-between;
  margin: 0 auto;
`;

export default App;
