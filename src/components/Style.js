import styled from 'styled-components';

export const Photo = styled.img`
  flex: 1;
  height: 150px;
  width: 150px;
  margin-bottom: 16px;
  margin-left: ${props => props.sideLeft ? '24px;' : '0'}
`;