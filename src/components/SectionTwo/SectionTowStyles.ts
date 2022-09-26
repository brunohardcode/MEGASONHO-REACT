import styled from 'styled-components'
import InputMask from 'react-input-mask'

export const Container = styled.section`
  height: 552px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background: linear-gradient(
    88.31deg,
    #1374de -6.73%,
    #33a3fd 51.52%,
    #d9d9d9 98.57%
  );
  @media (min-width: 1024px) {
    height: 658px;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  max-width: 1200px;
  margin: 0 auto;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`
export const InputBox = styled.div`
  h1 {
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    text-align: center;
    margin-bottom: 16px;

    @media (min-width: 768px) {
      font-size: 32px;
    }

    #title {
      color: ${({ theme }) => theme.colors.darkBlue};
    }

    #white {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 25px;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.7;
    margin-bottom: 16px;
  }
`
export const PicturesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  #mikey-head {
    width: 100px;
    height: 100px;
  }
  #clover-icon {
    width: 57px;
    height: 57px;
  }
  #disney-castle {
    width: 90px;
    height: 120px;
  }
  #minnie-head-icon {
    width: 50px;
    height: 50px;
  }

  @media (min-width: 768px) {
    #mikey-head {
      height: 272px;
      width: 272px;
    }
    #clover-icon {
      width: 120px;
      height: 120px;
    }
    #disney-castle {
      width: 250px;
      height: 250px;
    }
    #minnie-head-icon {
      width: 100px;
      height: 100px;
    }

    @media (min-width: 1024px) {
      display: none;
    }
  }
`
export const HeadAndCloverContainer = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`
export const HeadAndCastleContainer = styled.div`
  @media (min-width: 1024px) {
    display: block;
  }
  display: none;
`

export const CompeteButtonContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  height: 50px;
  display: flex;

  button {
    border: none;
    max-width: 110px;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.colors.green};
    font-weight: 500;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.white};
  }

  padding: 8px 16px;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.05);
  border-radius: 50px;
`

export const StyledInput = styled(InputMask)`
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: 700;
  border-radius: 50px;
  color: ${({ theme }) => theme.colors.darkBlue};

  &::placeholder {
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    color: #cfd3d5;
  }
`
