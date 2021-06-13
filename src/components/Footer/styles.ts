import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  background-color: var(--background-dark);
`;

export const Content = styled.div`
  padding: 1.5rem;
  max-width: 100rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  strong, i , span {
    color: var(--white);
    text-align: center;
  }

  strong {
    font-size: 1rem;
    letter-spacing: -1px;
  }

  i {
    font-size: 1.2rem;
  }

  span {
    color: var(--purple);
    font-size: 0.9rem;
    margin-top: 0.25rem;
  }

  div {
    display: flex;
    margin-top: 1rem;
  }
`;

export const SocialMedia = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  & + a {
    margin-left: 0.25rem;
  }

  &:hover {
    filter: brightness(0.8);
  }
`;
