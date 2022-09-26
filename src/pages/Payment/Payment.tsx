import logoWhite from '../../assets/logo-white.svg'
import closeIcon from '../../assets/close.svg'
import mikeyBlue from '../../assets/mikey-blue.svg'
import backSeven from '../../assets/back-seven.jpg'
import pix from '../../assets/pix.svg'

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
} from './PaymentStyles'
import { useNavigate } from 'react-router-dom'

export function Payment() {
  const navigate = useNavigate()

  return (
    <Container>
      <ImageBackground>
        <img src={logoWhite} alt="Logo Branco" />
      </ImageBackground>

      <FormContainer
        style={{
          backgroundImage: `url(${backSeven})`
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

          <h1>Aqui será um título em destaque 🥳</h1>

          <p>
            Aqui será uma descrição para completar o título e falar o número da
            sorte para o usuário:
          </p>

          <LuckyNumberBox>
            <img src={pix} alt="trevo" />
            <strong>16.623.206/0001-08</strong>
          </LuckyNumberBox>

          <span>
            Aqui será uma descrição para completar alguma informação sobre o
            pagamento caso for necessário:
          </span>

          <SendButton
            onClick={() => {
              navigate('/payment-confirmation')
            }}
          >
            <span>Realizei o pagamento, quero continuar</span>
          </SendButton>
        </Form>
        <GradientBottomMobile />
        <GradientBottomDesk />
      </FormContainer>
    </Container>
  )
}
