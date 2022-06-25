import styled from "styled-components"
import logoHorizontal from '../../assets/images/logo-horizontal.png'
import instagram from '../../assets/images/Instagram.png'
import facebook from '../../assets/images/Facebook.png'
import mail from '../../assets/images/Mail.png'

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10px;
  align-items: center;
  background-color: ${({ theme }) =>  theme.colors.primary};
  height: 300px;
  padding: 20px;
  padding-left: 55px;
`;
export const Logo = styled.div `
  background-image: url(${logoHorizontal});
  background-repeat: no-repeat;
  background-size: contain;
  width: 205px;
  height: 52px;
  margin-top: 145px;
  margin-right: 105px;
`;
export const Wrapper = styled.div`
  display: flex;

`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 216px;
  height: 125px;
  margin: 0 30px;
  padding: 20px;
`;
export const Titulo = styled.p`
  font-family: 'Quicksand', sans-serif;
  font-size: 18px;
  color: ${({ theme }) =>  theme.colors.white};
  text-align: start;
  margin-bottom: 0;
`;
export const Information = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 14px;
  color: ${({ theme }) =>  theme.colors.white};
  text-align: start;
`;
export const RedeSociais = styled.div `
  display: flex;
`;
export const InstaIcon = styled.div `
  background-image: url(${instagram});
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: 10px;
  margin-right: 20px;
  width: 40px;
  height: 40px;
`;
export const FacebookIcon = styled.div `
  background-image: url(${facebook});
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: 10px;
  margin-right: 20px;
  width: 40px;
  height: 40px;
`;
export const MailIcon = styled.div `
  background-image: url(${mail});
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: 10px;
  width: 40px;
  height: 40px;
`;
export const Div = styled.div`
  color: ${({ theme }) =>  theme.colors.white};
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const CopyRight = styled.div`
  margin-top: 90px;
  font-family: 'Quicksand', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) =>  theme.colors.white};
`;