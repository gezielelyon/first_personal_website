import Link from 'next/link';

import {
  Container,
  Wrapper,
  Title,
  Menu,
  MenuItem,
  ContactButton,
} from './styles';

interface IHeaderProps {
  openEmailModal: () => void;
}

export function Header({openEmailModal}: IHeaderProps) {
  return (
    <Container>
      <Wrapper>
        <Link href="/">
          <Title>Geziel Elyon</Title>
        </Link>

        <Menu>
          <MenuItem>
            <a href="/curriculo.pdf" download>Baixar currículo</a>
          </MenuItem>
        </Menu>

        <ContactButton type="button" onClick={openEmailModal}>
          Entrar em contato
        </ContactButton>
      </Wrapper>
    </Container>
  );
}
