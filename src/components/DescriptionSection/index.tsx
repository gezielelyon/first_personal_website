import { SocialButtons } from '../SocialButtons/index';

import { Container, Wrapper, InfoDiv, InfoContent, ImageDiv } from './styles';

interface IDescriptionSectionProps {
  id: string;
  title: string;
  description: string;
  reverse: boolean;
  asset: string;
}

export function DescriptionSection({
  id,
  title,
  description,
  reverse,
  asset,
}: IDescriptionSectionProps) {
  return (
    <Container id={id} reverse={reverse}>
      <Wrapper reverse={reverse}>
        <InfoDiv reverse={reverse}>
          <InfoContent>
            <h1>{title}</h1>
            <p>{description}</p>
            <SocialButtons />
          </InfoContent>
        </InfoDiv>
        <ImageDiv reverse={reverse}>
          <img src={asset} alt="Image" />
        </ImageDiv>
      </Wrapper>
    </Container>
  );
}
