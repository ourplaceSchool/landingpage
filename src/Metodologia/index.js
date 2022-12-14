import React, { useState, useEffect } from 'react'

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
  SunIcon,
  HouseLogo,
  RainbowIcon,
  ManchaAmarela,
  ManchaLaranja,
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
          <Title>A Life-long learning???</Title>
          <Information>
          A partir da cria????o de contextos significativos de acordo com cada faixa et??ria, como leitura, culin??ria, m??sicas,hist??rias, brincadeiras e desafios, inserimos os alunos a l??ngua inglesa de maneira natural gerando um aprendizado org??nico  e eficiente. 
          </Information>
          <Information>
          Al??m disso, a partir da alfabetiza????o completa das crian??as na l??ngua portuguesa inserimos o Common European Framework e o Cambridge English Scale como refer??ncias de guia para ensino e n??veis de profici??ncia do aluno. Trabalhando assim de maneira individualizada, completa e os preparando para certifica????es.
          </Information>
        </Wrapper>

        <CardWrapper>
          {/* 3 to 6 years old */}
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
                    ?? cientificamente comprovado que a introdu????o da m??sica na primeira inf??ncia causa in??meros benef??cios como :
                    Melhora no aprendizado
                    Desenvolvimento da express??o corporal
                    Est??mulo da mem??ria
                    Auxilia na coordena????o motora
                    Desenvolvimento da linguagem e criatividade 
                  </InfoCard>
                  <InfoCard>
                  Por isso criamos o nosso m??todo no qual  por meio de muita m??sica, brincadeiras e hist??rias, as crian??as entram em contato com a sonoridade da l??ngua inglesa, onde conhecem o novo vocabul??rio de maneira poderosa e divertida aprendendo a se comunicar desde os primeiros momentos da vida como se esta fosse sua l??ngua nativa. Tudo isso enquanto se divertem e se beneficiam de est??mulos psicomotores.
                  </InfoCard>
                </Typography>
                <HouseLogo />
              </Box>
            </Modal>

        {/* 7 to 9 years old */}

            <Card>
              <ImageBg2 />
              <CardText>
                <TitleCard> 7 a 9 anos</TitleCard>
                <InfoCard>
                <Button 
                  onClick={() => setModalOpen2(true)}
                  style={{ color: '#AD4226'}}
                >
                  Saiba mais...
                </Button>
                </InfoCard>
              </CardText>
            </Card>
            <Modal
              open={modalOpen2}
              onClose={() => setModalOpen2(false)}
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
                  7 a 9 anos
                </Typography>
                <Typography 
                  id="modal-modal-description" 
                  sx={{ mt: 2 }}
                  style={useStyles.darkPrimary}
                >
                  <InfoCard>
                    Ainda seguindo o espectro  das aulas l??dicas, com m??sicas, hist??rias e brincadeiras para desenvolvimento do lado criativo dos pequenos, agora tamb??m aproveitamos da capacidade de produzirem pequenos registros escritos e se divertirem muitos com jogos especialmente desenvolvidos para esta faixa et??ria!
                    Al??m da introdu????o da metodologia baseada no Common Framework e Cambridge English Scale. Aproveitando tamb??m da faixa et??ria j?? possuir alfabetiza????o em Portug??s para a introdu????o do nosso livro did??tico, trabalhando agora com as 4 habilidades: 
                    speaking, writing, listening and reading, sempre em alto astral!
                  </InfoCard>
                </Typography>
                <SunIcon />
              </Box>
            </Modal>

          {/* 10 to 12 years old */}

            <Card>
              <ImageBg3 />
              <CardText>
                <TitleCard> 10 a 12 anos</TitleCard>
                <InfoCard>
                <Button 
                  onClick={() => setModalOpen3(true)}
                  style={{ color: '#AD4226'}}
                >
                  Saiba mais...
                </Button>
                </InfoCard>
              </CardText>
            </Card>
            <Modal
              open={modalOpen3}
              onClose={() => setModalOpen3(false)}
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
                  10 a 12 anos
                </Typography>
                <Typography 
                  id="modal-modal-description" 
                  sx={{ mt: 2 }}
                  style={useStyles.darkPrimary}
                >
                  <InfoCard>
                  Continuamos a proporcionar um aprendizado divertido e cheio de novidades, por??m agora respeitando as ambi????es da idade e substituindo as brincadeiras infantis por desafios e jogos estimulantes, juntamente com a metodologia adaptada de acordo com o Common Framework e o Cambridge English Scale! 
                  Oferecemos tamb??m a nossos alunos o refor??o escolar de ingl??s, caso seja necess??rio! 

                  Recentemente integramos os livros preparat??rios para os exames de Certifica????o Cambridge!
                  Consulte-nos para maiores informa????es! 
                  </InfoCard>
                </Typography>
                <RainbowIcon />
              </Box>
            </Modal>

          {/* 13 to 16 years old */}

            <Card>
              <ImageBg4 />
              <CardText>
                <TitleCard> 13 a 16 anos</TitleCard>
                <InfoCard>
                <Button 
                  onClick={() => setModalOpen4(true)}
                  style={{ color: '#AD4226'}}
                >
                  Saiba mais...
                </Button>
                </InfoCard>
              </CardText>
            </Card>
            <Modal
              open={modalOpen4}
              onClose={() => setModalOpen4(false)}
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
                  13 a 16 anos
                </Typography>
                <Typography 
                  id="modal-modal-description" 
                  sx={{ mt: 2 }}
                  style={useStyles.darkPrimary}
                >
                  <InfoCard>
                  Considerando o universo Teen preparamos aulas din??micas com atividades estimulantes de acordo com os interesses da idade. Utilizamos nosso teste de n??vel para definir qual livro did??tico de apoio ser?? o mais adequado para cada aluno, baseando-se ainda no Common European Framework e no Cambridge English scale, focando no desenvolvimento e ensino personalizado, tamb??m auxiliamos com refor??o escolar de Ingl??s.
                  Aderimos a nossa grade  os livros preparat??rios para os exames de <strong>Certifica????o</strong> Cambridge! Consulte-nos para maiores informa????es!  
                  </InfoCard>
                </Typography>
                <ManchaLaranja />
              </Box>
            </Modal>

          {/* Adults */}

            <Card>
              <ImageBg5 />
              <CardText>
                <TitleCard> Adultos </TitleCard>
                <InfoCard>
                <Button 
                  onClick={() => setModalOpen5(true)}
                  style={{ color: '#AD4226'}}
                >
                  Saiba mais...
                </Button>
                </InfoCard>
              </CardText>
            </Card>
            <Modal
              open={modalOpen5}
              onClose={() => setModalOpen5(false)}
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
                  Adultos
                </Typography>
                <Typography 
                  id="modal-modal-description" 
                  sx={{ mt: 2 }}
                  style={useStyles.darkPrimary}
                >
                  <InfoCard>
                    Oferecemos a nossos alunos adultos aulas personalizadas, utilizando como base o <strong>Cambridge English Scale</strong> e <strong>Common European Framework</strong> para determinar os niveis de profici??ncia de cada um. A partir de nossa an??lise, passamos para o processo de cria????o das aulas, com abordagens definidas a partir dos pontos fracos e fortes e suas demandas individuais. Focando no desenvolvimento completo do aluno. Tudo isso sem perder a ess??ncia da nossa escola, montando propostas de acordo com cada personalidade e interesse de nossos estudantes.
                  </InfoCard>
                </Typography>
                <ManchaAmarela />
              </Box>
            </Modal>
          </CardContainer>

        </CardWrapper>
    </Container>
  )
}
