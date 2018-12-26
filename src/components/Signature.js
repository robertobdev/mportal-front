import React from 'react';
import styled from 'styled-components';

const Signature = (props) => (
  <div>
    <Span name>{props.name}</Span>
    <Span>{props.date}</Span>
  </div>
);
export default Signature;

const Span = styled.span`
  color: ${ props => props.name ? "black" : "gray"};
  font-size: 15px;
  display:block;
  padding-left: 12px;
`;
