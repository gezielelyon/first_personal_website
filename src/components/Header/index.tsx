import {
  Container,
  Wrapper,
  Title,
  Menu,
  MenuItem,
  ContactButton,
} from './styles';

export function Header() {
  return (
    <Container>
      <Wrapper>
        <Title>Geziel Elyon</Title>

        <Menu>
          <MenuItem>
            <span>Início</span>
          </MenuItem>
          <MenuItem>
            <span>Sobre mim</span>
          </MenuItem>
          <MenuItem>
            <span>Baixar currículo</span>
          </MenuItem>
        </Menu>

        <ContactButton type="button" onClick={() => {}}>
          Entrar em contato
        </ContactButton>
      </Wrapper>
    </Container>
  );
}
