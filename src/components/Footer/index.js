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
  CopyRight,
  AnchorLink
} from './styles'

export default function Footer() {

  if(window.innerWidth < 900){
    return (
      <Container>
          <Div>
            <Logo />
            <Wrapper>
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

                  <AnchorLink
                    href="https://www.instagram.com/inglesourplace/"
                    target="_blank"
                  >
                    <InstaIcon />
                  </AnchorLink>

                  <AnchorLink
                    href="https://www.facebook.com/inglesourplace/"
                    target="_blank"
                  >
                    <FacebookIcon />
                  </AnchorLink>

                  <AnchorLink
                    href="milena@ourplace.com.br"
                    target="_blank"
                  >
                  <MailIcon />
                  </AnchorLink>
                  </RedeSociais>           
              </Info>
            </Wrapper>
          </Div>
            <CopyRight>
              © 2022 by Our Place. Todos os direitos reservados.
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
              Avenida Senador Casimiro da Rocha, 981, Sala 7 -
              Mirandopolis - São Paulo
              </Information>          
            </Info>

            <Info>
              <Titulo>Redes Sociais</Titulo>
              <RedeSociais>

                <AnchorLink
                  href="https://www.instagram.com/inglesourplace/"
                  target="_blank"
                >
                  <InstaIcon />
                </AnchorLink>

                <AnchorLink
                  href="https://www.facebook.com/inglesourplace/"
                  target="_blank"
                >
                  <FacebookIcon />
                </AnchorLink>

                <AnchorLink
                  href="milena@ourplace.com.br"
                  target="_blank"
                >
                <MailIcon />
                </AnchorLink>
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
}
