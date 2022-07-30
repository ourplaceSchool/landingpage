import styled from "styled-components";
import { device } from "../device";
import coloringGallery from '../assets/images/coloring-gallery.png'


export const Container = styled.div `
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  /* margin-bottom: 220px; */

  @media ${device.tablet} { 
    padding: 80px;
    overflow: hidden;
    margin-bottom: 0;
  }
`;
export const Title = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  font-size: 64px;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
`;
export const ColoringGallery = styled.div `
  background-image: url(${coloringGallery});
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 500px;
  align-self: baseline;
  z-index: -1;
  position: absolute;
  bottom: -5px;
  left: 780px;

  @media ${device.laptopM} { 
    left: 870px
  }
`;
export const GalleryWrapper = styled.div `
  display: flex;
`;
