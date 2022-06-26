import styled from "styled-components";
import galleryPhoto from '../../assets/images/gallery-photo.png'

export const Container = styled.div `
  margin-bottom: 150px;
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
  margin-bottom: 150px;
`;
export const SlideshowContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  width: 100%;
`;
export const SlideImage = styled.div`
  margin: 25px;
  background-image: url(${galleryPhoto});
  background-repeat: no-repeat;
  background-size: contain;
  width: 579px;
  height: 377.87px;
`;
export const Arrows = styled.div`
  display: flex;
  justify-content: center;
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