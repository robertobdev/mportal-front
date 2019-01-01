import React from 'react';
import styled from 'styled-components';
import Signature from './Signature';
import Info from './Info';
import { Photo } from './Style';

const SideStory = ({direction, story}) => (
  <Container direction={direction}>
    <Photo sideLeft src={story.image} alt="mainStory"></Photo>
    <Infos>
      <Info title={story.title} subTitle={story.subTitle}/>
      <Signature name={story.author} date={story.date}/>
    </Infos>
  </Container>
);
export default SideStory;

const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.direction === 'left' ? 'row' : 'row-reverse'};
`;

const Infos = styled.div`
  display:flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
