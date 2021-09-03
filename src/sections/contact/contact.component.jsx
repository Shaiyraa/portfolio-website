import React from 'react';
import { Container, Icon, Flex, Grid, Text, Image } from './contact.styles';
import SectionTitle from '../../components/section-title/section-title.component';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faLinkedin, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import ContactStoryset from '../../assets/images/contact.svg';

const Contact = ({ id }) => (
  <div>
    <Container className="wrapper" id={id}>
      <SectionTitle>Get in touch</SectionTitle>
      <Text>Feel free to contact me on any of the platforms below.</Text>
      <Flex style={{ marginTop: "-40px", marginBottom: "40px" }}>
        <div>

          <Grid>
            <Icon icon={faEnvelopeSquare} />
            <Icon icon={faLinkedin} />
            <Icon icon={faFacebookSquare} />
            <Icon icon={faDiscord} />
          </Grid>

        </div>

        <Image src={ContactStoryset} alt="get in touch" />
      </Flex>
    </Container>
  </div>
);

export default Contact;