import dragonImage from '../../assets/dragon.jpg'
import competeNowCloverIcon from '../../assets/competenow-clover.svg'
import friendsImage from '../../assets/friends.jpg'
import {
  CompeteNowButton,
  Container,
  Content,
  ContentBlock,
  DoPartBox,
  ImageContainer
} from './SectionTreeStyles'

export function SectionTree() {
  return (
    <Container>
      <Content>
        <ImageContainer>
          <img src={dragonImage} alt="Drago harry potter" />
        </ImageContainer>

        <ContentBlock>
          <h1>Aqui será um título, mas deixarei um texto de apoio.</h1>
          <h2>
            Aqui será uma descrição para completar o título de apoio, mas
            deixarei um texto de apoio para preencher a copy.
          </h2>

          <CompeteNowButton>
            <span>Concorra agora mesmo</span>
            <img src={competeNowCloverIcon} alt="Trevo" />
          </CompeteNowButton>
          <DoPartBox>
            <img src={friendsImage} alt="Amigos" />
            <span>Faça parte você também!</span>
          </DoPartBox>
        </ContentBlock>
      </Content>
    </Container>
  )
}
