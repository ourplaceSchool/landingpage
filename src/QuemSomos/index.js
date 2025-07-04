import React from 'react'
import {
  Container,
  Title,
  Wrapper,
  GreenFrame,
  ProfilePhoto,
  Box,
  Info,
  H4,
  Information,
  Bold,
  HouseLogo,
} from './styles'

export default function QuemSomos() {

  return (
    <Container id="quemsomos">
      <Title>Quem Somos</Title>
      <Wrapper>
        <GreenFrame />
        <Box>
          <ProfilePhoto>
            <img
              style={{
                margin: "0px 0px 0px 0px",
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
              alt="Foto da Milena"
              src="https://res.cloudinary.com/ourplaceeglishschool/image/upload/c_fill,w_200,h_250,ar_9:16,g_auto/v1748533046/website/Quem%20Somos/Milena_p0ibwy.jpg"
            />
          </ProfilePhoto>
          <Info>
            <H4>Conheça a nossa Idealizadora</H4>
            <Information>
              Hello! Sou a Milena, tenho formação em psicologia, educação
              infantil e pedagogia. Estudar inglês começou muito cedo em minha
              vida. Eu tinha apenas 5 anos! Desde então, foram muitos anos
              estudando em escolas de idiomas, fazendo aulas particulares, além
              de passar um período morando na Inglaterra. Mesmo assim, tenho
              muitas referências também do inglês falado nos Estados Unidos. O
              tempo passa rápido e quando olho para trás, vejo uma experiência
              de mais 14 anos, mergulhada no universo infantil, misturado com o
              ensino da língua inglesa! Sou verdadeiramente apaixonada pelo meu
              trabalho! Adoro inventar novidades, músicas e novas maneiras de
              trabalhar com os materiais! Toda essa invenção é sentida e vivida
              pelos nossos alunos e professores, que têm, de mim, todo o apoio
              necessário! Conto com uma equipe de professores excelente! Na Our
              Place / Nuestro Lugar, somos todos muito comprometidos com a
              qualidade das aulas e, por isso, fazemos constantemente cursos de
              reciclagem e aperfeiçoamento, focando tanto nas técnicas de ensino
              quanto no conhecimento das línguas inglesa e espanhola.
              <br/>
              <br/>
              <Bold>Welcome to Our Place! Bienvenidos a Nuestro Lugar!</Bold>
              <br/>
            </Information>
            <HouseLogo />
          </Info>
        </Box>
      </Wrapper>
    </Container>
  );
}
