import React from 'react';
import { Container, Flex, Grid, TextContainer, Text, Photo, SecondaryTitle, MainSkills } from './about.styles';

import SkillCard from '../../components/skill-card/skill-card.component';
import SectionTitle from '../../components/section-title/section-title.component';
import SecondarySkills from '../../components/secondary-skills/secondary-skills.component';

import MePhoto from '../../assets/images/karina-kuss.jpg';
import JavaScriptPhoto from '../../assets/images/js.svg';
import NodeJsPhoto from '../../assets/images/nodejs.svg';
import ExpressJsPhoto from '../../assets/images/expressjs.svg';
import MongodbPhoto from '../../assets/images/mongodb.svg';
import ReactPhoto from '../../assets/images/react.svg';
import DiscordJsPhoto from '../../assets/images/discordjs.png';

const About = ({ id }) => (
  <Container id={id}>
    <div className="wrapper">
      <SectionTitle>About me</SectionTitle>
      <Flex>
        <TextContainer>
          <Text>Hello! My name is Karina and I live in Łódź, Poland. I'm a <strong>fullstack JavaScript developer</strong>. I became interested in coding, when I was 13 years old and since then I have been learning about various technologies and programming concepts. It was around this time, when I also fell in love in horseback riding, as well as playing video games. That's why I decided to write my own browser game about horses.
            Right now, I'm having fun writing JavaScript, mostly server side using Node.js and Express, still working on my game. I also enjoy writing Discord bots and React apps.</Text>
          <Text>Programming is everywhere, and I like to think about how the systems and programs around us work or how I would solve the problems they answer. I'm always excited about learning new stuff and I strive to write clean and readable code.</Text>
        </TextContainer>

        <Photo src={MePhoto} alt="Karina Kuss" />

      </Flex>
      <SecondaryTitle>I'm most skilled in</SecondaryTitle>
      <MainSkills>
        <Grid>
          <SkillCard image={JavaScriptPhoto} name="JavaScript" background="#d9c629" />
          <SkillCard image={NodeJsPhoto} name="Node.js" background="#333" />
          <SkillCard image={ExpressJsPhoto} name="Express.js" background="#ddd" />

          <SkillCard image={MongodbPhoto} name="MongoDB" background="#ddd" />
          <SkillCard image={ReactPhoto} name="React" background="#282c34" />
          <SkillCard image={DiscordJsPhoto} name="Discord.js" background="#5865f2" />
        </Grid>
      </MainSkills>
      <SecondaryTitle>I'm also familiar with</SecondaryTitle>
      <SecondarySkills skills={["Docker", "Amazon Web Services (AWS)", "Firebase", "Stripe", "Typescript", "SQL", "HTML5", "CSS3", "SASS", "Web Performance Optimization", "Security", "Agile Software Development", "CI/CD", "Test Driven Development", "Object Oriented Programming", "Functional Programming", "Data Structures", "Algorithms", "Nginx", "Wordpress", "Next.js", "Sanity", "Angular", "Vue", "Redis", "Redux",]} />
    </div>
  </Container>
);

export default About;