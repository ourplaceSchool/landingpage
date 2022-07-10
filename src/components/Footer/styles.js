import styled from "styled-components"
import { device } from "../../device"
import logoHorizontal from '../../assets/images/logo-horizontal.png'
import instagram from '../../assets/images/Instagram.svg'
import facebook from '../../assets/images/Facebook.png'
import mail from '../../assets/images/Mail.png'

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10px;
  align-items: center;
  background-color: ${({ theme }) =>  theme.colors.primary};
  height: 100px;
  padding: 20px;

  @media ${device.laptop} { 
    padding-left: 55px;
    height: 300px;
    height: 146px;
  }
`;
export const Logo = styled.div `
  background-image: url(${logoHorizontal});
  background-repeat: no-repeat;
  background-size: contain;
  width: 59px;
  height: 9px;
  margin-right: 30px;

  @media ${device.tablet} { 
  width: 102px;
  height: 20px;
}

 @media ${device.laptop} { 
  margin-top: 145px;
  width: 205px;
  height: 52px;
  margin-right: 105px;
}
`;
export const Wrapper = styled.div`
  display: flex;

`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.laptop} { 
    width: 216px;
    margin: 0 30px;
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
`;
export const Information = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 8px;
  width: 80%;
  color: ${({ theme }) =>  theme.colors.white};
  text-align: start;

  @media ${device.tablet} { 
    font-size: 12px;
  }

  @media ${device.laptop} { 
    font-size: 14px;
    width: 100%;
  }
`;
export const RedeSociais = styled.div `
  display: flex;
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
`;
export const Div = styled.div`
  color: ${({ theme }) =>  theme.colors.white};
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const CopyRight = styled.div`
  font-family: 'Quicksand', sans-serif;
  font-size: 8px;
  font-weight: 400;
  color: ${({ theme }) =>  theme.colors.white};

  @media ${device.laptop} { 
    font-size: 10px;
  }

  @media ${device.laptop} { 
    font-size: 16px;
    margin-top: 90px;
  }
`;