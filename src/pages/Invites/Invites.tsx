import logoWhite from '../../assets/logo-white.svg'
import closeIcon from '../../assets/close.svg'
import mikeyBlue from '../../assets/mikey-blue.svg'

import { MaskedInput } from '../../components/MaskedInput/MaskedInput'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Input } from '../../components/Input/Input'
import backFive from '../../assets/back-five.jpg'

import {
  Container,
  ImageBackground,
  FormContainer,
  HeaderMobile,
  ProgressBarMobile,
  ProgressBar,
  ProgresseBarDesk,
  SendButton,
  GradientBottomMobile,
  Form,
  GradientBottomDesk
} from './InviteStyles'
import { useNavigate } from 'react-router-dom'

interface FormData {
  name: string
  cellphone: string
  name2: string
  cellphone2: string
  name3: string
  cellphone3: string
}

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required('O campo nome é obrigátorio.')
    .matches(/^[A-zÀ-ú\s]+$/, 'Digite apenas seu nome.'),
  cellphone: yup
    .string()
    .test('len', 'Digite um telefone valido', (inputValue) => {
      const inputValuelengthWhitOnlyNumbers = inputValue?.replace(
        /\D+/g,
        ''
      ).length
      return inputValuelengthWhitOnlyNumbers === 11
    })
    .required('O campo celular é obrigátorio'),
  name2: yup
    .string()
    .required('O campo nome é obrigátorio.')
    .matches(/^[A-zÀ-ú\s]+$/, 'Digite apenas seu nome.'),
  cellphone2: yup
    .string()
    .test('len', 'Digite um telefone valido', (inputValue) => {
      const inputValuelengthWhitOnlyNumbers = inputValue?.replace(
        /\D+/g,
        ''
      ).length
      return inputValuelengthWhitOnlyNumbers === 11
    })
    .required('O campo celular é obrigátorio'),
  name3: yup
    .string()
    .required('O campo nome é obrigátorio.')
    .matches(/^[A-zÀ-ú\s]+$/, 'Digite apenas seu nome.'),
  cellphone3: yup
    .string()
    .test('len', 'Digite um telefone valido', (inputValue) => {
      const inputValuelengthWhitOnlyNumbers = inputValue?.replace(
        /\D+/g,
        ''
      ).length
      return inputValuelengthWhitOnlyNumbers === 11
    })
    .required('O campo celular é obrigátorio')
})

export function Invites() {
  const navigate = useNavigate()

  async function handleRegister(values: FormData) {
    console.log(values)

    navigate('/plans')
  }
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted }
  } = useForm<FormData>({
    resolver: yupResolver(formSchema)
  })

  return (
    <Container>
      <ImageBackground>
        <img src={logoWhite} alt="Logo Branco" />
      </ImageBackground>

      <FormContainer
        style={{
          backgroundImage: `url(${backFive})`
        }}
      >
        <HeaderMobile>
          <img id="logo-white" src={logoWhite} alt="Logo Branco" />

          <button
            onClick={() => {
              navigate('/')
            }}
            type="button"
          >
            <img id="close-icon" src={closeIcon} alt="Icone de fechar" />
          </button>
        </HeaderMobile>
        <Form onSubmit={handleSubmit(handleRegister)}>
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

          <h1>Compartilhe seu link e aumente suas chances!</h1>

          <p>
            Aqui será uma descrição para completar o título e falar o número da
            sorte para o usuário:
          </p>

          <Input
            register={register}
            isValid={!errors.name && isSubmitted}
            name="name"
            error={errors.name}
            label="Nome Completo:"
            type="text"
          />

          <MaskedInput
            register={register}
            isValid={!errors.cellphone && isSubmitted}
            name="cellphone"
            mask="(99) 99999-9999"
            error={errors.cellphone}
            label="Celular/Whatsapp:"
            type="tel"
          />
          <Input
            register={register}
            isValid={!errors.name2 && isSubmitted}
            name="name2"
            error={errors.name2}
            label="Nome Completo:"
            type="text"
          />

          <MaskedInput
            register={register}
            isValid={!errors.cellphone2 && isSubmitted}
            name="cellphone2"
            mask="(99) 99999-9999"
            error={errors.cellphone2}
            label="Celular/Whatsapp:"
            type="tel"
          />
          <Input
            register={register}
            isValid={!errors.name3 && isSubmitted}
            name="name3"
            error={errors.name3}
            label="Nome Completo:"
            type="text"
          />

          <MaskedInput
            register={register}
            isValid={!errors.cellphone3 && isSubmitted}
            name="cellphone3"
            mask="(99) 99999-9999"
            error={errors.cellphone3}
            label="Celular/Whatsapp:"
            type="tel"
          />

          <SendButton type="submit">
            <span>Continuar</span>
          </SendButton>
        </Form>
        <GradientBottomMobile />
        <GradientBottomDesk />
      </FormContainer>
    </Container>
  )
}
