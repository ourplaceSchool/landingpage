import styled from "styled-components"
import { device } from "../device"
import whiteBg from '../assets/images/white-bg.png'
import greenBook from '../assets/images/green-book.png'
import openBook from '../assets/images/open-book.png'
import teacher from '../assets/images/teacher.png'
import blueVector from '../assets/images/blue-vector.png'
import frameDots from '../assets/images/frame-dots.png'
import rainbowFrame from '../assets/images/rainbow-frame.png'
import star from '../assets/images/star.png'
import arrowCurvey from '../assets/images/arrow-curvey.png'
import vectorPhoto from '../assets/images/mask-group.png'

export const Container = styled.div `
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  padding-bottom: 80px;
  margin-bottom: 30px;
`;
export const BoxContainer = styled.div `
  display: flex;
  flex-direction: column; 
  align-items: center;
  margin-top: 15px;

  @media ${device.tablet} { 
    flex-direction: column; 
    align-items: start;
  }

  @media ${device.laptopM} { 
    align-items: start;
  }
`;
export const CurlyBg = styled.div `
  display: none;

  @media ${device.tablet} {
    display: block;
    background-image: url(${whiteBg});
    background-repeat: no-repeat;
    background-size: contain;
    width: 100%;
    height: 380px;
    z-index: 1;
    margin-top: 100px;
  }

  @media ${device.laptop} { 
    top: -30px;
    height: 400px;
  }

  @media ${device.laptopM} { 
    top: -30px;
    height: 610px;
  }

  @media ${device.desktop} { 
    top: -183px;
    height: 1100px;
  }

`;

export const ClassroomVector = styled.div `
  display: none;

  @media ${device.tablet}{
    display: block;
    background-image: url(${vectorPhoto});
    background-repeat: no-repeat;
    background-size: contain;
    width: 614px;
    height: 365px;
    z-index: 3;
    position: absolute;
    top: 0;
    right: -310px;
  }

  @media ${device.laptopM} { 
    height: 560px;
    right: -148px;
  }
  @media ${device.desktop} { 
    height: 831px;
    width: 768px;
    top: 17px;
    right: -83px;
  }
`;

export const Star = styled.div `
  background-image: url(${star});
  background-repeat: no-repeat;
  background-size: contain;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 9px;
  top: 38px;

  @media ${device.mobileM} { 
   right: 44px;
  }

  @media ${device.mobileL} { 
   right: 65px;
  }

  @media ${device.tablet} { 
   right: 34px;
   top: 62px;
  }

  @media ${device.laptop} { 
   right: 45px;
   top: 100px;
   width: 35px;
   height: 35px;
  }

  @media ${device.laptopM} { 
   right: 178px;
   top: 128px;
  }

  @media ${device.desktop} { 
   right: 254px;
   top: 188px;
   width: 55px;
   height: 55px;
  }
`;

export const ArrowCurvey = styled.div `
  background-image: url(${arrowCurvey});
  background-repeat: no-repeat;
  background-size: contain;
  width: 70px;
  height: 70px;
  position: absolute;
  left: 24px;
  top: 210px;

  @media ${device.mobileM} { 
    left: 46px;
  }

  @media ${device.mobileL} { 
    left: 75px;
  }

  @media ${device.tablet} { 
    top: 315px;
    left: 65px;
  }

  @media ${device.laptop} { 
    top: 399px;
    left: 151px;
    width: 90px;
    height: 90px;
  }

  @media ${device.laptopM} { 
    top: 490px;
    left: 279px;
  }

  @media ${device.desktop} { 
    top: 820px;
    left: 660px;
    width: 180px;
    height: 120px;
  }
`;
export const Title = styled.h1`
  z-index: 5;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  font-size:25px;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  width: 70%;
  margin-top: 35px;


  @media ${device.tablet} { 
    font-size: 38px;
    margin-top: 68px;
    width: 52%;
  }

  @media ${device.laptop} { 
    font-size: 60px;
    width: 60%;
  }

  @media ${device.laptopM} { 
    font-size: 69px;
    width: 60%;
    margin-right: 280px;
    margin-top: 135px;
  }

  @media ${device.laptopL} { 
    margin-top: 130px;
  }

  @media ${device.desktop} { 
    display: flex;
    align-items: center;
    font-size: 120px;
    margin-top: 206px;
  }
`;

// export const Underline = styled.div `
//   background-image: url(${underlineTitle});
//   background-repeat: no-repeat;
//   background-size: contain;
//   width: 100%;
//   height: 221px;
//   /* position: absolute;
//   left: 57.01%;
//   right: 18.19%;
//   top: 16.15%;
//   bottom: 83.51%; */
// `;
export const Title2 = styled.h1`
  position: absolute;
  top: 253px;
  left: 30px;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  font-size: 30px;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  width: 85%;

  @media ${device.tablet} {
    flex-direction: row; 
    font-size: 33px;
    width: 80%;
    top: 390px;
    left: 165px;
  }

  @media ${device.laptop} { 
    font-size: 50px;
    top: 484px;
  }

  @media ${device.laptopM} { 
    top: 597px;
    font-size: 76px;
    width: 75%;
  }

  @media ${device.desktop} { 
    display: flex;
    align-items: center;
    top: 1030px;
    font-size: 130px;
  }
`;
export const Color = styled.h1`
  color: ${({ theme }) =>  theme.colors.primary};
  font-family: 'Quicksand', sans-serif;
  font-size: 30px;
  margin: 0;

  @media ${device.tablet} { 
    font-size: 33px;
    margin-left: 15px;
  }

  @media ${device.laptop} { 
    font-size: 50px;
  }

  @media ${device.laptopM} { 
    font-size: 76px;
  }

  @media ${device.desktop} { 
    font-size: 130px;
  }
`;
export const InfoBox = styled.div `
  z-index: 5;
`;
export const TextInfoBox = styled.p`
  position: absolute;
  top: 390px;
  left: 20px;
  width: 90%;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  text-align: center;

  @media ${device.tablet} { 
    top: 454px;
    left: 50px;
  }

  @media ${device.laptop} { 
    top: 610px;
    font-size: 18px;
  }

  @media ${device.laptopM} { 
    top: 815px;
    font-size: 22px;
  }

  @media ${device.desktop} { 
    top: 1350px;
    font-size: 43px;
  }
`;
export const H5 = styled.h5 `
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  font-size: 13px;
  width: 70%;
  margin: 0;

  @media ${device.mobileL} { 
   font-size: 16px;
  }

  @media ${device.tablet} { 
    font-size: 22px;
    width: 69%;
  }
  @media ${device.laptop} { 
    top: 170px;
    font-size: 25px;
  }
  @media ${device.laptopM} { 
    top: 195px;
    font-size: 32px;
  }
  @media ${device.desktop} { 
    font-size: 50px;
  }
`;
export const Button = styled.button `
  background-color: ${({ theme }) =>  theme.colors.primary};
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
  top: 166px;
  /* top: 193px; */

  &:hover {
    background-color: ${({ theme }) =>  theme.colors.darkHover};
  }

  @media ${device.tablet} { 
    font-size: 14px;
    width: 223px;
    top: 273px;
    left: 108px;
  }
  @media ${device.laptop} { 
    font-size: 18px;
    top: 346px;
    width: 277px;
    height: 35px;
    left: 212px;
  }

  @media ${device.laptopM} { 
    top: 444px;
    left: 330px;
  }

  @media ${device.desktop} { 
    height: 65px;
    width: 380px;
    font-size: 26px;
    top: 742px;
    left: 749px;
  }

`;
export const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 626px;
  width: 80%;

  @media ${device.tablet} { 
    margin-top: -330px;
  }

  @media ${device.laptop} { 
    margin-top: 723px;
  }

  @media ${device.laptopM} { 
    margin-top: 864px;
  }

  @media ${device.desktop} { 
    margin-top: 65px;
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

  @media ${device.desktop} { 
    font-size: 110px;
  }
`;
export const Text = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  text-align: center;

  @media ${device.tablet} { 
    font-size: 14px;
  }

  @media ${device.laptop} { 
    font-size: 18px;
  }

  @media ${device.desktop} { 
    font-size: 34px;
  }
`;
export const Bold = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  text-align: center;

  @media ${device.desktop} { 
    font-size: 34px;
  }
`;
export const InfoWrapper = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 580px;

  @media ${device.tablet} { 
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    width: 100%;
    margin-top: 0;
  }

  @media ${device.laptop} { 
    margin-top: 40px;
  }
`;
export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 80%;
  
  margin-bottom: 12px;
  padding: 20px;
  background: ${({ theme }) =>  theme.colors.white};
  border-radius: 8px;
  box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.25);
  z-index: 3;

  @media ${device.mobileL} { 
    width: 300px;
  }

  @media ${device.tablet} { 
    margin-right: 10px;
    height: 410px;
  }

  @media ${device.desktop} { 
    width: 500px;
    height: 700px;
  }

`;
export const Titulo = styled.p`
  font-family: 'Quicksand', sans-serif;
  font-size: 16px;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  text-align: center;
  margin-bottom: 0;

  @media ${device.desktop} { 
    font-size: 30px;
  }
`;
export const Information = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  text-align: center;

  @media ${device.desktop} { 
    font-size: 20px;
  }
`;
export const BookIcon = styled.div `
  background-image: url(${greenBook});
  background-repeat: no-repeat;
  background-size: contain;
  width: 80px;
  height: 80px;

  @media ${device.desktop} { 
    width: 120px;
    height: 120px;
  }
`;
export const OpenBookIcon = styled.div `
  background-image: url(${openBook});
  background-repeat: no-repeat;
  background-size: contain;
  width: 80px;
  height: 80px;

  @media ${device.desktop} { 
    width: 120px;
    height: 120px;
  }
`;
export const TeacherIcon = styled.div `
  background-image: url(${teacher});
  background-repeat: no-repeat;
  background-size: contain;
  width: 80px;
  height: 80px;

  @media ${device.desktop} { 
    width: 120px;
    height: 120px;
  }
`;
export const ButtonBottom = styled.button `
  background-color: ${({ theme }) =>  theme.colors.primary};
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

  @media ${device.tablet} { 
    margin-top: 20px;
  }

  @media ${device.desktop} { 
    font-size: 24px;
    width: 390px;
    height: 65px;
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
  top: 58.23%;
  bottom: 6.31%;

  @media ${device.desktop} { 
    top: 80.23%;
  }
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


