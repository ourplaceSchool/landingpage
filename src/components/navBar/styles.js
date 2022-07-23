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

  @media ${device.laptop} { 
    height: 32px;
    padding: 40px 40px;
  }
`;

export const TopBg = styled.div `
  background-image: url(${topMenuVector});
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  position: absolute;
  left: -7.47%;
  right: 63.26%;
  top: -11.08%;
  bottom: 79.55%;
  
  @media ${device.tablet} { 
    left: -2.47%;
    right: 63.26%;
    top: -14.08%;
    bottom: 73.55%;
  }

  @media ${device.laptop} { 
    top: -53.08%;
    bottom: 4.55%;
  }

  @media ${device.laptopM} { 
    top: -136.08%;
    bottom: -40.45%;
  }

  @media ${device.desktop} { 
    left: -0.47%;
    bottom: -75.45%;
  }
`;

export const Logo = styled.div `
  background-image: url(${logoHorizontal});
  background-repeat: no-repeat;
  background-size: contain;
  width: 90px;
  height: 25px;
  z-index: 1;

  @media ${device.tablet} { 
    width: 135px;
    height: 36px;
  }

  @media ${device.laptop}{
    width: 154px;
    height: 64px;
  }

  @media ${device.laptopM}{
    width: 288px;
    height: 72px;
  }

  @media ${device.desktop} { 
    width: 369px;
    height: 90px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Navigation = styled.div`
  font-size: 20px;
  font-family: Poppins, sans-serif;
  text-decoration: none;
  padding: 10px;
  cursor: pointer;
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
`