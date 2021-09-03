import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  margin: 0;
  padding: 30px 0;
  color: ${({ white }) => white ? '#fff' : '#151515'};
  font-size: 2.9em;
  font-weight: 400;
`;

const SectionTitle = ({ children, white }) => (
  <Title white={white}>{children}</Title>
);

export default SectionTitle