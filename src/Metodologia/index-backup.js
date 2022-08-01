
import React, { useState } from 'react'
import { Button, Modal } from '@mui/material';
import './index.css'

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
  Btn,
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
          <Card 
            onClick={() => setModalOpen1(true)}
          >
              <ImageBg1 />
              <CardText>
                <TitleCard> 3 a 6 anos</TitleCard>
                <InfoCard>
                <Button onClick={modalOpen1}>Saiba mais...</Button>
                </InfoCard>
              </CardText>
          </Card>

      <Modal
        open={modalOpen1}
        onClick={() => modalOpen1(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <TitleCard> 2 a 3 anos</TitleCard>
        <InfoCard>
          É cientificamente comprovado que a introdução da música na primeira infância causa inúmeros benefícios como :
          Melhora no aprendizado
          Desenvolvimento da expressão corporal
          Estímulo da memória
          Auxilia na coordenação motora
          Desenvolvimento da linguagem e criatividade 
        </InfoCard>
        <InfoCard>
        Por isso criamos o nosso método no qual  por meio de muita música, brincadeiras e histórias, as crianças entram em contato com a sonoridade da língua inglesa, onde conhecem o novo vocabulário de maneira poderosa e divertida aprendendo a se comunicar desde os primeiros momentos da vida como se esta fosse sua língua nativa. Tudo isso enquanto se divertem e se beneficiam de estímulos psicomotores.
        </InfoCard>
        <HouseLogo />
      </Modal>

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
        <Btn>MATRICULE-SE</Btn>
      </CardWrapper>
      <SunIcon />
    </Container>
  )
}