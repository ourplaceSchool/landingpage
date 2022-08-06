import styled from "styled-components";
import { device } from "../device"
import sunIcon from '../assets/images/sun-icon.png';
import houseLogo from '../assets/images/house.png';
import rainbowIcon from '../assets/images/rainbow-icon.png';
import manchaLaranja from '../assets/images/mancha-laranja.png';
import manchaAmarela from '../assets/images/mancha--amarela.png';

export const Container = styled.div `
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin-top: 15px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
  z-index: 2;
  width: 80%;
  margin-bottom: 20px;
`;
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
  z-index: 2;
  width: 80%;
  margin-bottom: 20px;

  @media ${device.laptop} { 
    width: 95%;
  }
`;
export const Title = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  font-size: 25px;
  color: ${({ theme }) =>  theme.colors.darkPrimary};

  @media ${device.tablet} { 
    font-size: 64px;
  }

  @media ${device.desktop} { 
    font-size: 150px;
  }
`;
export const Information = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 15px;
  text-align: justify;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  margin: 0;

  @media ${device.tablet} { 
    font-size: 18px;
    line-height: 32px;
    width: 80%;
  }

  @media ${device.desktop} { 
    font-size: 30px;
    line-height: 50px;
  }
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media ${device.tablet} { 
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media ${device.laptopM} { 
    flex-wrap: nowrap;
  }
`
export const Card = styled.div`
  width: 100%;
  height: 335px;
  margin: 5px;
  border-radius: 8px;
  box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  z-index: 1;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }

  @media ${device.mobileXL} { 
    width: 60%;
  }

  @media ${device.tablet} { 
    width: 38%;
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
  width: 100%;
  height: 82px;
  position: absolute;
  bottom: 0;
  z-index: 2;

  @media ${device.desktop} { 
    height: 170px;
  }
`;
export const ImageBg1 = styled.div `
  background-image: url(https://res.cloudinary.com/ourplaceeglishschool/image/upload/v1659787780/website/Faixa%20Etaria/3-6_ttjqqe.jpg);
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 500px;
  align-self: baseline;
  z-index: 1;

  @media ${device.laptop} { 
    height: 610px;
  }

  @media ${device.desktop} { 
    height: 800px;
  }
`;
export const ImageBg2 = styled.div `
  background-image: url(https://res.cloudinary.com/ourplaceeglishschool/image/upload/v1659787780/website/Faixa%20Etaria/7-9_fn5qat.jpg);
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 500px;
  align-self: baseline;
  z-index: 1;

  @media ${device.laptop} { 
    height: 610px;
  }

  @media ${device.desktop} { 
    height: 800px;
  }
`;
export const ImageBg3 = styled.div `
  background-image: url(https://res.cloudinary.com/ourplaceeglishschool/image/upload/v1659787780/website/Faixa%20Etaria/10-12_nzvxym.jpg);
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 500px;
  align-self: baseline;
  z-index: 1;

  @media ${device.laptop} { 
    height: 610px;
  }

  @media ${device.desktop} { 
    height: 800px;
  }
`;
export const ImageBg4 = styled.div `
  background-image: url(https://res.cloudinary.com/ourplaceeglishschool/image/upload/v1659787780/website/Faixa%20Etaria/13-16_fksqvv.jpg);
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 500px;
  align-self: baseline;
  z-index: 1;

  @media ${device.tablet} { 
    height: 610px;
  }

  @media ${device.desktop} { 
    height: 800px;
  }
`;
export const ImageBg5 = styled.div `
  background-image: url(https://res.cloudinary.com/ourplaceeglishschool/image/upload/v1659789088/website/Faixa%20Etaria/pexels-rfstudio-3059748_fiq6tl.jpg);
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 500px;
  align-self: baseline;
  z-index: 1;

  @media ${device.laptop} { 
    height: 610px;
  }

  @media ${device.laptopM} {
    width: 277px;
  }

  @media ${device.desktop} { 
    height: 800px;
  }
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
  font-size: 14px;
  text-align: center;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  margin: 3px;
  @media ${device.desktop} { 
    font-size: 25px;
  }
`;
export const Btn = styled.button `
  background-color: ${({ theme }) =>  theme.colors.primary};
  color: ${({ theme }) =>  theme.colors.white};
  margin-top: 30px;
  margin-bottom: 49px;
  border-radius: 8px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 190px;
  height: 44px;
  cursor: pointer;
  font-size: 12px;
  line-height: 18px;

  &:hover {
    background-color: ${({ theme }) =>  theme.colors.darkHover};
  }

  @media ${device.desktop} { 
    width: 245px;
    height: 60px;
    font-size: 23px;
  }
`
export const SunIcon = styled.div `
  background-image: url(${sunIcon});
  background-repeat: no-repeat;
  background-size: contain;
  width: 149px;
  height: 154px;
  align-self: baseline;
  z-index: 1;
  position: absolute;
  bottom: -2px;
  right: -33px;
  opacity: 0.5;
  transform: rotate(-90deg);
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
export const RainbowIcon = styled.div `
  background-image: url(${rainbowIcon});
  background-repeat: no-repeat;
  background-size: contain;
  opacity: .6;
  width: 153px;
  height: 88px;
  align-self: baseline;
  position: absolute;
  bottom: -12px;
  left: 0;
  z-index: 0;

  @media ${device.tablet} { 
    
  }
`;

export const ManchaLaranja = styled.div `
  background-image: url(${manchaLaranja});
  background-repeat: no-repeat;
  background-size: contain;
  opacity: .4;
  width: 153px;
  height: 88px;
  align-self: baseline;
  position: absolute;
  bottom: -2px;
  left: -5px;
  z-index: 0;
  transform: rotate(15deg);

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
  left: 1px;
  z-index: 0;

  @media ${device.tablet} { 
    
  }
`;