import styled from "styled-components"
import { device } from "../../device"
import whatsappBtn from '../../assets/images/whatsappBtn.png'

export const WhatsappBtnImg = styled.div `
  background-image: url(${whatsappBtn});
  background-repeat: no-repeat;
  background-size: contain;
  width: 50px;
  height: 50px;
  
  @media ${device.laptop} { 
    width: 100px;
    height: 100px; 
  }
`;

export const WhastappLink = styled.a`

`;

export const Container = styled.div `
  z-index: 9999;
  position: fixed;
  right: 25px;
  bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media ${device.laptop} { 
    bottom: 80px;
  }
`;