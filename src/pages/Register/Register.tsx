import logoWhite from '../../assets/logo-white.svg'
import closeIcon from '../../assets/close.svg'
import mikeyBlue from '../../assets/mikey-blue.svg'

import { MaskedInput } from '../../components/MaskedInput/MaskedInput'
import * as yup from 'yup'
import { validate } from 'gerador-validador-cpf'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Input } from '../../components/Input/Input'
import backOneImage from '../../assets/back-one.jpg'

import {
  Container,
  ImageBackground,
  FormContainer,
  HeaderMobile,
  ProgressBarMobile,
  ProgressBar,
  ProgresseBarDesk,
  TermsCheckBox,
  SendButton,
  GradientBottomMobile,
  Form,
  CheckBox,
  GradientBottomDesk
} from './RegisterStyles'
import { useNavigate } from 'react-router-dom'

interface FormData {
  document: string
  name: string
  cellphone: string
  cellphoneConfirmation: string
  email: string
  emailConfirmation: string
  acceptComunication: string
  acceptTerms: string
}

const formSchema = yup.object().shape({
  document: yup
    .string()
    .test('len', 'Digite seu CPF', (inputValue) => {
      const inputValuelengthWhitOnlyNumbers = inputValue?.replace(
        /\D+/g,
        ''
      ).length

      return inputValuelengthWhitOnlyNumbers === 11
    })
    .test('test-invalid-cpf', 'CPF Inválido', (cpf) => {
      return validate(String(cpf))
    }),
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
  cellphoneConfirmation: yup
    .string()
    .test('len', 'Digite um telefone valido', (inputValue) => {
      const inputValuelengthWhitOnlyNumbers = inputValue?.replace(
        /\D+/g,
        ''
      ).length
      return inputValuelengthWhitOnlyNumbers === 11
    })
    .required('O campo confirme o celular é obrigátorio')
    .oneOf(
      [yup.ref('cellphone'), undefined],
      'Confirmação de telefone incorreta'
    ),
  email: yup
    .string()
    .required('E-mail obrigatório')
    .email('Digite um e-mail válido'),

  emailConfirmation: yup
    .string()
    .oneOf([yup.ref('email'), undefined], 'Os emails não conencidem')
    .required('Ta faltalndo esse'),

  acceptComunication: yup.bool().oneOf([true]),
  acceptTerms: yup.bool().oneOf([true])
})

export function Register() {
  const navigate = useNavigate()

  async function handleRegister(values: FormData) {
    console.log(values)

    navigate('/whats-confirmation')
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
          backgroundImage: `url(${backOneImage})`
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

          <MaskedInput
            register={register}
            isValid={!errors.document && isSubmitted}
            name="document"
            mask="999.999.999-99"
            error={errors.document}
            label="CPF:"
            type="text"
          />

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
          <MaskedInput
            register={register}
            isValid={!errors.cellphoneConfirmation && isSubmitted}
            name="cellphoneConfirmation"
            mask="(99) 99999-9999"
            error={errors.cellphoneConfirmation}
            label="Confirmação de Celular/Whatsapp:"
            type="tel"
          />
          <Input
            register={register}
            isValid={!errors.email && isSubmitted}
            name="email"
            error={errors.email}
            label="E-mail:"
            type="email"
          />
          <Input
            register={register}
            isValid={!errors.emailConfirmation && isSubmitted}
            name="emailConfirmation"
            error={errors.emailConfirmation}
            label="Confirmação de e-mail:"
            type="email"
          />
          <TermsCheckBox>
            <CheckBox
              {...register('acceptComunication')}
              isError={!!errors.acceptComunication}
              name="acceptComunication"
              type="checkbox"
            />
            <span>Aceito receber comunicações da MEGASONHO pelo WhatsApp</span>
          </TermsCheckBox>
          <TermsCheckBox>
            <CheckBox
              {...register('acceptTerms')}
              isError={!!errors.acceptTerms}
              name="acceptTerms"
              type="checkbox"
            />
            <span>
              Eu li, estou ciente das condições de tratamento dos meus dados
              pessoais e dou meu consentimento, quando aplicável, conforme
              descrito nesta Política de Privacidade.
            </span>
          </TermsCheckBox>

          <SendButton type="submit">
            <span>Enviar</span>
          </SendButton>
        </Form>
        <GradientBottomMobile />
        <GradientBottomDesk />
      </FormContainer>
    </Container>
  )
}
