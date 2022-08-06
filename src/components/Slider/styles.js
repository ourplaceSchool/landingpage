import styled from "styled-components";
import { device } from "../../device";

export const SlideContainer = styled.div`
  height: 100%;
  position: relative;
`;
export const SlideImage = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;

  /* @media ${device.tablet} { 
    position: relative;
    margin: 25px;
    width: 579px;
    height: 377.87px;
  } */
`;
export const dotsContainer = styled.div`
  display: flex;
  justify-content: center;
`;
