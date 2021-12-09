import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${props => props.theme.bodyColor}
  border-top-left-radius: 25;
  border-top-right-radius: 25;
  margin-top: -25px
  height: 100%;
`;
