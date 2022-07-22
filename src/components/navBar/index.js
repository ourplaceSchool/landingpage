import React, { useRef, useState } from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { NavLink } from "react-router-dom";
import { device } from '../../device';
import { 
  Container,
  Logo,
  Wrapper,
  Navigation,
  Button,
  DropdownButton,
  DropDownWrapper
} from './styles'

export default function NavBar() {
  const dropDownRef = useRef(null)
  const [isActive, setIsActive] = useState(false)
  const onClick = () => setIsActive(!isActive)

  let activeStyle = {
    color: '#1B6270',
    textDecoration: 'none'
  };

  let nonActive = {
    color: 'white',
    textDecoration: 'none',
  }


  if(window.innerWidth < 769){
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
              <Navigation>
                <NavLink
                  to="/"
                  style={({ isActive }) =>
                    isActive ? activeStyle : nonActive
                  }
                > Home </NavLink>
              </Navigation>

              <Navigation>
                <NavLink
                    to="/metodologia"
                    style={({ isActive }) =>
                      isActive ? activeStyle : nonActive
                    }
                  > Metodologia </NavLink>
              </Navigation>

              <Navigation>
                <NavLink
                    to="/sobre"
                    style={({ isActive }) =>
                      isActive ? activeStyle : nonActive
                    }
                > Quem Somos </NavLink>
              </Navigation>

              <Navigation>
                <NavLink
                    to="/contato"
                    style={({ isActive }) =>
                      isActive ? activeStyle : nonActive
                    }
                > Fale Conosco </NavLink>
              </Navigation>

              <Navigation>
                <NavLink
                    to="/galeria"
                    style={({ isActive }) =>
                      isActive ? activeStyle : nonActive
                    }
                > Galeria </NavLink>
              </Navigation>
            </DropDownWrapper>
          </>
          )
        }
        </DropdownButton>
      </Container>
    )
  } else {
    return (
      <Container>
        <Logo />
        <Wrapper>

          <Navigation>
            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive ? activeStyle : nonActive
              }
            > Home </NavLink>
          </Navigation>

          <Navigation>
            <NavLink
                to="/metodologia"
                style={({ isActive }) =>
                  isActive ? activeStyle : nonActive
                }
              > Metodologia </NavLink>
          </Navigation>

          <Navigation>
            <NavLink
                to="/sobre"
                style={({ isActive }) =>
                  isActive ? activeStyle : nonActive
                }
            > Quem Somos </NavLink>
          </Navigation>

          <Navigation>
            <NavLink
                to="/contato"
                style={({ isActive }) =>
                  isActive ? activeStyle : nonActive
                }
            > Fale Conosco </NavLink>
          </Navigation>

          <Navigation>
            <NavLink
                to="/galeria"
                style={({ isActive }) =>
                  isActive ? activeStyle : nonActive
                }
            > Galeria </NavLink>
          </Navigation>
        </Wrapper>
        <Button>MATRICULE-SE</Button>
      </Container>
    )
  }

}
