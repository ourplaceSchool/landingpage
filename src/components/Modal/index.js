import React from 'react'
import { 
  ModalCard,
  CardText,
  InfoCard,
  TitleCard,
  HouseLogo,
  SunIcon,
  RainbowIcon,
  ManchaLaranja,
  ManchaAmarela
} from './styles'

export function Modal1({ closeModal1 }) {
  return (
    <ModalCard
      onClick={() => closeModal1(false)}
    >
      <CardText>
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
      </CardText>
      <HouseLogo />
    </ModalCard>
  )
}

export function Modal2({ closeModal2 }) {
  return (
    <ModalCard
      onClick={() => closeModal2(false)}
    >
      <CardText>
        <TitleCard> 7 a 9 anos</TitleCard>
        <InfoCard>
        Ainda seguindo o espectro  das aulas lúdicas, com músicas, histórias e brincadeiras para desenvolvimento do lado criativo dos pequenos, agora também aproveitamos da capacidade de produzirem pequenos registros escritos e se divertirem muitos com jogos especialmente desenvolvidos para esta faixa etária!
        Além da introdução da metodologia baseada no Common Framework e Cambridge English Scale. Aproveitando também da faixa etária já possuir alfabetização em Portugês para a introdução do nosso livro didático, trabalhando agora com as 4 habilidades: 
        speaking, writing, listening and reading, sempre em alto astral!
        </InfoCard>
      </CardText>
      <SunIcon />
    </ModalCard>
  )
}

export function Modal3({ closeModal3 }) {
  return (
    <ModalCard
      onClick={() => closeModal3(false)}
    >
      <CardText>
        <TitleCard> 10 a 12 anos</TitleCard>
        <InfoCard>
        Continuamos a proporcionar um aprendizado divertido e cheio de novidades, porém agora respeitando as ambições da idade e substituindo as brincadeiras infantis por desafios e jogos estimulantes, juntamente com a metodologia adaptada de acordo com o Common Framework e o Cambridge English Scale! 
        Oferecemos também a nossos alunos o reforço escolar de inglês, caso seja necessário! 

        Recentemente integramos os livros preparatórios para os exames de Certificação Cambridge!
        Consulte-nos para maiores informações! 
        </InfoCard>
      </CardText>
      <RainbowIcon />
    </ModalCard>
  )
}

export function Modal4({ closeModal4 }) {
  return (
    <ModalCard
      onClick={() => closeModal4(false)}
    >
      <CardText>
        <TitleCard> 13 a 16 anos</TitleCard>
        <InfoCard>
        Considerando o universo Teen preparamos aulas dinâmicas com atividades estimulantes de acordo com os interesses da idade. Utilizamos nosso teste de nível para definir qual livro didático de apoio será o mais adequado para cada aluno, baseando-se ainda no Common European Framework e no Cambridge English scale, focando no desenvolvimento e ensino personalizado, também auxiliamos com reforço escolar de Inglês.
        Aderimos a nossa grade  os livros preparatórios para os exames de <strong>Certificação</strong> Cambridge! Consulte-nos para maiores informações!  
        </InfoCard>
      </CardText>
      <ManchaLaranja />
    </ModalCard>
  )
}

export function Modal5({ closeModal5}) {
  return (
    <ModalCard
      onClick={() => closeModal5(false)}
    >
      <CardText>
        <TitleCard> Adultos </TitleCard>
        <InfoCard>
          Oferecemos a nossos alunos adultos aulas personalizadas, utilizando como base o <strong>Cambridge English Scale</strong> e <strong>Common European Framework</strong> para determinar os niveis de proficiência de cada um. A partir de nossa análise, passamos para o processo de criação das aulas, com abordagens definidas a partir dos pontos fracos e fortes e suas demandas individuais. Focando no desenvolvimento completo do aluno. Tudo isso sem perder a essência da nossa escola, montando propostas de acordo com cada personalidade e interesse de nossos estudantes.
        </InfoCard>
      </CardText>
      <ManchaAmarela />
    </ModalCard>
  )
}
