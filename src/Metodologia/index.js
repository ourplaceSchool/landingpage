
import React, { useState } from 'react'
import {
  Modal1,
  Modal2,
  Modal3,
  Modal4,
  Modal5
} from '../components/Modal'

import {
  Container,
  CardWrapper,
  Wrapper,
  Title,
  Information,
  CardContainer,
  Card,
  CardText,
  ImageBg1,
  ImageBg2,
  ImageBg3,
  ImageBg4,
  ImageBg5,
  TitleCard,
  InfoCard,
  Button,
  SunIcon
} from './styles'

export default function Metodologia() {
  let [modalOpen1, setModalOpen1] = useState(false)
  let [modalOpen2, setModalOpen2] = useState(false)
  let [modalOpen3, setModalOpen3] = useState(false)
  let [modalOpen4, setModalOpen4] = useState(false)
  let [modalOpen5, setModalOpen5] = useState(false)

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

      <CardWrapper>
        <CardContainer>
          { !modalOpen1 ?
          <Card 
            onClick={() => setModalOpen1(true)}
          >
              <ImageBg1 />
              <CardText>
                <TitleCard> 2 a 3 anos</TitleCard>
                <InfoCard>
                  Saiba mais...
                </InfoCard>
              </CardText>
          </Card>
          : <Modal1 closeModal1={setModalOpen1}/>
        }

        { !modalOpen2 ?
                  <Card 
                    onClick={() => setModalOpen2(true)}
                  >
                <ImageBg2 />
                <CardText>
                  <TitleCard> 7 a 9 anos</TitleCard>
                  <InfoCard>
                    Saiba mais... 
                  </InfoCard>
                </CardText>
              </Card>
          : <Modal2 closeModal2={setModalOpen2}/>
        } 
            
        { !modalOpen3 ?
          <Card 
            onClick={() => setModalOpen3(true)}
          >
                <ImageBg3 />
                <CardText>
                  <TitleCard> 10 a 12 anos</TitleCard>
                  <InfoCard>
                    Saiba mais... 
                  </InfoCard>
                </CardText>
              </Card>
          : <Modal3 closeModal3={setModalOpen3}/>
        }

        { !modalOpen4 ?
          <Card 
            onClick={() => setModalOpen4(true)}
          >
                <ImageBg4 />
                <CardText>
                  <TitleCard> 13 a 16 anos</TitleCard>
                  <InfoCard>
                    Saiba mais... 
                  </InfoCard>
                </CardText>
              </Card>
          : <Modal4 closeModal4={setModalOpen4}/>
        }

        { !modalOpen5 ?
          <Card 
            onClick={() => setModalOpen5(true)}
          >
                <ImageBg5 />
                <CardText>
                  <TitleCard> 13 a 16 anos</TitleCard>
                  <InfoCard>
                    Saiba mais... 
                  </InfoCard>
                </CardText>
              </Card>
          : <Modal5 closeModal5={setModalOpen5}/>
        }

        </CardContainer>
        <Button>MATRICULE-SE</Button>
      </CardWrapper>
      <SunIcon />
    </Container>
  )
}