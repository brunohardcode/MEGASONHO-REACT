import logoWhite from '../../assets/logo-white.svg'
import closeIcon from '../../assets/close.svg'
import mikeyBlue from '../../assets/mikey-blue.svg'
import backFour from '../../assets/back-four.jpg'
import trevoGreen from '../../assets/trevo-green.svg'

import {
  Container,
  ImageBackground,
  FormContainer,
  HeaderMobile,
  ProgressBarMobile,
  ProgressBar,
  ProgresseBarDesk,
  GradientBottomMobile,
  Form,
  GradientBottomDesk,
  LuckyNumberBox,
  SendButton
} from './LuckyNumberStyles'
import { useNavigate } from 'react-router-dom'

export function LuckyNumber() {
  const navigate = useNavigate()

  return (
    <Container>
      <ImageBackground>
        <img src={logoWhite} alt="Logo Branco" />
      </ImageBackground>

      <FormContainer
        style={{
          backgroundImage: `url(${backFour})`
        }}
      >
        <HeaderMobile>
          <img id="logo-white" src={logoWhite} alt="Logo Branco" />
        </HeaderMobile>
        <Form>
          <ProgressBarMobile>
            <img src={mikeyBlue} alt="Icone Cabeça do mikey azul" />
            <ProgressBar>
              <div></div>
            </ProgressBar>
          </ProgressBarMobile>
          <ProgresseBarDesk>
            <div id="gray">
              <img src={mikeyBlue} alt="Icone Cabeça do mikey azul" />
              <ProgressBar>
                <div></div>
              </ProgressBar>
            </div>
            <button
              onClick={() => {
                navigate('/')
              }}
              type="button"
            >
              <img src={closeIcon} alt="Icone de fechar" />
            </button>
          </ProgresseBarDesk>

          <h1>A sua sorte está nos números 🎉</h1>

          <p>
            Aqui está o seu número que poderã trazer a tão sonhada viagem para
            Walt Disney World?
          </p>

          <LuckyNumberBox>
            <strong>1.234.567.890</strong>
            <img src={trevoGreen} alt="trevo" />
          </LuckyNumberBox>

          <span>
            Aqui está o seu número que poderã trazer a tão sonhada viagem para
            Walt Disney World?
          </span>

          <SendButton
            onClick={async () => {
              navigate('/invites')
            }}
          >
            <span>Ganhe mais números da sorte</span>
          </SendButton>
        </Form>
        <GradientBottomMobile />
        <GradientBottomDesk />
      </FormContainer>
    </Container>
  )
}
