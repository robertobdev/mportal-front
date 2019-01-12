import styled from 'styled-components';
export const Error = styled.h4`
  color:red;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Photo = styled.img`
  flex: 1;
  height: 150px;
  width: 150px;
  margin-bottom: 16px;
  margin-left: ${props => props.sideLeft ? '24px;' : '0'}
`;


