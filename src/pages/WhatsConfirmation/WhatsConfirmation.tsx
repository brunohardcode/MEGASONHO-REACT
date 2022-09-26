import logoWhite from '../../assets/logo-white.svg'
import closeIcon from '../../assets/close.svg'
import mikeyBlue from '../../assets/mikey-blue.svg'
import backTree from '../../assets/back-tree.jpg'
import inputErrorIcon from '../../assets/input-error-icon.svg'

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
  Confirmation,
  InvalidCode
} from './WhatsConfirmationStyles'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export function WhatsConfirmation() {
  const navigate = useNavigate()
  const [inputTokenError, setInputTokenError] = useState(false)

  const handleConfirmWhats = async (token: string) => {
    if (!token || token.length < 6) {
      setInputTokenError(true)
      return
    }
    setInputTokenError(false)

    navigate('/lucky-number')
  }

  return (
    <Container>
      <ImageBackground>
        <img src={logoWhite} alt="Logo Branco" />
      </ImageBackground>

      <FormContainer
        style={{
          backgroundImage: `url(${backTree})`
        }}
      >
        <HeaderMobile>
          <img id="logo-white" src={logoWhite} alt="Logo Branco" />
        </HeaderMobile>
        <Form isError={inputTokenError}>
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

          <h1>Te enviamos um código via Whatsapp 📱</h1>

          <p>Digite o código que recebeu no campo abaixo</p>

          <Confirmation
            isErrored={inputTokenError}
            autoFocus
            onCompleted={handleConfirmWhats}
            length={6}
            placeholder=""
          />

          <InvalidCode isError={inputTokenError}>
            <img src={inputErrorIcon} alt="Icone de Erro" />
            <span>Codigo incorreto</span>
          </InvalidCode>
          <span>
            Não recebeu? Clique <Link to={'/'}>aqui</Link> para o código ser
            reenviado.
          </span>
        </Form>
        <GradientBottomMobile />
        <GradientBottomDesk />
      </FormContainer>
    </Container>
  )
}
