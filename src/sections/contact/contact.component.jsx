import React from 'react';
import { Container, Icon, Flex, Grid, Text, Image } from './contact.styles';
import SectionTitle from '../../components/section-title/section-title.component';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import ContactStoryset from '../../assets/images/contact.svg';

const Contact = ({ id }) => (
  <div>
    <Container className="wrapper" id={id}>
      <SectionTitle>Get in touch</SectionTitle>
      <Text>Feel free to contact me on any of the platforms below.</Text>
      <Flex style={{ marginTop: "-40px", marginBottom: "40px" }}>
        <div>

          <Grid>
            <a href="mailto:karina.kuss00@gmail.com" target="_blank" rel="noreferrer"><Icon icon={faEnvelopeSquare} /></a>
            <a href="https://www.linkedin.com/in/karina-kuss" target="_blank" rel="noreferrer"><Icon icon={faLinkedin} /></a>
            <a href="https://github.com/Shaiyraa" target="_blank" rel="noreferrer"><Icon icon={faGithubSquare} /></a>
            <a href="https://discordapp.com/users/303593811505053698" target="_blank" rel="noreferrer"><Icon icon={faDiscord} /></a>
          </Grid>

        </div>

        <Image src={ContactStoryset} alt="get in touch" />
      </Flex>
    </Container>
  </div>
);

export default Contact;