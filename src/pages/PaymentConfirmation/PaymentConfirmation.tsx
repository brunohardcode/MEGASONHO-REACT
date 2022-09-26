import logoWhite from '../../assets/logo-white.svg'
import closeIcon from '../../assets/close.svg'
import mikeyBlue from '../../assets/mikey-blue.svg'
import backEite from '../../assets/back-eite.jpg'
import whats from '../../assets/whatsapp.svg'
import mikeyGreen from '../../assets/mikey-green.svg'

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
  DocumentContinueButton,
  TextIconBox
} from './PaymentConfirmationStyles'
import { useNavigate } from 'react-router-dom'

export function PaymentConfirmation() {
  const navigate = useNavigate()

  return (
    <Container>
      <ImageBackground>
        <img src={logoWhite} alt="Logo Branco" />
      </ImageBackground>

      <FormContainer
        style={{
          backgroundImage: `url(${backEite})`
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

          <h1>Aqui será um título em destaque ✅</h1>

          <p>
            Aqui será uma descrição para completar o título e falar o número da
            sorte para o usuário:
          </p>

          <TextIconBox>
            <img src={mikeyGreen} alt="mikey" />
            <span>
              Aqui será uma descrição para completar alguma informação sobre o
              pagamento caso for necessário:
            </span>
          </TextIconBox>
          <TextIconBox>
            <img src={mikeyGreen} alt="mikey" />
            <span>
              Aqui será uma descrição para completar alguma informação sobre o
              pagamento caso for necessário:
            </span>
          </TextIconBox>
          <TextIconBox>
            <img src={mikeyGreen} alt="mikey" />
            <span>
              Aqui será uma descrição para completar alguma informação sobre o
              pagamento caso for necessário:
            </span>
          </TextIconBox>

          <DocumentContinueButton type="submit">
            <img src={whats} alt="whats" />
            <strong> Tenho uma dúvida</strong>
          </DocumentContinueButton>
        </Form>
        <GradientBottomMobile />
        <GradientBottomDesk />
      </FormContainer>
    </Container>
  )
}
