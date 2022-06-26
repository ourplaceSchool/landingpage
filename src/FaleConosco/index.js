import React from 'react'
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
      <Wrapper>
        <GreenStainBottom />
        <InputBox>
          <InputFields>
            <InputDiv>
              <InputLabel>Nome</InputLabel>
              <Input type='text' />
              <ProfileIcon />
            </InputDiv>

            <InputDiv>
              <InputLabel>E-mail</InputLabel>
              <Input type='email' />
              <EmailIcon />
            </InputDiv>

            <InputDiv>
              <InputLabel>Telefone</InputLabel>
              <Input type='phone' />
              <CallIcon />
            </InputDiv>
          </InputFields>
          <InputDiv>
            <InputLabel>Sua Mensagem</InputLabel>
            <MessageField type="textarea" placeholder='Digite aqui seu texto'/>
          </InputDiv>
        </InputBox>
        <Button>Enviar Mensagem</Button>
      </Wrapper>
    </Container>
  )
}
