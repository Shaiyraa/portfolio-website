import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  text-align: center;
  background: linear-gradient(
    60deg,
    rgb(255, 95, 95) 0%,
    rgb(255, 120, 75) 100%
  );
  padding-top: 100px;
`;

export const TitleContainer = styled.div`
  height: 65vh;
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h1`
  font-weight: 300;
  letter-spacing: 2px;
  font-size: 28px;
  color: #e0fffb;
  max-width: 450px;
  padding: 50px;

  @media (min-width: 768px) {
    font-size: 40px;
    letter-spacing: 3px;
    max-width: 690px;
  }

  @media (min-width: 1280px) {
    font-size: 48px;
    letter-spacing: 4px;
    max-width: 790px;
  }
`;
