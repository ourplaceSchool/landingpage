import React from 'react'
import {
  Container,
  Wrapper,
  Title,
  Information,
  CardContainer,
  Card,
  CardText,
  ImageBg1,
  ImageBg2,
  ImageBg3,
  TitleCard,
  InfoCard,
  Button,
  SunIcon
} from './styles'

export default function Metodologia() {
  return (
    <Container id="metodologia">
      <Wrapper>
        <Title>A Life-long learning…</Title>
        <Information>
        A partir da criação de contextos significativos de acordo com cada faixa etária, como leitura, culinária, músicas,histórias, brincadeiras e desafios, inserimos os alunos a língua inglesa de maneira natural gerando um aprendizado orgânico  e eficiente. 
        </Information>
        <Information>
        Além disso, a partir da alfabetização completa das crianças na língua portuguesa inserimos o Common European Framework e o Cambridge English Scale como referências de guia para ensino e níveis de proficiência do aluno. Trabalhando assim de maneira individualizada, completa e os preparando para certificações.
        </Information>
      </Wrapper>
      <Wrapper>
        <CardContainer>
          <Card>
            <ImageBg1 />
            <CardText>
              <TitleCard> 2 a 3 anos</TitleCard>
              <InfoCard>
                Saiba mais... 
              </InfoCard>
            </CardText>
          </Card>

          <Card>
            <ImageBg2 />
            <CardText>
              <TitleCard> 7 a 9 anos</TitleCard>
              <InfoCard>
                Saiba mais... 
              </InfoCard>
            </CardText>
          </Card>

          <Card>
            <ImageBg3 />
            <CardText>
              <TitleCard> 10 a 12 anos</TitleCard>
              <InfoCard>
                Saiba mais... 
              </InfoCard>
            </CardText>
          </Card>
        </CardContainer>
        <Button>MATRICULE-SE</Button>
      </Wrapper>
      <SunIcon />
    </Container>
  )
}