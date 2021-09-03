import React from 'react';
import { Container, Flex, Text } from './projects.styles';
import SectionTitle from '../../components/section-title/section-title.component';
import ProjectCard from '../../components/project-card/project-card.component';

import EquestrialImage from '../../assets/images/equestrial.png';
import BotImage from '../../assets/images/bot.png';

const Projects = ({ id }) => (
  <div>
    <svg style={{ display: 'block' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 180 1440 90">
      <path fill="#ff5f5f" fillOpacity="1" d="M0,224L80,234.7C160,245,320,267,480,261.3C640,256,800,224,960,218.7C1120,213,1280,235,1360,245.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
    </svg>
    <Container id={id}>
      <div className="wrapper">
        <SectionTitle white>Projects</SectionTitle>
        <Text>Here are two of the large projects I'm currently working on. Check them out on their websites linked below if you're interested.</Text>
        <Flex>
          <ProjectCard name="Equestrial" image={EquestrialImage} link="">
            Fully self-made browser game about breeding horses with real-life genetics. Made with React frontend and Node.js backend. Work in progress.
          </ProjectCard>
          <ProjectCard name="Alish 2.0" image={BotImage} link="">
            Discord bot allowing for guild events management in Black Desert Online game, its purpose is automating them in the way, that everyone can configure it easily.
          </ProjectCard>
        </Flex>
      </div>
    </Container>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
      <path fill="#ff5f5f" fillOpacity="1" d="M0,64L60,64C120,64,240,64,360,64C480,64,600,64,720,69.3C840,75,960,85,1080,85.3C1200,85,1320,75,1380,69.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
    </svg>
  </div>
);

export default Projects;