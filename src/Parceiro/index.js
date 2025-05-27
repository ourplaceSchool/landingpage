import React from "react";
import {
  Container,
  Title,
  Wrapper,
  Box,
  Info,
  Information,
  SubTitle,
  Button,
  Listing,
} from "./styles";

export default function Parceiro() {
  return (
    <Container id="parceiro">
      <Title>Seja Nosso Parceiro</Title>
      <Wrapper>
        <Box>
          <Info>
            <SubTitle>
              Leve o ensino de idiomas para sua escola ou empresa
            </SubTitle>
            <Information>
              Na <b>Our Place</b>, acreditamos que aprender um novo idioma abre
              portas para o mundo! Por isso, oferecemos parcerias estratégicas
              para escolas e empresas, levando uma metodologia dinâmica e
              interativa para seus alunos e colaboradores.
              <br />
              <br />
              Para <b>Escolas</b>: Complementamos o seu currículo com aulas
              envolventes de inglês e espanhol, alinhadas ao nível e
              necessidades dos alunos.
              <br />
              <br />
              Para <b>Empresas</b>: Potencialize a sua equipe com cursos
              personalizados, focados em comunicação para o ambiente corporativo
              e internacional.
              <br />
              <br />
              <Listing>
                <li>Metodologia inovadora e personalizada;</li>
                <li>Aulas presenciais ou online;</li>
                <li>Parceria flexível e adaptável ao seu espaço e rotina.</li>
              </Listing>
            </Information>
            <Button>
              <a
                href="https://wa.me/5511999610535"
                target="blank"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Clique aqui para saber mais!
              </a>
            </Button>
          </Info>
        </Box>
      </Wrapper>
    </Container>
  );
}
