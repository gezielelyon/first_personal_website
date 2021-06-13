import {AiFillGithub, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai';

import {Container, Button} from './styles';

export function SocialButtons() {
  return(
    <Container>
      <Button href="https://github.com/programador404" target="_black">
        <AiFillGithub color="#000" size={30} opacity={0.7} />
      </Button>
      <Button href="https://www.linkedin.com/in/geziel-elyon-a0a1381a5/" target="_black" style={{backgroundColor: '#78D1E1'}}>
        <AiFillLinkedin color="#000" size={30} opacity={0.7} />
      </Button>
      <Button href="https://www.instagram.com/_programador404/?hl=pt-br" target="_black" style={{backgroundColor: '#E96379'}}>
        <AiFillInstagram color="#000" size={30} opacity={0.7} />
      </Button>
    </Container>
  );
}
