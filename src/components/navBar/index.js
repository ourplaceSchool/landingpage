import React from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { NavLink } from "react-router-dom";
import { 
  Container,
  Logo,
  Wrapper,
  Navegation,
  Button,
  BurgerLineStyle
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
      <HiOutlineMenuAlt3 style={{
        color: 'white',
        height: '25px',
        width: '25px',
      }}/>
      {/*
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
      <Button>MATRICULE-SE</Button> */}
    </Container>
  )
}
