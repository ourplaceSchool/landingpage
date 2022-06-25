import styled from "styled-components"
import curlyBackground from '../../assets/images/curly-background.png'
import classroomPhoto from '../../assets/images/classroom-photo.png'
import house from '../../assets/images/house.png'
import manchaLaranja from '../../assets/images/mancha-laranja.png'
import manchaLaranjaClaro from '../../assets/images/mancha-laranja-claro.png'
import manchaAmarela from '../../assets/images/mancha-amarela.png'
import greenBook from '../../assets/images/green-book.png'
import openBook from '../../assets/images/open-book.png'
import teacher from '../../assets/images/teacher.png'

export const Container = styled.div `
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  padding-bottom: 80px;
`;
export const CurlyBg = styled.div `
  background-image: url(${curlyBackground});
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 665px;
  z-index: 2;
`;
export const ClassroomPh = styled.div `
  background-image: url(${classroomPhoto});
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 650px;
  z-index: 1;
  position: absolute;
  top: 240px;
`;
export const LittleHouse = styled.div `
  background-image: url(${house});
  background-repeat: no-repeat;
  background-size: contain;
  width: 336.78px;
  height: 331px;
  z-index: 3;
  position: absolute;
  top: 166px;
  left: -58px;
`;
export const OrangeStain = styled.div `
  background-image: url(${manchaLaranja});
  background-repeat: no-repeat;
  background-size: contain;
  overflow: hidden;
  width: 312px;
  height: 238px;
  z-index: 4;
  position: absolute;
  top: 166px;
  right: -125px;
`;
export const OrangeStrip = styled.div `
  background-image: url(${manchaLaranjaClaro});
  background-repeat: no-repeat;
  background-size: contain;
  
  width: 87.51px;
  height: 138.27px;
  z-index: 3;
  position: absolute;
  top: 267px;
  right: 28px;
  
`;
export const YellowStrip = styled.div `
  background-image: url(${manchaAmarela});
  background-repeat: no-repeat;
  background-size: contain;
  width: 172.67px;
  height: 152.17px;
  z-index: 3;
  position: absolute;
  top: 87px;
  right: -57px;
`;
export const Title = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  font-size: 76px;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  width: 50%;
  height: 208px;
  margin-top: 35px;
  z-index: 3;
  position: absolute;
  top: 6px;
`;
export const H5 = styled.h5 `
  font-size: 25px;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  z-index: 3;
  position: absolute;
  top: 195px;
`;
export const Button = styled.button `
  background-color: ${({ theme }) =>  theme.colors.darkPrimary};
  color: ${({ theme }) =>  theme.colors.white};
  border-radius: 8px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 335px;
  height: 53px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  line-height: 18px;
  z-index: 3;
  position: absolute;
  top: 285px;

  &:hover {
    background-color: ${({ theme }) =>  theme.colors.darkHover};
  }
`;
export const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 150px;
  width: 80%;
`;
export const H2 = styled.h2`
  font-family: 'Quicksand', sans-serif;
  font-size: 56px;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  text-align: center;
  margin-bottom: 0;
`;
export const Text = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  text-align: center;
`;
export const Bold = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  text-align: center;
`;
export const InfoWrapper = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  width: 80%;
  margin-top: 50px;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 300px;
  height: 526px;
  margin: 0 30px;
  padding: 20px;
`;
export const Titulo = styled.p`
  font-family: 'Quicksand', sans-serif;
  font-size: 16px;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  text-align: center;
  margin-bottom: 0;
`;
export const Information = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  color: ${({ theme }) =>  theme.colors.darkPrimary};
  text-align: center;
`;
export const BookIcon = styled.div `
  background-image: url(${greenBook});
  background-repeat: no-repeat;
  background-size: contain;
  width: 80px;
  height: 80px;
`;
export const OpenBookIcon = styled.div `
  background-image: url(${openBook});
  background-repeat: no-repeat;
  background-size: contain;
  width: 80px;
  height: 80px;
`;
export const TeacherIcon = styled.div `
  background-image: url(${teacher});
  background-repeat: no-repeat;
  background-size: contain;
  width: 80px;
  height: 80px;
`;
export const ButtonBottom = styled.button `
  background-color: ${({ theme }) =>  theme.colors.darkPrimary};
  color: ${({ theme }) =>  theme.colors.white};
  border-radius: 8px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 335px;
  height: 53px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  line-height: 18px;
  z-index: 3;

  &:hover {
    background-color: ${({ theme }) =>  theme.colors.darkHover};
  }
`;


