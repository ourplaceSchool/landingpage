import React, { useState, useEffect } from 'react'
import { device } from '../device';
import { 
  Button, 
  Modal, 
  Box, 
  Typography,
} from '@mui/material';

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
  SunIcon,
  HouseLogo
} from './styles'

const useStyles = {
  mobile: {
    position: "absolute",
    top: "5%",
    left: "20px",
    width: '70%',
    backgroundColor: '#FEF5D0',
    padding: '30px',
    outline: "none",
    border: 'none',
    borderRadius: '5px',
    color: '#1B6270',
  },
  mobileM: {
    position: "absolute",
    top: "5%",
    left: "25px",
    width: '70%',
    backgroundColor: '#FEF5D0',
    padding: '30px',
    outline: "none",
    border: 'none',
    borderRadius: '5px',
    color: '#1B6270',
  },
  mobileL: {
    position: "absolute",
    top: "5%",
    left: "20px",
    width: '75%',
    backgroundColor: '#FEF5D0',
    padding: '30px',
    outline: "none",
    border: 'none',
    borderRadius: '5px',
    color: '#1B6270',
  },
  tablet: {
    position: "absolute",
    top: "20%",
    left: "45px",
    width: '80%',
    backgroundColor: '#FEF5D0',
    padding: '30px',
    outline: "none",
    border: 'none',
    borderRadius: '5px',
    color: '#1B6270',
  },
  laptop: {
    position: "absolute",
    top: "20%",
    left: "75px",
    width: '80%',
    backgroundColor: '#FEF5D0',
    padding: '30px',
    outline: "none",
    border: 'none',
    borderRadius: '5px',
    color: '#1B6270',
  },
  laptopL: {
    position: "absolute",
    top: "20%",
    left: "20%",
    width: '55%',
    backgroundColor: '#FEF5D0',
    padding: '30px',
    outline: "none",
    border: 'none',
    borderRadius: '5px',
    color: '#1B6270',
  },
  primary: {
    color: '#AD4226',
  },
  darkPrimary: {
    color:'#1B6270',
  }
};


export default function Metodologia() {
  let [modalOpen1, setModalOpen1] = useState(false)
  let [modalOpen2, setModalOpen2] = useState(false)
  let [modalOpen3, setModalOpen3] = useState(false)
  let [modalOpen4, setModalOpen4] = useState(false)
  let [modalOpen5, setModalOpen5] = useState(false)

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const responsiveness = (e) => {
    if(windowSize.innerWidth < 375){
      return e.current = useStyles.mobile
    } else if(windowSize.innerWidth < 425){
      return e.current = useStyles.mobileM
    } else if (windowSize.innerWidth < 768){
      return e.current = useStyles.mobileL
    } else if (windowSize.innerWidth < 1000){
      return e.current = useStyles.tablet
    } else if (windowSize.innerWidth < 1300){
      return e.current = useStyles.laptop
    } else {
      return e.current = useStyles.laptopL
    }
  }



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
          <Card>
            <ImageBg1 />
            <CardText>
              <TitleCard> 3 a 6 anos</TitleCard>
              <InfoCard>
              <Button 
                onClick={() => setModalOpen1(true)}
                style={{ color: '#AD4226'}}
              >
                Saiba mais...
              </Button>
              </InfoCard>
            </CardText>
          </Card>
          <Modal
            open={modalOpen1}
            onClose={() => setModalOpen1(false)}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box 
              style={responsiveness(responsiveness)}
            >
              <Typography  
                id="modal-modal-title" 
                variant="h6" 
                component="h2"
                sx={{ textAlign: 'center' }}
                style={useStyles.primary}
              >
                3 a 6 anos
              </Typography>
              <Typography 
                id="modal-modal-description" 
                sx={{ mt: 2 }}
                style={useStyles.darkPrimary}
              >
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
              </Typography>
              <HouseLogo />
            </Box>
          </Modal>
        </CardContainer>
        </CardWrapper>
    </Container>
  )
}
