import React from 'react';
import styled from 'styled-components';

const Skill = styled.h5`
  display: inline-block;
  margin: 4px 3px;
  padding: 6px 16px;
  background-color: #151515;
  color: #fff;
  font-weight: 400;
  border-radius: 13px;
`;

const Container = styled.div`
  text-align: center;

  @media(min-width: 1280px) {
    text-align: left;
  } 
`;

const SecondarySkills = ({ skills }) => (
  <Container>
    {skills.map(skill => <Skill key={skill}>{skill}</Skill>)}
  </Container>
);

export default SecondarySkills;