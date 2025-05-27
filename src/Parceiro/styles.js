import styled from "styled-components";
import { device } from "../device";

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
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  font-size: 25px;
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
export const SubTitle = styled.h1`
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  font-size: 20px;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  width: 100%;
  z-index: 2;

    @media ${device.laptopM} {
    font-size: 32px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 85%;
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

`;
export const Box = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;

  @media ${device.laptopM} {
    width: 90%;
  }
`;
export const Information = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 9px;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  padding: 10px 0px;
  margin: 0;

  @media ${device.tablet} {
    font-size: 12px;
  }
  @media ${device.laptop} {
    font-size: 14px;
  }

  @media ${device.laptopM} {
    margin-top: 10px;
    font-size: 18px;
  }

  @media ${device.desktop} {
    font-size: 24px;
  }
`;
export const Button = styled.button `
  background-color: ${({ theme }) =>  theme.colors.primary};
  color: ${({ theme }) =>  theme.colors.white};
  border-radius: 8px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 177px;
  height: 33px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-size: 11px;
  line-height: 18px;
  z-index: 3;
  margin-bottom: 20px;

  &:hover {
    background-color: ${({ theme }) =>  theme.colors.darkHover};
  }

  @media ${device.tablet} {
    font-size: 14px;
    width: 223px;
  }
  @media ${device.laptop} {
    font-size: 14px;
  }

  @media ${device.laptopM} {
    font-size: 18px;
    width: 290px;
    margin-top:10px;
    margin-bottom: 30px;
  }

  @media ${device.desktop} {
    font-size: 24px;
    padding: 15px;
    width: 380px;
    height: auto;
    margin-top:10px;
    margin-bottom: 30px;
  }
  `;

  export const Listing = styled.ul `
    padding: 15px;
    margin: 0px;
  `;

