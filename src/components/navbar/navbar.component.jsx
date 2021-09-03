import React, { useState } from 'react';
// import { animateScroll as scroll } from "react-scroll";
import { Container, Flex, LogoContainer, Logo, Icon, Title, Nav, Item } from './navbar.styles';
import LogoImage from '../../assets/images/fire-logo.png'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <Container>
      <Flex className='wrapper'>
        <LogoContainer><Logo src={LogoImage} /> <Title>Karina Kuss</Title></LogoContainer>
        {menuOpen ? <Icon icon={faTimes} onClick={toggleMenuOpen} /> : <Icon icon={faBars} onClick={toggleMenuOpen} />}
        <Nav open={menuOpen}>
          <Item
            onClick={toggleMenuOpen}
            activeClass="nav-item__active"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            about
          </Item>

          <Item
            onClick={toggleMenuOpen}
            activeClass="nav-item__active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}>
            projects
          </Item>

          <Item
            onClick={toggleMenuOpen}
            activeClass="nav-item__active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}>
            get in touch
          </Item>
        </Nav>
      </Flex>
    </Container>
  )
};

export default Navbar;