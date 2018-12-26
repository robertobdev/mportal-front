import React from 'react';
import styled from 'styled-components';
import Signature from './Signature';
import Info from './Info';

const MainStory = (props) => (
  <Container>
    <Photo src={props.src} alt="mainStory"></Photo>
    <Info />
    <Signature name="Rachel Vorona Cote" date="Aug 24"/>
  </Container>
);
export default MainStory;

const Container = styled.div`
  display: flex;
  flex-direction:column;
`;
const Photo = styled.img`
  flex: 1;
  height: 150px;
  margin-bottom: 16px;
`;

const Button = styled.button`
  background: ${ props => props.logIn ? "white"  : "rgb(0, 121, 211)" };
  color: ${ props => props.logIn ? "rgb(0, 121, 211)" : "white" };
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
  border: 2px solid rgb(0,121,211);
  border-radius: 3px;
  cursor:pointer;
`;
