import styled from "styled-components";
import { device } from "../device";
import frameTopBox from '../assets/images/frame-top-box.png';
import houseLogo from '../assets/images/house-logo.png';
import coloring from '../assets/images/coloring.png';
import topGreen from '../assets/images/top-green.png';

export const Container = styled.div `
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  position: relative;

  @media ${device.tablet} { 
    margin: 0;
  } 
`;
export const Title = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  font-size: 20px;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  width: 100%;
  z-index: 2;

  @media ${device.tablet} { 
    width: 50%;
    font-size: 54px;
    color: ${({ theme }) =>  theme.colors.darkPrimary};
  }
  @media ${device.laptopM} { 
    width: 50%;
    font-size: 64px;
    color: ${({ theme }) =>  theme.colors.darkPrimary};
  }
`;
export const TopBgGreen = styled.div `
  background-image: url(${topGreen});
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 88px;
  z-index: 1;
  position: absolute;
  right: 0;
  top: 0;

  @media ${device.tablet} { 
    display: none;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 85%;
  height: 650px;
  background-color: ${({ theme }) =>  theme.colors.white};
  margin-top: 25px;
  border-radius: 8px;
  margin-bottom: 65px;
  position: relative;
  z-index: 2;

  @media ${device.mobileL} { 
    margin-top: 48px;
  }

  @media ${device.tablet} { 
    width: 90%;
    margin-top: 0;
  }

  @media ${device.laptopM} { 
    width: 75%;
  }
`;
export const ColoredBg = styled.div `
  background-image: url(${coloring});
  background-repeat: no-repeat;
  background-size: contain;
  width: 565px;
  height: 422px;
  z-index: 1;
  position: absolute;
  right: 0;
  bottom: 0;
`;
export const GreenFrame = styled.div `
  display: none;

  @media ${device.tablet} { 
    display: block;
    background-image: url(${frameTopBox});
    background-repeat: no-repeat;
    background-size: contain;
    width: 300px;
    height: 296px;
    position: absolute;
    top: 0;
    left: 0;
  }
  
`;
export const ProfilePhoto = styled.div `
  background-color: white;
  border: 1px solid #F0EFF5;
  vertical-align: middle;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: fill;
  position: absolute;
  top: -30px;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.2);

   @media ${device.mobileM} { 
    top: -15px;
    width: 120px;
    height: 120px;
  }

  @media ${device.tablet} { 
    top: 20px;
    right: 30px;
    width: 140px;
    height: 140px;
  }

  @media ${device.laptop} { 
    top: 20px;
    right: 30px;
    width: 170px;
    height: 170px;
  }

   @media ${device.laptopM} { 
    width: 230px;
    height: 230px;
  }
  /* @media ${device.desktop} { 
    width: 16%;
    height: 55%;
  } */
`;
export const Box = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  
  @media ${device.tablet} { 
    padding: 80px;
  }
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-left: 20px;
`;
export const H4 = styled.h4`
  display: flex;
  align-self: baseline;
  justify-content: center;
  font-family: 'Quicksand', sans-serif;
  font-size: 15px;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  margin: 0;
  margin-top: 20px;

  @media ${device.mobileM} { 
    font-size: 16px;
  }

  @media ${device.mobileL} { 
    font-size: 19px;
  }

  @media ${device.tablet} { 
    font-size: 21px;
  }

  @media ${device.laptop} { 
    font-size: 35px;
  }

  @media ${device.laptopM} { 
    margin-top: 70px;
  }

  @media ${device.desktop} { 
    font-size: 50px;
    margin-top: 20px;
  }
`;
export const Information = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 9px;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  padding: 20px 0px;
  margin: 0;

  @media ${device.tablet} { 
    font-size: 12px;
  }
  @media ${device.laptop} { 
    font-size: 14px;
  }

  @media ${device.laptopM} { 
    margin-top: 10px;
    font-size: 14px;
  }

  @media ${device.desktop} { 
    font-size: 24px;
  }
`;
export const Bold = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) =>  theme.colors.darkPrimary};

  @media ${device.tablet} { 
    font-size: 12px;
  }
  @media ${device.laptop} { 
    font-size: 14px;
  }
  @media ${device.laptopM} { 
    font-size: 16px;
  }
  @media ${device.desktop} { 
    font-size: 24px;
  }
`;
export const HouseLogo = styled.div `
  background-image: url(${houseLogo});
  background-repeat: no-repeat;
  background-size: contain;
  width: 153px;
  height: 88px;
  align-self: baseline;
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 22px;
  margin-left: 13px;

  @media ${device.tablet} { 
    
  }
`;

