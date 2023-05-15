import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillMail } from 'react-icons/ai';
import { 
  Container,
  Logo,
  Wrapper,
  Titulo,
  Information,
  Info,
  InfoSociais,
  RedeSociais,
  Div,
  CopyRight,
  AnchorLink
} from './styles'

export default function Footer() {
  const socialIcons = {
    tablet: {
      width: '30px',
      height: '30px',

    },
    laptop: {
      width: '60px',
      height: '60px',
    }
  }

  if(window.innerWidth < 900){
    return (
      <Container>
          <Div>
            <Logo />
            <Wrapper>
              <Info>
                <Titulo>Unidades</Titulo>
                <Information>
                  Avenida Açocê, 494, São Paulo<br/>
                  CEP 04075-023
                </Information>          
              </Info>

              <InfoSociais>
                <Titulo>Redes Sociais</Titulo>
                <RedeSociais>

                  <AnchorLink
                    href="https://www.instagram.com/inglesourplace/"
                    target="_blank"
                  >
                    <AiFillInstagram style={socialIcons.tablet}/>
                  </AnchorLink>

                  <AnchorLink
                    href="https://www.facebook.com/inglesourplace/"
                    target="_blank"
                  >
                    <AiFillFacebook style={socialIcons.tablet}/>
                  </AnchorLink>

                  <AnchorLink
                    href="milena@ourplace.com.br"
                    target="_blank"
                  >
                  <AiFillMail style={socialIcons.tablet}/>
                  </AnchorLink>
                  </RedeSociais>           
              </InfoSociais>
            </Wrapper>
          </Div>
            <CopyRight>
              {`© ${new Date().getFullYear()} by Our Place. Todos os direitos reservados.`}
            </CopyRight>
      </Container>
    )
  } else {
    return(
      <Container>
        <Div>
          <Logo />
          <Wrapper>
            <Info>
              <Titulo>Sobre</Titulo>
              <Information>
              A Our Place é uma instituição de ensino afetivo lúdico e personalizado de acordo com os interesses de cada aluno e faixa etária. Que oferece o serviço no conforto de sua casa, de maneira presencial ou online, sem tomar o seu tempo ou em nosso espaço estudantil, planejado para oferecer aos alunos uma experiência sensorial e interativa complementando a forma de metodologia.
              Independente de onde esteja, nos preparamos para ensinar Inglês de maneira efetiva e divertida transformando qualquer lugar em nossa sala de aula.
              </Information>          
            </Info>

            <Info>
              <Titulo>Unidades</Titulo>
              <Information>
                Avenida Açocê, 494, São Paulo<br/>
                CEP 04075-023
              </Information>          
            </Info>

            <InfoSociais>
              <Titulo>Redes Sociais</Titulo>
              <RedeSociais>

                <AnchorLink
                  href="https://www.instagram.com/inglesourplace/"
                  target="_blank"
                >
                  <AiFillInstagram style={socialIcons.laptop}/>
                </AnchorLink>

                <AnchorLink
                  href="https://www.facebook.com/inglesourplace/"
                  target="_blank"
                >
                  <AiFillFacebook style={socialIcons.laptop}/>
                </AnchorLink>

                <AnchorLink
                  href="mailto:milena@ourplace.com.br"
                  target="_blank"
                >
                <AiFillMail style={socialIcons.laptop}/>
                </AnchorLink>
              </RedeSociais>         
            </InfoSociais>
          </Wrapper>
        </Div>
          <CopyRight>
            {`© ${new Date().getFullYear()} by Our Place. Todos os direitos reservados.`}
          </CopyRight>
      </Container>
    )
  }
}
