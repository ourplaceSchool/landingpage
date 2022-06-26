import styled from "styled-components";
import asianKid from '../assets/images/asian-kid.png';
import homeworKid from '../assets/images/homework-kid.png';
import headphoneKid from '../assets/images/headphone-kid.png';

export const Container = styled.div `
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
  z-index: 2;
  width: 80%;
`;
export const Title = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  font-size: 64px;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
`;
export const Information = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  text-align: center;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  margin: 0;
  width: 80%;
`;
export const CardContainer = styled.div`
  display: flex;
  width: 100%;
`
export const Card = styled.div`
  width: 60%;
  height: 380px;
  margin: 15px;
  border-radius: 0px 0px 8px 8px;
  box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  z-index: 1;
`
export const CardText = styled.div `
  background-color: ${({ theme }) => theme.colors.white};
  width: 312px;
  height: 82px;
  position: absolute;
  bottom: 0;
  z-index: 2;
`;
export const ImageBg1 = styled.div `
  background-image: url(${asianKid});
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 500px;
  align-self: baseline;
  z-index: 1;
`;
export const ImageBg2 = styled.div `
  background-image: url(${homeworKid});
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 500px;
  align-self: baseline;
  z-index: 1;
`;
export const ImageBg3 = styled.div `
  background-image: url(${headphoneKid});
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 500px;
  align-self: baseline;
  z-index: 1;
`;
