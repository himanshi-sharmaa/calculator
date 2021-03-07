import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.background};
  margin: 2px;
  border: ${props => props.theme.color};
  border-style: solid;
  padding: 10px;
  font-size: medium;
  min-width: 100;
  color: ${props => props.theme.color};
`;

export const AppLink = styled.a`
	color: ${props => props.theme.linkColor};
`;
