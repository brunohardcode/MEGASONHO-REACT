import styled, { css } from 'styled-components'
import imageBackFour from '../../assets/back-four.jpg'
import CodeLib from 'react-input-verification-code'

interface InputPros {
  isErrored: boolean
}

export const Confirmation = styled(CodeLib)<InputPros>``

export const Container = styled.div`
  height: 100vh;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`
export const ImageBackground = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    align-items: flex-start;
    justify-content: center;

    img {
      max-width: 432px;
      width: 100%;
      margin-top: 32px;
    }
    background-image: url(${imageBackFour});
    background-repeat: no-repeat;
    background-position: center;
  }
`

export const FormContainer = styled.div`
  padding: 20px;
  position: relative;
  background-position: 90%;
  background-size: cover;
  height: 100%;

  @media (min-width: 1024px) {
    background-image: unset !important;
  }
`
export const HeaderMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  #close-icon {
    height: 32px;
    width: 32px;
  }

  #logo-white {
    max-width: 176px;
    width: 100%;
    height: 24px;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`

export const Form = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 24px 20px;
  border-radius: 4px;

  h1 {
    text-align: left;
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  p {
    text-align: left;
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    color: ${({ theme }) => theme.colors.darkBlue};
    margin-top: 16px;
    margin-bottom: 16px;
  }

  span {
    text-align: left;
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    color: ${({ theme }) => theme.colors.darkBlue};
    a {
      color: ${({ theme }) => theme.colors.blue};
      text-decoration: none;
    }
  }

  .ReactInputVerificationCode__container {
    width: 100%;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .ReactInputVerificationCode__item {
    height: 38px;
    width: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 1024px) {
    max-width: 448px;
  }
`
export const ProgressBarMobile = styled.div`
  margin-bottom: 32px;
  img {
    margin-left: 30%;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`
export const ProgressBar = styled.div`
  height: 10px;
  width: 100%;
  border-radius: 100px;
  background-color: #efefef;

  div {
    height: 100%;
    border-radius: 100px;
    width: 42%;
    background: ${({ theme }) => theme.colors.blue};
  }
`
export const ProgresseBarDesk = styled.div`
  display: none;
  button {
    border: none;
    background: transparent;
  }
  @media (min-width: 1024px) {
    #gray {
      width: 100%;
    }
    img {
      margin-left: 30%;
    }
    button {
      display: none;
    }
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
  }
`

export const GradientBottomMobile = styled.div`
  height: 8px;
  width: 100%;
  background: linear-gradient(
    88.31deg,
    #1374de -6.73%,
    #33a3fd 51.52%,
    #d9d9d9 98.57%
  );

  position: absolute;

  bottom: 0;
  right: 0;
  left: 0;
`

export const GradientBottomDesk = styled.div`
  height: 8px;
  width: 100%;
  background: linear-gradient(
    88.31deg,
    #1374de -6.73%,
    #33a3fd 51.52%,
    #d9d9d9 98.57%
  );

  position: absolute;

  bottom: 0;
  right: 0;
  left: 0;
`

interface InvalidCodeProps {
  isError: boolean
}

export const InvalidCode = styled.div<InvalidCodeProps>`
  display: none;
  align-items: center;
  height: 20px;
  gap: 8px;
  margin-bottom: 16px;
  img {
    height: 20px;
    width: 20px;
  }

  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  ${props =>
    props.isError &&
    css`
      display: flex;
    `};
`

export const LuckyNumberBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  height: 64px;
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 16px 20px;
  margin-bottom: 16px;

  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: ${({ theme }) => theme.colors.darkBlue};
  }
`

export const SendButton = styled.button`
  height: 44px;
  border-radius: 100px;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: 0.5s ease;
  margin-top: 64px;
  background-color: ${({ theme }) => theme.colors.green};
  span {
    color: ${({ theme }) => theme.colors.white};
  }
`
