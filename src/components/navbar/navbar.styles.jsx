import styled from 'styled-components';
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div`
  position: fixed;
  z-index: 9999;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 -1px 3px #151515;

  
`;

export const Flex = styled.div`
  height: 80px;

  @media(min-width: 768px) {
    height: 100px;
  }

  @media (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 80px;

  @media(min-width: 768px) {
    height: 100px;
  }
`;

export const Logo = styled.img`
  float: left;
  height: 40px;
  margin: 0 20px;

  @media(min-width: 768px) {
    height: 60px;
  }

  @media(min-width: 1280px) {
  margin-left: 0;
  }
`;


export const Title = styled.h1`
  float: left;
  margin: 0;
  padding: 0;
  font-size: 1.7em;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2px;
  
  @media(min-width: 768px) {
    font-size: 2.6em;
  }
`;

export const Nav = styled.div`
  display: ${({ open }) => open ? 'block' : 'none'};

  @media(min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    margin-bottom: auto;
  }
`;

export const Item = styled(Link)`
  font-size: 1.4em;
  
  &:hover {
    cursor: pointer;
    color: #ff3400;
  }

  // small device
  display: block;
  background-color: rgba(255, 255, 255, 0.9);
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid #aaa;
  
  
  @media(min-width: 1280px) {
    background-color: transparent;
    width: auto;
    margin: 0 25px;
    padding: 0;
    border: none;

    &:last-child {
      margin-right: 0;
    }
  }
`;


export const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 11px;
  right: 10px;
  font-size: 2.1em;
  margin: 13px;

  @media(min-width: 768px) {
    top: 23px;
  }

  @media(min-width: 1280px) {
    display: none;
  }
`