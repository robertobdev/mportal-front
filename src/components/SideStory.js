import React from 'react';
import styled from 'styled-components';
import Signature from './Signature';
import Info from './Info';
import { Photo } from './Style';

const SideStory = ({direction, src}) => (
  <Container direction={direction}>
    <Photo sideLeft src={src} alt="mainStory"></Photo>
    <Infos>
      <Info title="American Daredevil" subTitle="Kirk Jones jumped off Niagara Falls twice. The first time, he made it. The second time, he died."/>
      <Signature name="Rachel Vorona Cote" date="Aug 24"/>
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
