import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #151515;
  text-align: center;
  color: #aaa;
  height: 128px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 10px;
`;

const Storyset = styled.a`
  color: #fff;
  text-decoration: none;
`;

const Footer = () => (
  <Container>
    <div>&copy; 2021 Karina Kuss | Illustrations by&nbsp;
      <Storyset href="https://storyset.com/online">Storyset</Storyset></div>
  </Container>
);

export default Footer;