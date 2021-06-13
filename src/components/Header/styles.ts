import styled from 'styled-components';

export const Container = styled.div`
  background: var(--background-dark);
  position: fixed;
  z-index: 99;
  width: 100%;
`;

export const Wrapper = styled.div`
  height: 6rem;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

export const Title = styled.h1`
  font-family: "Caveat brush";
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover{
    color: var(--purple);
  }

  @media(max-width: 800px) {
    font-size: 1.5rem;
  }
`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const MenuItem = styled.li`
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover{
    color: var(--purple);
  }

  a {
    color: var(--text);
    text-decoration: none;
    letter-spacing: 0;
    font-size: 1rem;
    font-weight: 600;
    transition: all 0.2s ease;
    margin: 0 0.5rem;
  }

  a:hover{
    color: var(--purple);
  }
`;

export const ContactButton = styled.button`
  padding: 1rem;
  background: var(--purple);
  border-radius: 0.25rem;
  border: 0;
  outline: 0;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  @media(max-width: 800px) {
    padding: 0.5rem;
  }

  &::after {
    content: 'Enviar email';
    position: absolute;
    top: 0;
    left: -100%;
    height: 100%;
    width: 100%;
    background: var(--text);
    transition: all 0.3s ease;

    font-size: 1rem;
    font-weight: 600;
    color: var(--purple);

    display: flex;
    align-items: center;
    justify-content: center;

  }

  &:hover {
    &::after {
      left: 0;
    }
  }
`;

