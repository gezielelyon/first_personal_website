import { useEffect, useState } from 'react';
import Link from 'next/link';

import { HiMenu } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';

import {
  Container,
  Wrapper,
  Title,
  MobileMenu,
  Menu,
  MenuItem,
  ContactButton,
  MobileMenuButton,
} from './styles';

export function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  function handleResize() {
    const { innerWidth: width } = window;

    if (width < 1000) {
      setShowMobileMenu(true);
    } else {
      setShowMobileMenu(false);
      setMobileMenuIsOpen(false);
      setShowMobileMenu(false);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
  }, []);

  return (
    <>
      <Container>
        <Wrapper>
          <Link href="/">
            <Title>404</Title>
          </Link>

          {!showMobileMenu ? (
            <>
              <Menu>
                <MenuItem>
                  <a href="#resume">Resumo</a>
                </MenuItem>
                <MenuItem>
                  <a href="#mobile">Mobile</a>
                </MenuItem>
                <MenuItem>
                  <a href="#backend">Backend</a>
                </MenuItem>
                <MenuItem>
                  <a href="#web">Web</a>
                </MenuItem>
                <MenuItem>
                  <a href="/curriculo.pdf" download>
                    Baixar currículo
                  </a>
                </MenuItem>
              </Menu>

              <ContactButton href="mailto:geziel_barbosa_@hotmail.com">
                Entrar em contato
              </ContactButton>
            </>
          ) : (
            <MobileMenuButton
              type="button"
              onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
            >
              {mobileMenuIsOpen ? (
                <IoMdClose size={30} color="#E1E1E6" />
              ) : (
                <HiMenu size={30} color="#E1E1E6" />
              )}
            </MobileMenuButton>
          )}
        </Wrapper>
      </Container>

      {mobileMenuIsOpen && (
        <MobileMenu style={{ opacity: mobileMenuIsOpen ? 1 : 0 }}>
          <Menu>
            <MenuItem>
              <a href="#resume" onClick={() => setMobileMenuIsOpen(false)}>
                Resumo
              </a>
            </MenuItem>
            <MenuItem>
              <a href="#mobile" onClick={() => setMobileMenuIsOpen(false)}>
                Mobile
              </a>
            </MenuItem>
            <MenuItem>
              <a href="#backend" onClick={() => setMobileMenuIsOpen(false)}>
                Backend
              </a>
            </MenuItem>
            <MenuItem>
              <a href="#web" onClick={() => setMobileMenuIsOpen(false)}>
                Web
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="/curriculo.pdf"
                onClick={() => setMobileMenuIsOpen(false)}
                download
              >
                Baixar currículo
              </a>
            </MenuItem>
          </Menu>

          <ContactButton href="mailto:geziel_barbosa_@hotmail.com">
            Entrar em contato
          </ContactButton>
        </MobileMenu>
      )}
    </>
  );
}
