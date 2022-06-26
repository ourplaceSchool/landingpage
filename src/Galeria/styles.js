import styled from "styled-components";
import coloringGallery from '../assets/images/coloring-gallery.png'
import galleryPhoto from '../assets/images/gallery-photo.png'


export const Container = styled.div `
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 80px;
  padding-top: 20px;
  position: relative;
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
`;
export const GalleryWrapper = styled.div `
  display: flex;
`;
export const GalleryPhoto = styled.div `
  background-image: url(${galleryPhoto});
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: 215px;
  width: 600px;
  height: 400px;
  z-index: 2;
`;