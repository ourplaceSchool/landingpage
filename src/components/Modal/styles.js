import styled from "styled-components";
import { device } from "../../device";
import houseLogo from '../../assets/images/house.png';
import sunIcon from '../../assets/images/sun-icon.png';
import rainbowIcon from '../../assets/images/rainbow-icon.png';
import manchaLaranja from '../../assets/images/mancha-laranja.png';
import manchaAmarela from '../../assets/images/mancha--amarela.png';

export const ModalCard = styled.div`
  width: 100%;
  height: 385px;
  margin: 5px;
  border-radius: 8px;
  box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  z-index: 1;
  overflow: hidden;
  cursor: pointer;

  @media ${device.tablet} { 
    width: 46%;
  }
  @media ${device.desktop} { 
    width: 25%;
    height: 610px;
  }
`
export const CardText = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 10px;
  z-index: 2;
`;
export const TitleCard = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  font-size: 16px;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  margin: 3px;

  @media ${device.desktop} { 
    font-size: 30px;
  }
`;
export const InfoCard = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 10px;
  text-align: center;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  margin: 3px;
  padding: 10px;
  z-index: 2;
  overflow: scroll;

  @media ${device.tablet} { 
    font-size: 12px;
  }

  @media ${device.desktop} { 
    font-size: 25px;
  }
`;
export const HouseLogo = styled.div `
  background-image: url(${houseLogo});
  background-repeat: no-repeat;
  background-size: contain;
  opacity: .6;
  width: 153px;
  height: 88px;
  align-self: baseline;
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 22px;
  margin-left: 13px;
  z-index: 0;

  @media ${device.tablet} { 
    
  }
`;
export const SunIcon = styled.div `
  background-image: url(${sunIcon});
  background-repeat: no-repeat;
  background-size: contain;
  opacity: .6;
  width: 153px;
  height: 88px;
  align-self: baseline;
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 22px;
  margin-left: 13px;
  z-index: 0;

  @media ${device.tablet} { 
    
  }
`;

export const RainbowIcon = styled.div `
  background-image: url(${rainbowIcon});
  background-repeat: no-repeat;
  background-size: contain;
  opacity: .6;
  width: 153px;
  height: 88px;
  align-self: baseline;
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 22px;
  margin-left: 13px;
  z-index: 0;

  @media ${device.tablet} { 
    
  }
`;

export const ManchaLaranja = styled.div `
  background-image: url(${manchaLaranja});
  background-repeat: no-repeat;
  background-size: contain;
  opacity: .6;
  width: 153px;
  height: 88px;
  align-self: baseline;
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 22px;
  margin-left: 13px;
  z-index: 0;

  @media ${device.tablet} { 
    
  }
`;
export const ManchaAmarela = styled.div `
  background-image: url(${manchaAmarela});
  background-repeat: no-repeat;
  background-size: contain;
  opacity: .6;
  width: 153px;
  height: 88px;
  align-self: baseline;
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 22px;
  margin-left: 13px;
  z-index: 0;

  @media ${device.tablet} { 
    
  }
`;