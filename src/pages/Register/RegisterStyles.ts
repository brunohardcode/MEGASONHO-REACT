import styled, { css } from 'styled-components'
import checkWhite from '../../assets/check-white.svg'
import imageBackTwo from '../../assets/back-two.jpg'
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
    background-image: url(${imageBackTwo});
    background-repeat: no-repeat;
  }
`

export const FormContainer = styled.div`
  padding: 20px;
  position: relative;
  background-position: 90%;
  background-size: cover;

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
  button {
    border: none;
    background: transparent;
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
export const Form = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 24px 20px;
  border-radius: 4px;

  @media (min-width: 1024px) {
    max-width: 448px;
  }
`
export const ProgressBarMobile = styled.div`
  margin-bottom: 32px;
  img {
    margin-left: 7%;
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
    width: 14%;
    background: ${({ theme }) => theme.colors.blue};
  }
`
export const ProgresseBarDesk = styled.div`
  display: none;

  @media (min-width: 1024px) {
    #gray {
      width: 100%;
    }

    img {
      margin-left: 7%;
    }

    button {
      border: none;
      background: transparent;
    }

    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
  }
`
export const TermsCheckBox = styled.div`
  display: flex;
  gap: 10px;

  span {
    text-align: left;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.darkBlue};
  }
`

interface CheckBoxProps {
  isError: boolean
}

export const CheckBox = styled.input<CheckBoxProps>`
  min-width: 16px;
  min-height: 16px;
  max-height: 16px;
  border-radius: 4px;
  margin-top: 2px;
  border: 2px solid ${({ theme }) => theme.colors.blue};
  appearance: none;
  cursor: pointer;
  ${props =>
    props.isError &&
    css`
      border-color: ${({ theme }) => theme.colors.red};
    `};

  &:checked {
    border-color: ${({ theme }) => theme.colors.green};
    background-color: ${({ theme }) => theme.colors.green};
    background-image: url(${checkWhite});
    background-repeat: no-repeat;
  }
`

export const SendButton = styled.button`
  height: 37px;
  border-radius: 100px;
  padding: 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: 0.5s ease;
  margin-top: 64px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.green};
    span {
      color: ${({ theme }) => theme.colors.white};
    }
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
