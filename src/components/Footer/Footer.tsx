import {
  CertificateBox,
  Container,
  FooterBottom,
  FooterBottomContent,
  FooterContent,
  FooterHeader,
  HeaderContainer,
  LinksBlock,
  LinksBlockTitle
} from './FooterStyles'
import logoWhite from '../../assets/logo-white.svg'
import receita from '../../assets/receita.png'
import instagranIcon from '../../assets/instagran.svg'
import whatsApp from '../../assets/whatsapp.svg'
import { FooterLink } from '../FooterLink/FooterLink'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <Container>
      <HeaderContainer>
        <FooterHeader>
          <Link to="/">
            <img src={logoWhite} alt="Logo Branco" />
          </Link>

          <div>
            <img src={instagranIcon} alt="Icone instagran" />
            <img src={whatsApp} alt="Icone WhatsApp" />
          </div>
        </FooterHeader>
      </HeaderContainer>

      <FooterContent>
        <LinksBlock>
          <LinksBlockTitle>Saiba mais</LinksBlockTitle>
          <FooterLink linkText="Quem somos" href="#" />
          <FooterLink linkText="Termos de Uso" href="#" />
          <FooterLink linkText="Política de Privacidade" href="#" />
          <FooterLink linkText="Regurlamento" href="#" />
          <FooterLink linkText="Contato" href="#" />
        </LinksBlock>

        <CertificateBox>
          <div>
            <LinksBlockTitle>Certificado de Autorização</LinksBlockTitle>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </p>
          </div>
          <img src={receita} alt="Receita Federal" />
        </CertificateBox>
      </FooterContent>

      <FooterBottom>
        <FooterBottomContent>
          <div>
            <span>MEGASONHO ® 2022</span>
            <span>R. Augusto Dias - Juazeiro do Norte - Ceará</span>
            <span>CNPJ: 000000000000</span>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </FooterBottomContent>
      </FooterBottom>
    </Container>
  )
}
