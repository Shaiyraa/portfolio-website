import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div`
  padding: 30px;

  @media(min-width: 768px) {
    padding: auto;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  color: #ff5f5f;
  display: inline-block;
  margin: 40px;
  font-size: 5em;
  transition: all 1s;
  justify-self: center;

  &:hover {
    color: #151515;
    cursor: pointer;
  }
`;

export const Text = styled.p`
  line-height: 2;
  letter-spacing: 1px;
`;

export const Image = styled.img`
  display: block;
  max-height: 450px;
  margin: 0;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column-reverse;

  @media(min-width: 768px) {
    flex-direction: row;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  /* @media(min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
*/
  @media(min-width: 1080px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  } 
`;