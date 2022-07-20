import React, { useRef, useState } from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { NavLink } from "react-router-dom";
import { device } from '../../device';
import { 
  Container,
  Logo,
  Wrapper,
  Navegation,
  Button,
  DropdownButton,
  DropDownWrapper
} from './styles'

export default function NavBar() {
  const dropDownRef = useRef(null)
  const [isActive, setIsActive] = useState(false)
  const onClick = () => setIsActive(!isActive)
  console.log(isActive)

  let activeStyle = {
    color: '#1B6270',
    textDecoration: 'none'
  };

  let nonActive = {
    color: 'white',
    textDecoration: 'none',
  }


  if(window.innerWidth < 769){
    console.log('Tamanho da Janela', window.innerWidth)
    return(
      <Container>
        
      <Logo />
      <DropdownButton             
        onClick={onClick} 
        ref={dropDownRef}
      >
      { !isActive ?
        <HiOutlineMenuAlt3 
          style={{
          color: 'white',
          height: '25px',
          width: '25px',
        }}/>

         : (
          <>
            <HiOutlineMenuAlt3 
              style={{
              color: 'white',
              height: '25px',
              width: '25px',
            }}/>

            <DropDownWrapper ref={dropDownRef}>
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
            </DropDownWrapper>
          </>
          )
        }
        </DropdownButton>
      </Container>
    )
  } else {
    console.log('Tamanho da Janela', window.innerWidth)
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

}
