import React from 'react'
import { 
  Container,
  Logo,
  Wrapper,
  Navegation,
  Button
} from './styles'

export default function NavBar() {
  return (
    <Container>
      <Logo />
      <Wrapper>
        <Navegation href='#'>Home</Navegation>
        <Navegation href='#'>Metodologia</Navegation>
        <Navegation href='#'>Quem Somos</Navegation>
        <Navegation href='#'>Fale Conosco</Navegation>
        <Navegation href='#'>Galeria</Navegation>
      </Wrapper>
      <Button>MATRICULE-SE</Button>
    </Container>
  )
}
