import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  width: 100%;
  height: 100vh;

  padding: 0 50px;

  @media(max-width: 1015px) {
    flex-direction: column;
    justify-content: space-between;
    gap: 0;
    padding: 0;
  }
`;

export const TextWrapper = styled.div`
  @media(max-width: 1015px) {
   margin-top : 300px ;
  }
`;
export const NarutoImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`;

