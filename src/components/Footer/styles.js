import styled from "styled-components"
import { device } from "../../device"
import logoHorizontal from '../../assets/images/logo-horizontal.png'
import instagram from '../../assets/images/Instagram.svg'
import facebook from '../../assets/images/Facebook.png'
import mail from '../../assets/images/Mail.png'

export const Container = styled.div `
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10px;
  background-color: ${({ theme }) =>  theme.colors.primary};
  height: 145px;
  padding: 20px;

  @media ${device.laptop} { 
    height: 470px; 
  }

  @media ${device.desktop} { 
    height: 520px; 
  }
`;
export const Logo = styled.div `
  position: absolute;
  left: 107px;
  top: 22px;
  background-image: url(${logoHorizontal});
  background-repeat: no-repeat;
  background-size: contain;
  width: 90px;
  height: 25px;

  @media ${device.mobileM} { 
    left: 140px;
  }

  @media ${device.mobileL} { 
    left: 164px;
  }

  @media ${device.tablet} { 
    height: 64px;
    width: 155px;
    left: 13px;
    top: 54px;
  }

 @media ${device.laptop} { 
    left: 436px;
    top: 30px;
    width: 220px;
    height: 35px;
  }

  @media ${device.laptopM} { 
    width: 245px;
    height: 56px;
    left: 560px;
  }

  @media ${device.laptopL} { 
    left: 607px;
  }

  @media ${device.desktop} { 
    width: 300px;
    height: 84px;
    left: 170px;
    top: 140px;
  }
`;
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;

  @media ${device.laptop} { 
    grid-template-columns: repeat(3, 1fr);
  }  

  @media ${device.laptopM} { 
    grid-gap: 230px;
  }

`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} { 
    width: 60%;
  }

  @media ${device.laptop} { 
    width: 240px;
    padding: 20px;
    height: 125px;
  }
`;
export const InfoSociais = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;

  @media ${device.tablet} { 
    width: 60%;
  }

  @media ${device.laptop} { 
    width: 240px;
    padding: 20px;
    height: 125px;
  }
`;
export const Titulo = styled.p`
  font-family: 'Quicksand', sans-serif;
  font-size: 12px;
  color: ${({ theme }) =>  theme.colors.white};
  text-align: start;
  margin-bottom: 0;

  @media ${device.tablet} { 
    font-size: 16px;
  }

  @media ${device.laptop} { 
    font-size: 18px;
  }

  @media ${device.laptopM} { 
    font-size: 28px;
  }

  @media ${device.desktop} { 
    width: 316px;
    font-size: 43px;
  }
`;
export const Information = styled.p`
  display: flex;
  flex-wrap: wrap;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 8px;
  width: 126px;
  color: ${({ theme }) =>  theme.colors.white};
  text-align: start;

  @media ${device.tablet} { 
    font-size: 12px;
    width: 290px;
  }

  @media ${device.laptop} { 
    font-size: 14px;
    width: 317px;
  }
`;
export const RedeSociais = styled.div `
  display: flex;
  margin-top: 8px;

  @media ${device.tablet} { 
    width: 60%;
  }
`;
export const InstaIcon = styled.svg `
  background-image: url(${instagram});
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: 10px;
  margin-right: 15px;
  width: 15px;
  height: 15px;
  cursor: pointer;

  @media ${device.tablet} { 
    width: 30px;
    height: 30px;
  }

  @media ${device.laptop} { 
    margin-right: 20px;
    width: 40px;
    height: 40px;
  }

  @media ${device.laptopM} { 
    width: 50px;
    height: 50px;
  }
`;
export const FacebookIcon = styled.svg `
  background-image: url(${facebook});
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: 10px;
  margin-right: 20px;
  width: 15px;
  height: 15px;
  cursor: pointer;

  @media ${device.tablet} { 
    width: 30px;
    height: 30px;
  }

  @media ${device.laptop} { 
    margin-right: 20px;
    width: 40px;
    height: 40px;
  }

  @media ${device.laptopM} { 
    width: 50px;
    height: 50px;
  }
`;
export const MailIcon = styled.svg `
  background-image: url(${mail});
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: 10px;
  width: 15px;
  height: 15px;
  cursor: pointer;

  @media ${device.tablet} { 
    width: 30px;
    height: 30px;
  }

  @media ${device.laptop} { 
    margin-right: 20px;
    width: 40px;
    height: 40px;
  }

  @media ${device.laptopM} { 
    width: 50px;
    height: 50px;
  }
`;
export const Div = styled.div`
  color: ${({ theme }) =>  theme.colors.white};
  display: flex;
  flex-direction: row;
  align-self: center;
  margin-top: 40px;

  @media ${device.tablet} { 
    margin-top: 0px;
    margin-left: 190px;
  }

  @media ${device.laptop} { 
    align-self: center;
    margin-top: 60px;
    margin-left: 0px;
  }
`;
export const CopyRight = styled.div`
  align-self: center;
  font-family: 'Quicksand', sans-serif;
  font-size: 8px;
  font-weight: 400;
  color: ${({ theme }) =>  theme.colors.white};

  @media ${device.tablet} { 
    font-size: 10px;
  }

  @media ${device.laptop} { 
    font-size: 16px;
  }

  @media ${device.desktop} { 
    font-size: 20px;
  }
`;
export const AnchorLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) =>  theme.colors.white};

  :hover{
    color: ${({ theme }) => theme.colors.bgColor};
  }
`;