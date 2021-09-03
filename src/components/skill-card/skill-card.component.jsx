import React from 'react';
import { Container, Image, ImageBackgroud, TitleContainer, Title } from './skill-card.styles';

const SkillCard = ({ image, name, background }) => (
  <Container>
    <ImageBackgroud color={background}>
      <Image src={image} alt="skill image" />
    </ImageBackgroud>
    <TitleContainer>
      <Title>{name}</Title>
    </TitleContainer>
  </Container>
);

export default SkillCard;