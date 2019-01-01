import React from 'react';
import styled from 'styled-components';
import Signature from './Signature';
import Info from './Info';
import { Photo } from './Style';

const MainStory = ({story}) => (
  <Container>
    <Photo src={story.image} alt="mainStory"></Photo>
    <Info title={story.title} subTitle={story.subTitle}/>
    <Signature name={story.author} date={story.date}/>
  </Container>
);
export default MainStory;

const Container = styled.div`
  display: flex;
  flex-direction:column;
`;