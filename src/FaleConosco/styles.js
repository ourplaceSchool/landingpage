import styled from "styled-components";
import { device } from "../device"
import coloringTop from '../assets/images/coloring-top.png';
import vectorLocation from '../assets/images/vector-location.png';
import vectorPhone from '../assets/images/vector-phone.png';
import iconEmail from '../assets/images/icon-email.png';
import tintaVerde from '../assets/images/tinta-verde-box.png';
import profile from '../assets/images/Profile.png';
import message from '../assets/images/Message.png';
import call from '../assets/images/Call.png';
import FrameContact from '../assets/images/frame-contact.png'

export const Container = styled.div `
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;
export const Title = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  font-size: 35px;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  width: 100%;

  @media ${device.laptop} { 
    width: 50%;
    font-size: 64px;
  }
`;
export const ColoredTopBg = styled.div `
  display: none;

  @media ${device.tablet} { 
    background-image: url(${coloringTop});
    background-repeat: no-repeat;
    background-size: contain;
    width: 227px;
    height: 376px;
    z-index: 1;
    position: absolute;
    left: 0;
    top: 0;

  }
`;
export const Box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
    margin: 9px;

  @media ${device.tablet} { 
    margin: 0;
  }
`;
export const PinLocation = styled.div `
  background-image: url(${vectorLocation});
  background-repeat: no-repeat;
  background-size: contain;
  width: 25px;
  height: 25px;
`;

export const PhoneIcon = styled.div `
  background-image: url(${vectorPhone});
  background-repeat: no-repeat;
  background-size: contain;
  width: 25px;
  height: 25px;

  @media ${device.laptop} { 
    width: 40px;
    height: 40px;
  }
`;
export const IconEmail = styled.div `
  background-image: url(${iconEmail});
  background-repeat: no-repeat;
  background-size: contain;
  width: 25px;
  height: 25px;

  @media ${device.laptop} { 
    width: 50px;
    height: 50px;
  }
`;
export const Div = styled.div `
  width: 82%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-Bottom: 10px;

  @media ${device.laptop} { 
    margin: 50px;
  }
  
`;
export const Div2 = styled.div `
  width: 82%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-Bottom: 10px;

  @media ${device.laptop} { 
    margin: 50px;
  }
  
`;
export const Info = styled.div`
  display: flex;
  font-family: 'Poppins', sans-serif;
  font-size: 10px;
  font-weight: 400;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  margin-top: 10px;
  margin-left: 5px;

  @media ${device.tablet} { 
    font-size: 16px;
  }
`;
export const GreenStainBottom = styled.div `
  display: none;

  @media ${device.laptop} {  
    display: block;  
    background-image: url(${tintaVerde});
    background-repeat: no-repeat;
    background-size: contain;
    width: 353.3px;
    height: 185px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
`;
export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 705px;
  background-color: ${({ theme }) =>  theme.colors.white};
  margin-bottom: 65px;
  border-radius: 16px;
  position: relative;
  padding: 9px;
  z-index: 2;
  /* padding: 50px; */

  @media ${device.tablet} { 
    width: 80%;
    height: 935px;
  }
  @media ${device.laptop} { 
    width: 90%;
    height: 527px;
  }

  @media ${device.desktop} { 
    width: 50%;
  }
`;
export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  @media ${device.laptop} { 
   flex-direction: row;
  }

`
export const InputFields = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 40px; */

  @media ${device.laptop} { 
    margin-right: 80px;
  }
`;
export const MessageField = styled.textarea`
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  width: 190px;
  height: 126px;
  background: rgba(27, 98, 112, 0.1);
  border: none;
  border-radius: 8px;
  outline: none;
  padding: 40px;
  z-index: 3;

  ::placeholder{
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: rgba(206, 206, 206, 0.8);
    padding: 30px;
    padding-left: 10px;
  }

  @media ${device.tablet} { 
    width: 430px;
    height: 291px;
  }

  @media ${device.laptop} { 
    width: 395px;
  }
`;
export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`
export const Input = styled.input `
  width: 200px;
  height: 40px;
  border: 2px solid rgba(27, 98, 112, 0.2);
  border-radius: 8px;
  margin-bottom: 30px;
  padding-left: 60px;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  outline: none;


  &:focus {
    border: 2px solid ${({ theme }) =>  theme.colors.darkPrimary};
  }

  @media ${device.tablet} { 
    width: 470px;
    height: 66px;
  }

  @media ${device.laptop} { 
    width: 266px;

  }

  @media ${device.laptopM} { 
    width: 555px;
  }
`;
export const InputLabel = styled.label`
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 15px;
`;
export const ProfileIcon = styled.div `
  background-image: url(${profile});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  width: 21px;
  height: 25px;
  left: 4.29%;
  right: 91.62%;
  top: 47%;
  bottom: 40%;
`;
export const EmailIcon = styled.div `
  background-image: url(${message});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  width: 21px;
  height: 25px;
  left: 4.29%;
  right: 91.62%;
  top: 47%;
  bottom: 40%;
`;
export const CallIcon = styled.div `
  background-image: url(${call});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  width: 21px;
  height: 25px;
  left: 4.29%;
  right: 91.62%;
  top: 47%;
  bottom: 40%;
`;
export const LinesImg = styled.div `
  background-image: url(${FrameContact});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  width: 198px;
  height: 335px;
  bottom: -27px;
  right: -8px;
  z-index: 1;
`;
export const Button = styled.button `
  background-color: ${({ theme }) =>  theme.colors.darkPrimary};
  color: ${({ theme }) =>  theme.colors.white};
  border-radius: 8px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 214px;
  height: 57px;
  cursor: pointer;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 45px;
  margin-bottom: 15px;

  &:hover {
    background-color: ${({ theme }) =>  theme.colors.darkHover};
  }

  @media ${device.laptop} { 
    font-size: 20px;
  }

`