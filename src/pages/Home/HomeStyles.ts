import styled from 'styled-components'
import disneyCasttleImg from '../../assets/disney-casttle.jpg'

export const HeroSection = styled.section`
  height: 682px;
  background-image: url(${disneyCasttleImg});
  background-size: cover;
  background-position: 55%;
  background-repeat: no-repeat;
  @media (min-width: 1024px) {
    height: 852px;
  }
`
export const GradinetBackground = styled.div`
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.6) 36.73%,
    rgba(0, 0, 0, 0.24) 65.43%,
    rgba(0, 0, 0, 0) 75%
  );
  @media (min-width: 1024px) {
    padding-top: 120px;
    background: linear-gradient(
      84.31deg,
      rgba(27, 27, 27, 0.5) 0.6%,
      rgba(27, 27, 27, 0.6) 49.02%,
      rgba(27, 27, 27, 0) 81.64%
    );
  }
`
export const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 120px;
  }
  @media (min-width: 1200px) {
    padding: unset;
  }
`
export const HeroTitle = styled.h1`
  margin-top: 80px;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  line-height: 31px;
  text-align: center;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 54px;
  }
  @media (min-width: 1024px) {
    margin-top: unset;
    text-align: left;
  }
`
export const HeroSubtitle = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.9;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 26px;
  }
  @media (min-width: 1024px) {
    text-align: left;
  }
`
export const DocumentFormContainer = styled.div`
  height: 282px;
  width: 100%;

  #exclamation {
    display: none;
  }
  @media (min-width: 1024px) {
    margin-top: unset;
    display: flex;
    align-items: center;
    gap: 40px;
    max-width: 408px;
    #exclamation {
      display: block;
    }
  }
`
export const DocumentForm = styled.form`
  border-radius: 16px;
  margin-top: 34px;
  padding: 40px 12px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  @media (min-width: 1024px) {
    max-width: 360px;
    width: 100%;
  }
`
export const DocumentFormTitle = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.darkBlue};
  text-align: left;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 28px;
  }
`
export const DocumentFormInput = styled.input`
  margin-top: 32px;
  border: none;
  border-bottom: 1px solid #cfd3d5;
  width: 100%;
  margin-bottom: 40px;
  padding: 8px 0;

  &::placeholder {
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    color: #cfd3d5;
  }
`
export const DocumentContinueButton = styled.button`
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

  img {
    width: 16px;
    height: 16px;
  }

  span {
    font-weight: 500;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.darkBlue};
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.green};
    span {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`
