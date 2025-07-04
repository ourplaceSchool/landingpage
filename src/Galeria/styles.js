import styled from "styled-components";
import { device } from "../device";

export const Container = styled.div ``;
export const Title = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  font-size: 25px;
  color: ${({ theme }) =>  theme.colors.darkPrimary};

  @media ${device.tablet} {
    font-size: 64px;
  }
`;

export const GalleryWrapper = styled.div `
    margin: 0 20px;
    padding: 8px;
    border-radius: 8px;
    background-color: #fff;

      @media ${device.tablet} {
    margin-left: 60px;
    margin-right: 60px;
    padding: 24px;
  }
`;
