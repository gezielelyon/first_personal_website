import {AiFillGithub, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai';

import {Container, Content, SocialMedia} from './styles';

export function Footer() {
  return(
    <Container>
      <Content>  
        <strong>@2021 - Criado e mantido por <i>Geziel Elyon</i></strong>
        <span>geziel_barbosa_@hotmail.com</span>
        <div>
          <SocialMedia href="https://github.com/programador404" target="_black">
            <AiFillGithub color="#fff" size={30} />
          </SocialMedia>
          <SocialMedia href="https://www.linkedin.com/in/geziel-elyon-a0a1381a5/" target="_black">
            <AiFillLinkedin color="#fff" size={30} />
          </SocialMedia>
          <SocialMedia href="https://www.instagram.com/_programador404/?hl=pt-br" target="_black">
            <AiFillInstagram color="#fff" size={30} />
          </SocialMedia>
        </div>
      </Content>
    </Container>
  );
}