import cloverIcon from '../../assets/clover.svg'
import mikeyHeadIcon from '../../assets/mickey.svg'
import minnieHeadIcon from '../../assets/minnie.svg'
import castleIcon from '../../assets/castle.svg'
import headAndCastleIcon from '../../assets/head-and-casttle.svg'
import headAndCloverIcon from '../../assets/head-and-clover.svg'
import {
  CompeteButtonContainer,
  Container,
  Content,
  HeadAndCastleContainer,
  HeadAndCloverContainer,
  InputBox,
  PicturesContainer,
  StyledInput
} from './SectionTowStyles'

export function SectionTwo() {
  return (
    <Container>
      <Content>
        <HeadAndCloverContainer>
          <img src={headAndCloverIcon} alt="Cabeça do mickey" />
        </HeadAndCloverContainer>

        <InputBox>
          <h1>
            <span id="title"> Aqui será um título</span>
            <span id="white">, mas deixarei um texto de apoio.</span>
          </h1>
          <p>
            Aqui será uma descrição para completar o título de apoio, mas
            deixarei um texto de apoio para preencher a copy.
          </p>
          <CompeteButtonContainer>
            <StyledInput
              mask="999.999.999-99"
              type="text"
              placeholder="Digite o seu CPF"
            />
            <button>Concorrer</button>
          </CompeteButtonContainer>
        </InputBox>
        <HeadAndCastleContainer>
          <img src={headAndCastleIcon} alt="Cabeça do mickey" />
        </HeadAndCastleContainer>

        <PicturesContainer>
          <img id="mikey-head" src={mikeyHeadIcon} alt="Cabeça do mickey" />
          <img id="clover-icon" src={cloverIcon} alt="Imagem de um trevo" />
          <img id="disney-castle" src={castleIcon} alt="Castelo da disney" />
          <img
            id="minnie-head-icon"
            src={minnieHeadIcon}
            alt="Cabeça da minnie"
          />
        </PicturesContainer>
      </Content>
    </Container>
  )
}
