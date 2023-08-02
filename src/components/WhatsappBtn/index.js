import React from "react";
import { Container, WhastappLink, WhatsappBtnImg } from "./styles.js";

export const WhatsappBtn = () => {

  return(
    <Container>
      <WhastappLink 
        href="https://api.whatsapp.com/send?phone=5511943300535&text=Ol%C3%A1%2C%20gostaria%20de%20receber%20informa%C3%A7%C3%B5es%20sobre%20a%20Our%20Place%20English%20School!"
        target="_blank"
      >
        <WhatsappBtnImg />
      </WhastappLink>
    </Container>
  )
}