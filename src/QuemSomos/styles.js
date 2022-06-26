import styled from "styled-components";
import frameTopBox from '../assets/images/frame-top-box.png';
import ellipseProfile from '../assets/images/ellipse-profile.png';
import houseLogo from '../assets/images/house-logo.png';
import coloring from '../assets/images/coloring.png';

export const Container = styled.div `
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`;
export const Title = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  font-size: 64px;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  width: 50%;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
  height: 650px;
  background-color: ${({ theme }) =>  theme.colors.white};
  margin-bottom: 65px;
  position: relative;
  z-index: 2;
`;
export const ColoredBg = styled.div `
  background-image: url(${coloring});
  background-repeat: no-repeat;
  background-size: contain;
  width: 565px;
  height: 422px;
  z-index: 1;
  position: absolute;
  right: 0;
  bottom: 0;
`;
export const GreenFrame = styled.div `
background-image: url(${frameTopBox});
background-repeat: no-repeat;
background-size: contain;
width: 300px;
height: 296px;
position: absolute;
top: 0;
left: 0;
`;
export const ProfilePhoto = styled.div `
  background-image: url(${ellipseProfile});
  background-repeat: no-repeat;
  background-size: contain;
  width: 348.3px;
  height: 336.6px;
  margin: 20px;
`;
export const Box = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 80px;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-left: 20px;
`;
export const H4 = styled.h4`
  display: flex;
  align-self: baseline;
  justify-content: center;
  font-family: 'Quicksand', sans-serif;
  font-size: 25px;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  margin: 0;
`;
export const Information = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  padding: 20px 0px;
  margin: 0;
`;
export const Bold = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
`;
export const HouseLogo = styled.div `
  background-image: url(${houseLogo});
  background-repeat: no-repeat;
  background-size: contain;
  width: 153px;
  height: 88px;
  align-self: baseline;
`;