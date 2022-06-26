import styled from "styled-components";
import coloringTop from '../assets/images/coloring-top.png';
import vectorLocation from '../assets/images/vector-location.png';
import vectorPhone from '../assets/images/vector-phone.png';
import iconEmail from '../assets/images/icon-email.png';
import tintaVerde from '../assets/images/tinta-verde-box.png';
import profile from '../assets/images/Profile.png';
import message from '../assets/images/Message.png';
import call from '../assets/images/Call.png';

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
  font-size: 64px;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  width: 50%;
`;
export const ColoredTopBg = styled.div `
  background-image: url(${coloringTop});
  background-repeat: no-repeat;
  background-size: contain;
  width: 227px;
  height: 376px;
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
`;
export const Box = styled.div`
  display: flex;
`;
export const PinLocation = styled.div `
  background-image: url(${vectorLocation});
  background-repeat: no-repeat;
  background-size: contain;
  width: 37.7px;
  height: 50px;
`;
export const PhoneIcon = styled.div `
  background-image: url(${vectorPhone});
  background-repeat: no-repeat;
  background-size: contain;
  width: 40.65px;
  height: 40.63px;
`;
export const IconEmail = styled.div `
  background-image: url(${iconEmail});
  background-repeat: no-repeat;
  background-size: contain;
  width: 50px;
  height: 50px;
`;
export const Div = styled.div `
  width: 82%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px;
`;
export const Info = styled.div`
  display: flex;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  margin-top: 10px;
`;
export const GreenStainBottom = styled.div `
  background-image: url(${tintaVerde});
  background-repeat: no-repeat;
  background-size: contain;
  width: 353.3px;
  height: 361.6px;
  position: absolute;
  bottom: 0;
  left: 0;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1130px;
  height: 588px;
  background-color: ${({ theme }) =>  theme.colors.white};
  margin-bottom: 65px;
  border-radius: 16px;
  position: relative;
  padding: 50px;
`;
export const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
`
export const InputFields = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 80px;
  padding: 40px;
`;
export const MessageField = styled.textarea`
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  width: 395px;
  height: 291px;
  background: rgba(27, 98, 112, 0.1);
  border: none;
  border-radius: 8px;
  outline: none;
  padding: 40px;

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
`;
export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`
export const Input = styled.input `
  width: 485px;
  height: 60px;
  border: 2px solid rgba(27, 98, 112, 0.2);
  border-radius: 8px;
  margin-bottom: 30px;
  padding-left: 60px;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  outline: none;


  &:focus {
    border: 2px solid ${({ theme }) =>  theme.colors.darkPrimary};
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
export const Button = styled.button `
  background-color: ${({ theme }) =>  theme.colors.darkPrimary};
  color: ${({ theme }) =>  theme.colors.white};
  border-radius: 8px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 316.08px;
  height: 56px;
  cursor: pointer;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;

  &:hover {
    background-color: ${({ theme }) =>  theme.colors.darkHover};
  }
`