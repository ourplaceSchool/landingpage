import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { 
  SlideImage,
  SlideContainer,
} from './styles'

export default function Slider({slides}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [active, setActive] = useState(false);

  const leftArrowStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    left: '30px',
    fontSize: '55px',
    color: 'white',
    zIndex: 1,
    cursor: 'pointer',
    opacity: '30%',
  };

  const rightArrowStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    right: '30px',
    fontSize: '55px',
    color: 'white',
    zIndex: 1,
    cursor: 'pointer',
    opacity: '30%',
  };

  const dotsContainer = {
    display: 'flex',
    justifyContent: 'center'
  };

    const dotStyle = {
      margin: '0 3px',
      cursor: 'pointer',
      fontSize: '20px',
      color: '#1B6270',
    }

  // const dotStyle = {
  //   notActive: {
  //     margin: '0 3px',
  //     cursor: 'pointer',
  //     fontSize: '20px',
  //     color: '#1B6270',
  //   },
  //   active: {
  //     margin: '0 3px',
  //     cursor: 'pointer',
  //     fontSize: '20px',
  //     color: '#AD4226',
  //   },
  // };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <SlideContainer>
      <SlideImage 
        style={{backgroundImage: `url(${slides[currentIndex].url})`}} 
      />
      <FaArrowLeft style={leftArrowStyle} onClick={goToPrevious}/>
      <FaArrowRight style={rightArrowStyle} onClick={goToNext}/>
      <div style={dotsContainer}>
        {slides.map((slide, slideIndex) => (
          <div 
            style={dotStyle} 
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </SlideContainer>
  )
}
