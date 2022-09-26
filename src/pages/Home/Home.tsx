import { Header } from '../../components/Header/Header'
import arrowRigthImage from '../../assets/arrow-rigth.svg'
import exclamationImg from '../../assets/exclamation.svg'
import { validate } from 'gerador-validador-cpf'
import * as S from './HomeStyles'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { MaskedInput } from '../../components/MaskedInput/MaskedInput'
import { SectionTwo } from '../../components/SectionTwo/SectionTwo'
import { SectionTree } from '../../components/SectionTree/SectionTree'
import { SectionVideo } from '../../components/SectionVideo/SectionVideo'
import { SectionFive } from '../../components/SectionFive/SetionFive'
import { Footer } from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'

interface FormData {
  document: string
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
    })
})

export function Home() {
  const navigate = useNavigate()

  async function handleCheckDocument(values: FormData) {
    try {
      const response = await api.get('/users/check-document', {
        params: {
          document: values.document.replace(/\D+/g, '')
        },
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })

      console.log(response)
    } catch (error) {}

    navigate('/register', {
      state: {
        document: values.document
      }
    })
  }
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<FormData>({
    resolver: yupResolver(formSchema)
  })

  return (
    <>
      <Header />
      <S.HeroSection>
        <S.GradinetBackground>
          <S.HeroContent>
            <div>
              <S.HeroTitle>
                Aqui será um título em destaque, mas deixarei um texto de apoio.
              </S.HeroTitle>
              <S.HeroSubtitle>
                Aqui será uma descrição para completar o título de apoio, mas
                deixarei um texto de apoio para preencher a copy.
              </S.HeroSubtitle>
            </div>
            <S.DocumentFormContainer>
              <S.DocumentForm onSubmit={handleSubmit(handleCheckDocument)}>
                <S.DocumentFormTitle>
                  Aqui será um título, mas deixarei um texto de apoio.
                </S.DocumentFormTitle>

                <MaskedInput
                  register={register}
                  isValid={isValid}
                  name="document"
                  mask="999.999.999-99"
                  error={errors.document}
                  placeholder="Digite o seu CPF"
                  type="text"
                />

                <S.DocumentContinueButton type="submit">
                  <span> Continuar</span>
                  <img src={arrowRigthImage} alt="Seta para Direita" />
                </S.DocumentContinueButton>
              </S.DocumentForm>
              <img
                id="exclamation"
                src={exclamationImg}
                alt="Ponto de exclamação"
              />
            </S.DocumentFormContainer>
          </S.HeroContent>
        </S.GradinetBackground>
      </S.HeroSection>
      <SectionTwo />
      <SectionTree />
      <SectionVideo />
      <SectionFive />
      <Footer />
    </>
  )
}
