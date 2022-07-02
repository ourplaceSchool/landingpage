import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
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
  GreenStainBottom,
  InputBox,
  InputFields,
  MessageField,
  Input,
  InputLabel,
  ProfileIcon,
  InputDiv,
  EmailIcon,
  CallIcon,
  Button
} from './styles'

export default function FaleConosco() {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pn3i43y', 'ourplacecontactform', form.current, 'DqAwU5RY3lcyym7Uf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    form.current.reset();
  };


  return (
    <Container>
      <ColoredTopBg />
      <Title>Fale Conosco</Title>
      <Box>
        <Div>
          <PinLocation  />
          <Info>Av. Sen. Casemiro da Rocha, 981</Info>
        </Div>

        <Div>
          <PhoneIcon />
          <Info>+11 99961-0535</Info>
        </Div>

        <Div>
          <IconEmail />
          <Info>milena@ourplace.com.br</Info>
        </Div>
      </Box>
      <Wrapper ref={form} onSubmit={sendEmail}>
        <GreenStainBottom />
        <InputBox>
          <InputFields>
            <InputDiv>
              <InputLabel>Nome</InputLabel>
              <Input type='text' name="user_name"/>
              <ProfileIcon />
            </InputDiv>

            <InputDiv>
              <InputLabel>E-mail</InputLabel>
              <Input type='email' name="user_email"/>
              <EmailIcon />
            </InputDiv>

            <InputDiv>
              <InputLabel>Telefone</InputLabel>
              <Input type='phone' name="user_phone"/>
              <CallIcon />
            </InputDiv>
          </InputFields>
          <InputDiv>
            <InputLabel>Sua Mensagem</InputLabel>
            <MessageField type="textarea" name="message" placeholder='Digite aqui seu texto'/>
          </InputDiv>
        </InputBox>
        <Button type="submit" value="Send">Enviar Mensagem</Button>
      </Wrapper>
    </Container>
  )
}
