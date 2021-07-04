import styled, { css } from 'styled-components';

interface IReverseProps {
  reverse: boolean
}

export const Container = styled.section<IReverseProps>`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: var(--background-dark);

  ${props => props.reverse && css`
    background: var(--background-light);
  `}

  @media(max-width: 800px) {
    height: 120vh;
  }
`;

export const Wrapper = styled.div<IReverseProps>`
  height: 100%;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  z-index: 50;

  display: flex;
  flex-direction: row;

  ${props => props.reverse && css`
    flex-direction: row-reverse;
  `}

  @media(max-width: 800px) {
    flex-direction: column-reverse;
  }
`;

export const InfoDiv = styled.div<IReverseProps>`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  ${props => props.reverse && css`
    align-items: flex-end;
  `}

  @media(max-width: 800px) {
    width: 100%;
    height: 50%;
    align-items: center;
  }
`;

export const InfoContent = styled.div`
  padding: 1.5rem;

  h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
  }

  p {
    font-size: 1.2rem;
    max-width: 550px;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  @media(max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h1 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1rem;
      margin-bottom: 0;
    }
  }
`;

export const ImageDiv = styled.div<IReverseProps>`
  height: 100%;
  width: 50%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  ${props => props.reverse && css`
    align-items: flex-start;
  `}

  img {
    height: 75%;
    width: 75%;
  }

  @media(max-width: 800px) {
    width: 100%;
    height: 50%;
    align-items: center;
    justify-content: flex-end;
  }
`;
