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
  height: 57%;

  @media ${device.mobileL} { 
    height: 80%;
  }

  @media ${device.tablet} { 
    height: 100%;
  }
`;
export const dotsContainer = styled.div`
  display: flex;
  justify-content: center;
`;
