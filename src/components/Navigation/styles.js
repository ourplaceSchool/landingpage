import styled from "styled-components";
import { device } from '../../device';
import topMenuVector from '../../assets/images/top-menu-vector.png'
import logoHorizontal from '../../assets/images/logo-horizontal.png'

export const Container = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 57px;
  padding: 0 20px;
  color: ${({ theme }) => theme.colors.white};
  z-index: 10;
`;

export const ContainerLaptop = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 57px;
  padding: 0 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.primaryHover};
  z-index: 10;
`;

export const TopBg = styled.div `
  background-image: url(${topMenuVector});
  background-repeat: no-repeat;
  background-size: contain;
  width: 80%;
  position: absolute;
  left: -0.53%;
  top: -14%;
  bottom: 78%;
  z-index: 0;

  @media ${device.mobileM} { 
    top: -16%;
    left: 0%;
  }

  @media ${device.mobileL} { 
    top: -20%;
  }

  @media ${device.tablet} { 
    top: -30.08%;
    right: 40.26%;
    bottom: 83.55%;
    left: -5.47%;
  }

  /* @media ${device.laptop} { 
    top: -25.08%;
    right: 70.26%;
    bottom: 62.55%;
    left: -7.47%;
    width: 45%;
    transform: rotate(347deg);

  }

  @media ${device.laptopM} { 
    top: -30%;
    bottom: -16.55%;
    left: 0.53%;
    width: 42%;
  }

  @media ${device.desktop} {
    top: -28%;
    left: -0.47%;
    width: 34%;
    transform: translate(13px, 105px);
  } */
`;

export const Logo = styled.div `
  background-image: url(${logoHorizontal});
  background-repeat: no-repeat;
  background-size: contain;
  width: 30%;
  height: 60%;
  z-index: 1;

  /* @media ${device.mobileM} {
    margin: 0 53px;
  }

  @media ${device.mobileL} {
    margin: 0 77px;
  }

  @media ${device.tablet} {
    position: inherit;
    width: 100%;
    height: 70%;
    margin: 10px 90px 0 90px;
  }

  @media ${device.laptop}{
    position: absolute;
    top: 22px;
    left: -36px;
    width: 197px;
    height: 100%;
  } */

  /* @media ${device.laptopM}{
    width: 261px;
    height: 72px;
    top: 23px;
    left: -17px;
  }

  @media ${device.desktop} { 
    width: 100%;
    height: 100%;
    top: 80px;
    left: 98px;
  } */
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Link = styled.a`
  font-family: Poppins, sans-serif;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkPrimary};
  cursor: pointer;
  margin-right: 15px;

  &:hover { 
    color: ${({ theme }) => theme.colors.primary};
  }

  @media ${device.laptopS} { 
    font-size: 14px;
    color: ${({ theme }) => theme.colors.white};

    &:hover { 
    color: ${({ theme }) => theme.colors.darkPrimary};
  }
  }

  @media ${device.laptop} { 
    font-size: 18px;
  }

  @media ${device.laptopM} { 
    font-size: 25px;
  }

  @media ${device.desktop} { 
    font-size: 40px;
    margin-right: 30px;

    &:last-child {
      margin-right: 120px;
    }
  }
`;
export const DropdownButton = styled.div`
  z-index: 100;
`;
export const DropDownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.bgTransparent};
  margin-top: 48px;
  border-radius: 5px;
  padding: 6px;
  padding-bottom: 20px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 5;

  &:hover { 
    color: ${({ theme }) => theme.colors.primary};
  }

`;
export const Button = styled.button `
  background-color: ${({ theme }) =>  theme.colors.primary};
  color: ${({ theme }) =>  theme.colors.white};
  border-radius: 8px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 120px;
  height: 44px;
  cursor: pointer;
  font-size: 12px;
  line-height: 18px;

  &:hover {
    background-color: ${({ theme }) =>  theme.colors.darkHover};
  }

  @media ${device.laptopS} { 
    &:hover {
    background-color: ${({ theme }) =>  theme.colors.darkHover};
  }
  }

  @media ${device.desktop} { 
    font-size: 20px;
    width: 212px;
    height: 65px;
  }
`