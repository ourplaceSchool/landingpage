import styled from "styled-components";
import { device } from "../../device";

export const ModalCard = styled.div`
  width: 100%;
  height: 385px;
  margin: 5px;
  border-radius: 8px;
  box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  z-index: 1;
  overflow: hidden;
  cursor: pointer;
  
  @media ${device.tablet} { 
    width: 46%;
  }
  @media ${device.desktop} { 
    width: 25%;
    height: 610px;
  }
`