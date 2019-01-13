import React from 'react';
import styled from 'styled-components';

const Info = (props) => (
  <Div>
    <H2>{props.title}</H2>
    <Span>{props.subTitle}</Span>
  </Div>
);

export default Info;

const Div = styled.div`
  padding-left: 12px;
`;

const Span = styled.span`
  color: ${ props => props.title ? "black" : "rgba(0,0,0,.54)"};
  font-size: ${ props => props.title ? "18px" : "14px"};
  margin-bottom: 20px;
  display:block;
`;

const H2 = styled.h2`
  margin-bottom: 0.5em;
  margin-top: 0.3em;
`;