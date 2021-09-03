import styled from 'styled-components';

export const Container = styled.div`

  margin: 60px 30px 20px 30px;

  @media(min-width: 1250px) {
    margin: 70px auto 20px auto;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column-reverse;
  @media(min-width: 1050px) {
    flex-direction: row;
  }

`;

export const TextContainer = styled.div`
  margin-right: 30px;

`;

export const Text = styled.p`
  line-height: 2;
  letter-spacing: 1px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media(min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media(min-width: 1080px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Photo = styled.img`
  max-width: 80%;
  max-height: auto;
  align-self: start;
  background-color: #ddd;
  padding: 10px;
  margin: 0 auto;

  @media(min-width: 768px) {
    max-width: 400px;
  }

`;

export const SecondaryTitle = styled.h2`
  font-weight: 400;
  letter-spacing: 1px;
  margin: 40px 0 20px 0;
  padding: 0;
`;

export const Skill = styled.h5`
  display: inline-block;
  margin: 4px 3px;
  padding: 6px 16px;
  background-color: #151515;
  color: #fff;
  font-weight: 400;
  border-radius: 13px;
`;


export const MainSkills = styled.div`
  margin: 0 auto;
  
`;

export const SecondarySkills = styled.div`
  margin: 20px auto;
`;

