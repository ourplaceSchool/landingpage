import React from 'react'
import { NavLink } from "react-router-dom";
import { 
  Container,
  Logo,
  Wrapper,
  Navegation,
  Button
} from './styles'

export default function NavBar() {

  let activeStyle = {
    color: '#1B6270',
    textDecoration: 'none'
  };

  let nonActive = {
    color: 'white',
    textDecoration: 'none',
  }

  return (
    <Container>
      <Logo />
      <Wrapper>

        <Navegation>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? activeStyle : nonActive
            }
          > Home </NavLink>
        </Navegation>

        <Navegation>
          <NavLink
              to="/metodologia"
              style={({ isActive }) =>
                isActive ? activeStyle : nonActive
              }
            > Metodologia </NavLink>
        </Navegation>

        <Navegation>
          <NavLink
              to="/sobre"
              style={({ isActive }) =>
                isActive ? activeStyle : nonActive
              }
          > Quem Somos </NavLink>
        </Navegation>

        <Navegation>
          <NavLink
              to="/contato"
              style={({ isActive }) =>
                isActive ? activeStyle : nonActive
              }
          > Fale Conosco </NavLink>
        </Navegation>

        <Navegation>
          <NavLink
              to="/galeria"
              style={({ isActive }) =>
                isActive ? activeStyle : nonActive
              }
          > Galeria </NavLink>
        </Navegation>
      </Wrapper>
      <Button>MATRICULE-SE</Button>
    </Container>
  )
}
