import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ff5f5f;
  padding: 30px;

  @media(min-width: 768px) {
   
  }

  @media(min-width: 1280px) {
    padding: 20px 0;
   
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
 
  @media(min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Text = styled.p`
  line-height: 2;
  letter-spacing: 1px;
  color: #fff;
  margin-bottom: 30px;
`;
