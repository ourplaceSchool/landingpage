import React from 'react'

import { 
  Container,
  Logo,
  Wrapper,
  Titulo,
  Information,
  Info,
  RedeSociais,
  InstaIcon,
  MailIcon,
  FacebookIcon,
  Div,
  CopyRight
} from './styles'

export default function Footer() {
  return (
    <Container>
        <Div>
          <Logo />
          <Wrapper>
            <Info>
              <Titulo>Sobre</Titulo>
              <Information>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              </Information>          
            </Info>

            <Info>
              <Titulo>Unidades</Titulo>
              <Information>
              Avenida Senador Casimiro da Rocha, 981, Sala 7 -
              Mirandopolis - São Paulo
              </Information>          
            </Info>

            <Info>
              <Titulo>Redes Sociais</Titulo>
              <RedeSociais>
                <InstaIcon />
                <FacebookIcon />
                <MailIcon />
              </RedeSociais>         
            </Info>
          </Wrapper>
        </Div>
          <CopyRight>
            © 2022 by Our Place. Todos os direitos reservados.
          </CopyRight>
    </Container>
  )
}
