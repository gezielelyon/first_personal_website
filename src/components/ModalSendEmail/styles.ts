import styled from 'styled-components';

export const Container = styled.div`
  background: var(--background-dark);
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: var(--text);
    font-family: "Caveat brush";
    margin-bottom: 2rem;
  }
`;

export const Form = styled.form`
  width: 100%;
`;

export const DivInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  span {
    color: var(--text);
    margin-bottom: 0.5rem;
  }

  input {
    height: 3.5rem;
    width: 100%;
    display: block;
    border-radius: 0.25rem;
    margin-bottom: 1.5rem;
    border: 1px solid var(--background-light);
    padding: 0 1rem;
    font-size: 1rem;
    font-weight: 600;
    color: var(--text);
    background: var(--background-light);
  }

  textarea {
    width: 100%;
    min-height: 10rem;
    border: 0;
    padding: 1rem;
    font-size: 1rem;
    font-weight: 600;
    color: var(--text);
    border-radius: 0.25rem;
    background: var(--background-light);
    resize: none;
  }
`;

export const SendButton = styled.button`
  height: 4rem;
  width: 100%;
  margin-top: 2rem;
  background: var(--purple);
  border-radius: 0.25rem;
  border: 0;
  outline: 0;
  transition: all 0.2s ease;

  font-size: 1.2rem;
  font-weight: 600;

  &:hover {
    filter: brightness(0.8);
  }
`;
