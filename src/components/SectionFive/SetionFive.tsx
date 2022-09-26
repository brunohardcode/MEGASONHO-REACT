import competeNowCloverIcon from '../../assets/competenow-clover.svg'
import isFreImage from '../../assets/is-free.jpg'
import { QuestionBox } from '../QuestionBox/QuestionBox'

import {
  BoxOne,
  CompeteNowButton,
  Container,
  IsFreeContent,
  QuestinsContainer
} from './SectionFiveStyles'

export function SectionFive() {
  return (
    <Container>
      <IsFreeContent>
        <BoxOne>
          <h1>Mickey Mouse e Cinderela e estão te esperando.</h1>
          <CompeteNowButton>
            <span>Concorra agora mesmo</span>
            <img src={competeNowCloverIcon} alt="Trevo da sorte" />
          </CompeteNowButton>
        </BoxOne>
        <img id="is-free" src={isFreImage} alt="Card É Gratis" />
      </IsFreeContent>

      <QuestinsContainer>
        <h1>
          Ainda está com dúvidas? <span>Vamos te ajudar!</span>
        </h1>

        <QuestionBox
          response="Aqui será campo para resposta referente a cada pergunta"
          question="Aqui será o texto com uma pergunta das dúvidas mais comuns entre os clientes da MEGASONHO"
        />
        <QuestionBox
          response="Aqui será campo para resposta referente a cada pergunta"
          question="Aqui será o texto com uma pergunta das dúvidas mais comuns entre os clientes da MEGASONHO"
        />
        <QuestionBox
          response="Aqui será campo para resposta referente a cada pergunta"
          question="Aqui será o texto com uma pergunta das dúvidas mais comuns entre os clientes da MEGASONHO"
        />
        <QuestionBox
          response="Aqui será campo para resposta referente a cada pergunta"
          question="Aqui será o texto com uma pergunta das dúvidas mais comuns entre os clientes da MEGASONHO"
        />
      </QuestinsContainer>
    </Container>
  )
}
