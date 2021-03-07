import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.background};
  margin: 30rem;
  border: ${props => props.theme.color};
  border-style: solid;
  padding: 3rem;
  font-size: medium;
  color: ${props => props.theme.color};
`;

export const AppLink = styled.a`
	color: ${props => props.theme.linkColor};
`;
