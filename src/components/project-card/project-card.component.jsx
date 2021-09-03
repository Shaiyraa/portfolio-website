import React from 'react';
import { Container, Image, Details, Name, Link } from './project-card.styles';

const ProjectCard = ({ name, link, image, children }) => (
  <Container>
    <Image image={image} />
    <Details>
      <Name>{name}</Name>
      <p>{children}</p>
    </Details>
    <Link>More info</Link>
  </Container>
);

export default ProjectCard;