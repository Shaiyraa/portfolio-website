import styled from 'styled-components';

export const Container = styled.div`
  width: 250px;
  height: 70px;
  display: flex;
  //background-color: #151515;
  justify-content: space-between;
  border-radius: 7px;
  overflow: hidden;
  margin: 15px 5px;
  justify-self: center;

  @media(min-width: 768px) {
    margin: 10px 5px;
    width: 330px;
    height: 80px;
  }
`;

export const Image = styled.img`
  max-height: 40px;
  max-width: 40px;
  display: block;

  @media(min-width: 768px) {
    max-height: 50px;
    max-width: 50px;
  }
`;

export const ImageBackgroud = styled.div`
  background-color: ${(props) => props.color};
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media(min-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

export const TitleContainer = styled.div`
  background-color: #151515;
  flex-grow: 1;
  display: flex;
`;

export const Title = styled.h5`
  color: #fff;
  font-size: 1em;
  margin: auto 0 auto 20px;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 0;

  @media(min-width: 768px) {
    font-size: 1.3em;
  }

`;

