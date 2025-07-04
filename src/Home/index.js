import React from 'react'

import {
  Container,
  BoxContainer,
  Title,
  SubTitle,
  H5,
  Button,
  InfoWrapper,
  InfoCard,
  Titulo,
  Information,
  BookIcon,
  OpenBookIcon,
  TeacherIcon,
  ButtonBottom,
  Star,
  ArrowCurvey,
  CurlyBg,
  Color,
  Title2,
  SubTitle2,
  PrimaryColor,
  InfoBox,
  TextInfoBox,
  ClassroomVector
} from './styles'

export default function Home() {
  return (
    <Container id="home" styles={{ marginTop: "30px" }}>
      <BoxContainer>
        <Title>
          No matter where, we get there!
          <Star />
        </Title>
        <SubTitle>No importa donde, estaremos ahí!</SubTitle>
        <H5>
          Inglês e espanhol para crianças, adolescentes e adultos. Online e
          presencial.
        </H5>
        <Button>
          <a
            href="https://wa.me/5511999610535"
            target="blank"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            Clique para uma aula teste!
          </a>
        </Button>
        <ArrowCurvey />

        <ClassroomVector />
      </BoxContainer>

      <CurlyBg />
      <InfoBox>
        <Title2>
          Making the world <Color>our place!</Color>
        </Title2>
        <SubTitle2>
          Haciendo del mundo <PrimaryColor>nuestro lugar!</PrimaryColor>
        </SubTitle2>
        <TextInfoBox>
          A <strong>Our Place/ Nuestro Lugar</strong> é uma instituição de
          ensino afetivo, lúdico e personalizado, de acordo com os interesses de
          cada aluno e faixa etária, que oferece o serviço no conforto de sua
          casa, de maneira presencial ou online, sem tomar o seu tempo, ou em
          nosso espaço estudantil, planejado para oferecer aos alunos uma
          experiência sensorial e interativa, complementando a forma de
          metodologia. Independentemente de onde você estiver, nos preparamos
          para ensinar inglês de maneira efetiva e divertida, transformando
          qualquer lugar em nossa sala de aula.
        </TextInfoBox>
      </InfoBox>

      {/* INFOS */}
      <InfoWrapper>
        <InfoCard>
          <BookIcon />
          <Titulo>Nada é mais poderoso do que a sede por conhecimento!</Titulo>
          <Information>
          Por isso, focamos em transformar o aprendizado em um processo prazeroso,
fazendo com que aquilo que seria uma obrigação se torne um desejo diário, ao
trabalhar a sua ambição a favor de seu processo evolutivo e do desenvolvimento da
língua e, assim, garantir resultados prósperos.
          </Information>
        </InfoCard>

        <InfoCard>
          <OpenBookIcon />
          <Titulo>
          Aqui você aprende inglês e espanhol de verdade!
          </Titulo>
          <Information>
          Tanto para quem vai começar do zero, quanto para aqueles que já tiveram aulas de
inglês e de espanhol na escola, nós oferecemos a oportunidade de aprender a se
comunicar como um nativo. Diferentemente de outros cursos ou aulas de inglês e de
espanhol, nós trabalhamos o idioma de maneira natural, usando todos os sentidos,
através de atividades do dia a dia, tais como músicas, leituras e comunicação oral,
expondo, desta forma, o aluno a vocabulários diversos, utilizados comumente
apenas por aqueles que possuem o inglês e o espanhol como primeira língua. Nada
de travas ou decorebas, aqui você se destaca aprendendo o inglês e o espanhol
reais!
          </Information>
        </InfoCard>

        <InfoCard>
          <TeacherIcon />
          <Titulo>Você é único para nós!</Titulo>
          <Information>
          Planejamos nossas aulas de maneira cuidadosa e personalizada para cada faixa
etária, focando em abordagens efetivas, que desenvolvam o interesse dos alunos
pelas lições! Diferentemente de outros cursos mais sistemáticos, além das aula
individuais, trabalhamos com grupos de somente até quatro alunos na nossa sala de
aula, pois acreditamos na individualidade de cada um e analisamos frequentemente
os pontos fortes e aqueles a serem desenvolvidos. Assim, todos dominam os
idiomas de maneira fluente e natural.
          </Information>
        </InfoCard>
      </InfoWrapper>
      <ButtonBottom>
        <a
          href="https://wa.me/5511999610535"
          target="blank"
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          Clique para uma aula teste!
        </a>
      </ButtonBottom>
    </Container>
  );
}
