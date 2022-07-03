import styled from "styled-components"
import { device } from "../device"
import curlyBackground from '../assets/images/curly-background.png'
import classroomPhoto from '../assets/images/classroom-photo.png'
import house from '../assets/images/house.png'
import manchaLaranja from '../assets/images/mancha-laranja.png'
import manchaLaranjaClaro from '../assets/images/mancha-laranja-claro.png'
import manchaAmarela from '../assets/images/mancha-amarela.png'
import greenBook from '../assets/images/green-book.png'
import openBook from '../assets/images/open-book.png'
import teacher from '../assets/images/teacher.png'
import blueVector from '../assets/images/blue-vector.png'
import frameDots from '../assets/images/frame-dots.png'
import rainbowFrame from '../assets/images/rainbow-frame.png'

export const Container = styled.div `
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  padding-bottom: 80px;
`;
export const CurlyBg = styled.div `
  background-image: url(${curlyBackground});
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 665px;
  z-index: 2;
  position: absolute;
  top: 184px;

`;
export const ClassroomPh = styled.div `
  background-image: url(${classroomPhoto});
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 650px;
  z-index: 1;
  position: absolute;
  top: 240px;
`;
export const LittleHouse = styled.div `
  background-image: url(${house});
  background-repeat: no-repeat;
  background-size: contain;
  width: 336.78px;
  height: 121px;
  z-index: 3;
  position: absolute;
  top: 220px;
  left: -32px;

  @media ${device.mobileM} { 
    height: 120px;
    left: -20px;
  }
  @media ${device.mobileL} { 
    height: 145px;
    left: -22px;
  }
  @media ${device.tablet} { 
    height: 284px;
    left: -58px;
  }
  @media ${device.laptop} { 
    height: 331px;
    left: -58px;
  }
`;
export const OrangeStain = styled.div `
  background-image: url(${manchaLaranja});
  background-repeat: no-repeat;
  background-size: contain;
  overflow: hidden;
  width: 120px;
  height: 238px;
  z-index: 4;
  position: absolute;
  top: 50px;
  right: -66px;
`;
export const OrangeStrip = styled.div `
  background-image: url(${manchaLaranjaClaro});
  background-repeat: no-repeat;
  background-size: contain;
  width: 87.51px;
  height: 138.27px;
  z-index: 3;
  position: absolute;
  top: 267px;
  right: 28px;

  @media ${device.mobileS} { 
    display: none;
  }
  
`;
export const YellowStrip = styled.div `
  background-image: url(${manchaAmarela});
  background-repeat: no-repeat;
  background-size: contain;
  width: 172.67px;
  height: 75.17px;
  z-index: 2;
  position: absolute;
  top: 438px;
  right: -31px;
  transform: rotateX(180deg);

  @media ${device.laptop} { 
    top: 87px;
    right: -57px;
  }
`;
export const Title = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  font-size: 30px;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  width: 80%;
  height: 208px;
  margin-top: 35px;
  z-index: 3;
  position: absolute;
  top: 6px;

  @media ${device.tablet} { 
    font-size: 46px;
    width: 50%;
  }

  @media ${device.laptop} { 
    font-size: 76px;
    width: 70%;
  }
`;
export const H5 = styled.h5 `
  font-size: 25px;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  z-index: 3;
  position: absolute;
  top: 195px;

  @media ${device.mobileS} { 
    top: 130px;
    font-size: 12px;
  }
`;
export const Button = styled.button `
  background-color: ${({ theme }) =>  theme.colors.darkPrimary};
  color: ${({ theme }) =>  theme.colors.white};
  border-radius: 8px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 177px;
  height: 33px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-size: 11px;
  line-height: 18px;
  z-index: 3;
  position: absolute;
  top: 193px;

  &:hover {
    background-color: ${({ theme }) =>  theme.colors.darkHover};
  }

  @media ${device.tablet} { 
    font-size: 14px;
    width: 223px;
    top: 199px;
  }

  @media ${device.laptop} { 
    font-size: 18px;
    top: 285px;
  }

`;
export const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 440px;
  width: 80%;

  @media ${device.laptop} { 
    margin-top: 182px;
  }
`;
export const H2 = styled.h2`
  font-family: 'Quicksand', sans-serif;
  font-size: 28px;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  text-align: center;
  margin-bottom: 0;
  z-index: 3;
  @media ${device.laptop} { 
    font-size: 56px;
  }
`;
export const Text = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  text-align: center;

  @media ${device.laptop} { 
    font-size: 18px;
  }
`;
export const Bold = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  text-align: center;
`;
export const InfoWrapper = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 80%;
`;
export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 80%;
  height: 100%;
  margin-left: auto;
  margin-right: 10px;
  margin-bottom: 12px;
  padding: 20px;
  background: ${({ theme }) =>  theme.colors.white};
  border-radius: 8px;
  box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.25);
  z-index: 3;

  @media ${device.mobileM} { 
    /* height: 370px;
    height: 469px; */
  }

  @media ${device.mobileL} { 
    /* height: 395px; */
    width: 300px;
  }
`;
export const Titulo = styled.p`
  font-family: 'Quicksand', sans-serif;
  font-size: 16px;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  text-align: center;
  margin-bottom: 0;
`;
export const Information = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  text-align: center;
`;
export const BookIcon = styled.div `
  background-image: url(${greenBook});
  background-repeat: no-repeat;
  background-size: contain;
  width: 80px;
  height: 80px;
`;
export const OpenBookIcon = styled.div `
  background-image: url(${openBook});
  background-repeat: no-repeat;
  background-size: contain;
  width: 80px;
  height: 80px;
`;
export const TeacherIcon = styled.div `
  background-image: url(${teacher});
  background-repeat: no-repeat;
  background-size: contain;
  width: 80px;
  height: 80px;
`;
export const ButtonBottom = styled.button `
  background-color: ${({ theme }) =>  theme.colors.darkPrimary};
  color: ${({ theme }) =>  theme.colors.white};
  border-radius: 8px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 75%;
  height: 53px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 16px;
  z-index: 3;

  &:hover {
    background-color: ${({ theme }) =>  theme.colors.darkHover};
  }

  @media ${device.mobileM} { 
    font-size: 18px;
  }

  @media ${device.mobileL} { 
    width: 335px;
    font-size: 22px;
  }
`;
export const BlueVectorIcon = styled.div `
  background-image: url(${blueVector});
  background-repeat: no-repeat;
  background-size: contain;
  width: 613.89px;
  height: 727.31px;
  position: absolute;
  left: -16.94%;
  left: 0;
  right: 74.31%;
  top: 74.23%;
  bottom: 6.31%;
`;
export const OrangeDots = styled.div `
  background-image: url(${frameDots});
  background-repeat: no-repeat;
  background-size: contain;
  width: 143px;
  height: 158px;
  position: absolute;
  left: -0.35%;
  right: 89.38%;
  top: 71.3%;
  bottom: 33.08%;
  z-index: 2;
`;
export const OrangeDotsTwo = styled.div `
  background-image: url(${frameDots});
  background-repeat: no-repeat;
  background-size: contain;
  width: 143px;
  height: 158px;
  position: absolute;
  left: -2.5%;
  right: 89.38%;
  top: 78.3%;
  bottom: 33.08%;
`;
export const RainbowIcon = styled.div `
  background-image: url(${rainbowFrame});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  width: 480px;
  height: 371px;
  right: -205px;
  bottom: -25px;
`;


