import styled from 'styled-components';

export const Container = styled.div`
  background: var(--background-dark);
  position: fixed;
  z-index: 999;
  width: 100%;

  box-shadow: 0 0.1px 1px #988BC7;
`;

export const Wrapper = styled.div`
  height: 6rem;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

export const Title = styled.h1`
  font-family: "Caveat brush";
  font-size: 2.5rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover{
    color: var(--purple);
  }
`;

export const MobileMenu = styled.div`
  height: 100%;
  width: 100%;
  background-color: var(--background-dark);
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  animation-name: moveLeftToRight;
  animation-duration: 0.7s;
  animation-fill-mode: backwards;
  overflow: hidden;

  @keyframes moveLeftToRight {
    from {
      transform: translateY(-100%);
    }

    to {
      transform: translateY(0);
    }
  }
`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;

  @media(max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const MenuItem = styled.li`
  cursor: pointer;
  transition: all 0.2s ease;

  @media(min-width: 1000px) {
    & + li {
      margin-left: 2rem;
    }
  }

  @media(max-width: 1000px) {
    margin-bottom: 1rem;
  }

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

    @media(max-width: 1000px) {
      font-size: 1.2rem;
    }
  }

  a:hover{
    color: var(--purple);
  }
`;

export const ContactButton = styled.a`
  padding: 1rem;
  text-decoration: none;
  background: var(--purple);
  border-radius: 0.25rem;
  border: 0;
  outline: 0;
  color: var(--white);
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  @media(max-width: 1000px) {
    padding: 0.75rem;
    font-size: 1.2rem;
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

export const MobileMenuButton = styled.button`
  background-color: transparent;
  outline: 0;
  border: 0;
`;
