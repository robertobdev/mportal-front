import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import styled from 'styled-components';
import MainStory from './components/MainStory';
import SideStory from './components/SideStory';
import SignUp from './Pages/SignUp';

class App extends Component {

  constructor(){
    super();
    this.state = {
      stories:[];
    }
  }

  componentWillMount(){
    this.setState({ "stories" : {
      "sideStories": {
        "list": [ 
          {
            "id": 1,
            "title": "American Daredevil",
            "subTitle": "Kirk Jones jumped off Niagara Falls twice. The first time, he made it. The second time, he died.",
            "author": "Rachel Vorona Cote",
            "date": "Aug 24",
            "image":"https://cdn-images-1.medium.com/max/1000/1*9sCetaK23zSJmcvNXYhhUA.jpeg"
          },
          {
            "id": 2,
            "title": "American Daredevil",
            "subTitle": "Kirk Jones jumped off Niagara Falls twice. The first time, he made it. The second time, he died.",
            "author": "Rachel Vorona Cote",
            "date": "Aug 24",
            "image":"https://cdn-images-1.medium.com/max/1000/1*9sCetaK23zSJmcvNXYhhUA.jpeg"
          },
          {
            "id": 3,
            "title": "American Daredevil",
            "subTitle": "Kirk Jones jumped off Niagara Falls twice. The first time, he made it. The second time, he died.",
            "author": "Rachel Vorona Cote",
            "date": "Aug 24",
            "image":"https://cdn-images-1.medium.com/max/1000/1*9sCetaK23zSJmcvNXYhhUA.jpeg"
          },
          {
            "id": 4,
            "title": "American Daredevil",
            "subTitle": "Kirk Jones jumped off Niagara Falls twice. The first time, he made it. The second time, he died.",
            "author": "Rachel Vorona Cote",
            "date": "Aug 24",
            "image":"https://cdn-images-1.medium.com/max/1000/1*9sCetaK23zSJmcvNXYhhUA.jpeg"
          },
          {
            "id": 5,
            "title": "American Daredevil",
            "subTitle": "Kirk Jones jumped off Niagara Falls twice. The first time, he made it. The second time, he died.",
            "author": "Rachel Vorona Cote",
            "date": "Aug 24",
            "image":"https://cdn-images-1.medium.com/max/1000/1*9sCetaK23zSJmcvNXYhhUA.jpeg"
          },
          {
            "id": 6,
            "title": "American Daredevil",
            "subTitle": "Kirk Jones jumped off Niagara Falls twice. The first time, he made it. The second time, he died.",
            "author": "Rachel Vorona Cote",
            "date": "Aug 24",
            "image":"https://cdn-images-1.medium.com/max/1000/1*9sCetaK23zSJmcvNXYhhUA.jpeg"
          }
        ],
        "highlights": [
          {
            "id": 1,
            "title": "American Daredevil",
            "subTitle": "Kirk Jones jumped off Niagara Falls twice. The first time, he made it. The second time, he died.",
            "author": "Rachel Vorona Cote",
            "date": "Aug 24",
            "image":"https://cdn-images-1.medium.com/max/1000/1*9sCetaK23zSJmcvNXYhhUA.jpeg"
          },
          {
            "id": 2,
            "title": "American Daredevil",
            "subTitle": "Kirk Jones jumped off Niagara Falls twice. The first time, he made it. The second time, he died.",
            "author": "Rachel Vorona Cote",
            "date": "Aug 24",
            "image":"https://cdn-images-1.medium.com/max/1000/1*9sCetaK23zSJmcvNXYhhUA.jpeg"
          },
          {
            "id": 3,
            "title": "American Daredevil",
            "subTitle": "Kirk Jones jumped off Niagara Falls twice. The first time, he made it. The second time, he died.",
            "author": "Rachel Vorona Cote",
            "date": "Aug 24",
            "image":"https://cdn-images-1.medium.com/max/1000/1*9sCetaK23zSJmcvNXYhhUA.jpeg"
          }
        ]
      },
      "mainStory": {
        "id": 1,
        "title": "American Daredevil",
        "subTitle": "Kirk Jones jumped off Niagara Falls twice. The first time, he made it. The second time, he died.",
        "author": "Rachel Vorona Cote",
        "date": "Aug 24",
        "image":"https://cdn-images-1.medium.com/max/1000/1*9sCetaK23zSJmcvNXYhhUA.jpeg"
      }
    }});
  }
  render() {
    const {stories} = this.state;
    return (
      <Content>
        <Section>
          <MainStory story={stories.mainStory} />
          <SectionSideStories>
            {stories.sideStories.highlights.map(story => {
              return <SideStory key={story.id} direction="left" story={story} />
            })}
          </SectionSideStories>
        </Section>
        <div className="App-Divider"></div>
        <Section sideStory>
          {stories.sideStories.list.map((story) => {
            return <SideStory key={story.id} direction="right" story={story} />
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
`;
const Content = styled.div`
  max-width: 1080px;
  width: 100%;
  justify-content: space-between;
  margin: 0 auto;
`;

export default App;
