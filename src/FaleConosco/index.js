import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import { device } from "../device"

import {
  Container,
  Title,
  ColoredTopBg,
  Box,
  PinLocation,
  PhoneIcon,
  IconEmail,
  Info,
  Div,
  Wrapper,
  StainBottom,
  InputBox,
  InputFields,
  MessageField,
  Input,
  InputLabel,
  ProfileIcon,
  InputDiv,
  EmailIcon,
  CallIcon,
  Button,
  Rainbow,
} from './styles'

export default function FaleConosco() {
  // SweetAlert 
  const MySwal = withReactContent(Swal)

  const success = () => {
    MySwal.fire({
      title: "Thank you!",
      text: "Sua Mensagem foi enviada!",
      icon: "success",
    });
  }

  // const invalid = () => {
  //   MySwal.fire({
  //     title: "Oops!",
  //     text: "Parece que você esqueceu alguma informação.",
  //     icon: "error",
  //   });
  // }

  const failed = () => {
    MySwal.fire({
      title: "Sorry",
      text: "Não conseguimos enviar sua mensagem! Please, tenta de novo.",
      icon: "error",
    });
  };

  // Contact form 
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pn3i43y', 'ourplacecontactform', form.current, 'DqAwU5RY3lcyym7Uf')
      .then((result) => {
          success();
          console.log(result.text);
      }, (error) => {
          failed();
          console.log(error.text);
      });

    form.current.reset();
  };

  const deviceSize = () => {
    if(device.mobileS && device.mobileM && device.mobileL){
      return `display: 'none'`
    }
  }

  return (
    <Container>
      <ColoredTopBg />
      <Title>Fale Conosco</Title>
      <Box>
        <Div style={{deviceSize}}>
          <PinLocation/>
          <Info>Av. Sen. Casemiro da Rocha, 981</Info>
        </Div>

        <Div>
          <PhoneIcon />
          <Info>+11 94330-0535</Info>
          <Info>+11 99961-0535</Info>
        </Div>

        <Div>
          <IconEmail />
          <Info>milena@ourplace.com.br</Info>
        </Div>
      </Box>
      <Wrapper ref={form} onSubmit={sendEmail}>
        <StainBottom />
        <InputBox>
          <InputFields>
            <InputDiv>
              <InputLabel>Nome</InputLabel>
              <Input type='text' name="user_name" required/>
              <ProfileIcon />
            </InputDiv>

            <InputDiv>
              <InputLabel>E-mail</InputLabel>
              <Input type='email' name="user_email" required/>
              <EmailIcon />
            </InputDiv>

            <InputDiv>
              <InputLabel>Telefone</InputLabel>
              <Input type='tel' name="user_phone"/>
              <CallIcon />
            </InputDiv>
          </InputFields>
          <InputDiv>
            <InputLabel>Sua Mensagem</InputLabel>
            <MessageField type="textarea" name="message" placeholder='Digite aqui seu texto' required/>
          </InputDiv>
        </InputBox>
        <Button type="submit" value="Send">Enviar Mensagem</Button>
      </Wrapper>
      <Rainbow />
    </Container>
  )
}
