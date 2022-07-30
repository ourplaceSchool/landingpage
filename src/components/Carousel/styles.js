import styled from "styled-components";
import galleryPhoto from '../../assets/images/gallery-photo.png'
import { device } from "../../device";

export const Container = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  margin: 0 auto;

`;
export const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SlideshowContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  width: 100%;
`;
export const SlideImage = styled.div`
  background-image: url(${galleryPhoto});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  width: 224px;
  height: 150px;

  @media ${device.tablet} { 
    position: relative;
    margin: 25px;
    width: 579px;
    height: 377.87px;
  }
`;
export const Arrows = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 165px;
  margin-bottom: 10px;
  z-index: 99;

  @media ${device.tablet} { 
    /* position: relative; */
    margin-top: 0;
    margin-bottom: 0;
  }
`;
export const ArrowLeft = styled.div`
  cursor: pointer;
  font-size: 25px;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  margin-right: 90px;

  &:hover {
    color: ${({ theme }) =>  theme.colors.primary};
  }
`;
export const ArrowRight = styled.div`
  cursor: pointer;
  font-size: 25px;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  margin-left: 90px;

  &:hover {
    color: ${({ theme }) =>  theme.colors.primary};
  }
`;
export const CarouselImg = styled.img`
  max-width:100%;
  max-height:100%;
`