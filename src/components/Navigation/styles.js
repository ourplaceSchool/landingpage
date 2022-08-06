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
  color: ${({ theme }) => theme.colors.wite};
  z-index: 10;

  @media ${device.laptop} { 
    height: 32px;
    padding: 40px 40px;
    justify-content: flex-end;
  }
`;

export const TopBg = styled.div `
  background-image: url(${topMenuVector});
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  position: absolute;
  left: -16.47%;
  right: 63.26%;
  top: -18.08%;
  bottom: 79.55%;
  z-index: 0;

  @media ${device.mobileM} { 
    top: -41%;
    left: -19.08%;
  }

  @media ${device.mobileL} { 
    top: -47%;
  }

  @media ${device.tablet} { 
    left: -2.47%;
    right: 63.26%;
    top: -14.08%;
    bottom: 78.55%;
  }

  @media ${device.laptop} { 
    top: -0.08%;
    bottom: 56.55%;
    left: -0.47%;
  }

  @media ${device.laptopM} { 
    top: -30%;
    bottom: -16.55%;
    width: 42%;
  }

  @media ${device.desktop} {
    top: -28%;
    left: -0.47%;
    bottom: -75.45%;
    width: 34%;
  }
`;

export const Logo = styled.div `
  background-image: url(${logoHorizontal});
  background-repeat: no-repeat;
  background-size: contain;
  width: 90px;
  height: 25px;
  z-index: 1;

  @media ${device.mobileM} {
    margin: 0 75px;
  }

  @media ${device.mobileL} {
    margin: 0 100px;
  }

  @media ${device.tablet} {
    position: inherit;
    width: 135px;
    height: 36px;
  }

  @media ${device.laptop}{
    position: absolute;
    top: 60px;
    left: 50px;
    width: 195px;
    height: 64px;
  }

  @media ${device.laptopM}{
    width: 288px;
    height: 72px;
    top: 40px;
    left: 135px;
  }

  @media ${device.desktop} { 
    width: 369px;
    height: 90px;
    top: 80px;
    left: 160px;
  }
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

  @media ${device.laptop} { 
    font-size: 20px;
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

  @media ${device.desktop} { 
    font-size: 20px;
    width: 212px;
    height: 65px;
  }
`