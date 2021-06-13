import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 1.5rem;
`;

export const Button = styled.a`
  padding: 0.5rem;
  background-color: var(--green);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    transform: translateY(10%);
  }

  & + & {
    margin-left: 1rem;
  }
`;
