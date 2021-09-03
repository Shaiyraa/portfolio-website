import styled from 'styled-components';

export const Container = styled.div`

  background-color: #fff;
  margin: 15px auto;
  padding-bottom: 56px;
  border-radius: 15px;
  overflow: hidden;
  position: relative;

  @media(min-width: 768px) {
    width: 700px;
  }

  @media(min-width: 1280px) {
    width: 600px;
    margin: 0;
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${({ image }) => image});
  background-size: cover;
`;

export const Details = styled.div`
  margin: 20px 25px;
`;

export const Name = styled.h2`
  margin: 0;
  padding: 0;
`;

export const Link = styled.a`
  display: inline-block;
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-weight: 500;
  padding: 10px;
  color: #fff;
  background-color: #151515;
  border-radius: 6px;
  transition: all 1s;

  &:hover {
    background-color: #ff5f5f;
    cursor: pointer;
  }
`;