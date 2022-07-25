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
  ColoredBg,
} from './styles'

export default function QuemSomos() {
  return (
    <Container id="quemsomos">
      <Title>Quem Somos</Title>
      <Wrapper>
        <GreenFrame />
        <Box>
          <ProfilePhoto />
          <Info>
            <H4>Conheça a nossa Idealizadora</H4>
            <Information>
            Hello! Sou a Milena, tenho formação em Psicologia, Educação Infantil e Pedagogia. Estudar inglês começou muito cedo em minha vida. Eu tinha apenas 5 anos! Desde então, foram muitos anos estudando em escolas de idiomas, fazendo aulas particulares, além de passar um período morando na Inglaterra. Mesmo assim, tenho muitas referências também do inglês falado nos Estados Unidos. 
            O tempo passa rápido e quando olho para trás vejo uma experiência de mais 14 anos mergulhada no universo infantil misturado com o ensino da língua inglesa! Sou verdadeiramente apaixonada pelo meu trabalho! Adoro inventar novidades, músicas e novas maneiras de trabalhar com os materiais! Toda essa invenção é sentida e vivida pelos nossos alunos e professores, que têm de mim, todo o apoio necessário! Conto com uma equipe de professores excelente! Na Our Place, somos todos muito comprometidos com a qualidade das aulas e por isso, fazemos constantemente cursos de reciclagem e aperfeiçoamento, focando tanto técnicas de ensino quanto o conhecimento da língua inglesa. 

            <Bold>Welcome to Our Place!</Bold> 
            </Information>
            <HouseLogo />
          </Info>
        </Box>
      </Wrapper>
      <ColoredBg />
    </Container>
  )
}
