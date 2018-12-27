import React from 'react';
import styled from 'styled-components';
import Signature from './Signature';
import Info from './Info';
import { Photo } from './Style';

const MainStory = (props) => (
  <Container>
    <Photo src={props.src} alt="mainStory"></Photo>
    <Info title="American Daredevil" subTitle="Kirk Jones jumped off Niagara Falls twice. The first time, he made it. The second time, he died."/>
    <Signature name="Rachel Vorona Cote" date="Aug 24"/>
  </Container>
);
export default MainStory;

const Container = styled.div`
  display: flex;
  flex-direction:column;
`;
