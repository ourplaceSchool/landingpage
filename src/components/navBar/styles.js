import styled from "styled-components";
import { device } from '../../device';
import logoHorizontal from '../../assets/images/logo-horizontal.png'

export const Container = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background-color: ${({ theme }) =>  theme.colors.primary};
  height: 57px;
  padding: 0 20px;
  color: ${({ theme }) => theme.colors.wite};

  @media ${device.laptop} { 
    height: 32px;
    padding: 40px 40px;
  }

`;

export const Logo = styled.div `
  background-image: url(${logoHorizontal});
  background-repeat: no-repeat;
  background-size: contain;
  width: 57px;
  height: 15px;

  @media ${device.laptop} { 
    width: 124px;
    height: 32px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Navegation = styled.div`
  font-size: 20px;
  font-family: Poppins, sans-serif;
  color: ${({ theme }) =>  theme.colors.white};
  text-decoration: none;
  padding: 10px;

  &:hover {
    color: ${({ theme }) =>  theme.colors.darkPrimary};
  }
`;
export const DropdownButton = styled.div`
  z-index: 100;
`;
export const DropDownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-top: 48px;
  border-radius: 5px;
  padding: 20px;
  padding-bottom: 20px;
  position: absolute;
  right: 0;
  top: 0;

`;
export const Button = styled.button `
  background-color: ${({ theme }) =>  theme.colors.darkPrimary};
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