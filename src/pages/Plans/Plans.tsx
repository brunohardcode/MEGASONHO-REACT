import logoWhite from '../../assets/logo-white.svg'
import closeIcon from '../../assets/close.svg'
import mikeyBlue from '../../assets/mikey-blue.svg'
import backSix from '../../assets/back-six.jpg'
import trevoBlue from '../../assets/trevo-blue.svg'
import numbers from '../../assets/numbers.svg'

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
  TimeBox,
  NumbersPlansBox,
  Plan,
  LuckNumberPlan100Button
} from './PlansStyles'
import { useNavigate } from 'react-router-dom'

export function Plans() {
  const navigate = useNavigate()

  return (
    <Container>
      <ImageBackground>
        <img src={logoWhite} alt="Logo Branco" />
      </ImageBackground>

      <FormContainer
        style={{
          backgroundImage: `url(${backSix})`
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

          <h1>Aqui será um título em destaque ⏱</h1>

          <p>
            Essa oportunidade de aumentar a sua chance de ganhar e vai acabar
            em:
          </p>

          <TimeBox>
            <strong>10:00</strong>
          </TimeBox>

          <LuckNumberPlan100Button
            onClick={() => {
              navigate('/payment')
            }}
          >
            <img src={numbers} alt="numeros" />
          </LuckNumberPlan100Button>

          <NumbersPlansBox>
            <Plan
              onClick={() => {
                navigate('/payment')
              }}
            >
              <div>
                <img src={trevoBlue} alt="numeros" />
                <span>03 Números</span>
              </div>
              <strong>R$ 24,90</strong>
              <p>R$ 8,30 por número</p>
            </Plan>
            <Plan
              onClick={() => {
                navigate('/payment')
              }}
            >
              <div>
                <img src={trevoBlue} alt="numeros" />
                <span>50 Números</span>
              </div>
              <strong>R$ 149,90</strong>
              <p>R$ 2,99 por número</p>
            </Plan>
            <Plan
              onClick={() => {
                navigate('/payment')
              }}
            >
              <div>
                <img src={trevoBlue} alt="numeros" />
                <span>25 Números</span>
              </div>
              <strong>R$ 99,90</strong>
              <p>R$ 3,99 por número</p>
            </Plan>
            <Plan
              onClick={() => {
                navigate('/payment')
              }}
            >
              <div>
                <img src={trevoBlue} alt="numeros" />
                <span>10 Números</span>
              </div>
              <strong>R$ 49,90</strong>
              <p>R$ 4,99 por número</p>
            </Plan>
          </NumbersPlansBox>
        </Form>
        <GradientBottomMobile />
        <GradientBottomDesk />
      </FormContainer>
    </Container>
  )
}
