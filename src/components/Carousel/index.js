import React, { useRef, useEffect} from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { 
  Container,
  SlideImage,
  SlideshowContainer,
  Arrows,
  ArrowLeft,
  ArrowRight,
  SlideContainer
} from './styles';

export default function Carousel() {
  const slideshow = useRef(null);
  const slideShowInterval = useRef(null);

  const next = () => {
    // making sure the slide show has elements
    if(slideshow.current.children.length > 0){
      // getting the first element of the slideshow
      const firstElement = slideshow.current.children[0];
      // making sure there's a transition
      slideshow.current.style.transition = '300ms ease-out all';

      const slideSize = slideshow.current.children[0].offsetWidth;

      // Moving the slideshow
      slideshow.current.style.transform = `translateX(-${slideSize}px)`;

      const slideTransition = () => {
        // restarted the slide show position
        slideshow.current.style.transition = 'none';
        slideshow.current.style.transform = `translatex(0)`;

        // Getting first element and sending it to the back

        slideshow.current.appendChild(firstElement);
        
        // getting ride of eventListener so back btn works
        slideshow.current.removeEventListener('transitionend', slideTransition);
      }

      // Eventlistener for when transition is over

      slideshow.current.addEventListener('transitionend', slideTransition);

    }
  }

  const prior = () => {
    // making sure the slide show has elements
    if(slideshow.current.children.length > 0){
      // getting the first element of the slideshow
      const index = slideshow.current.children.length -1;
      const lastElement = slideshow.current.children[index];
      slideshow.current.insertBefore(lastElement, slideshow.current.firstChild);

      slideshow.current.style.transition = 'none';

      const slideSize = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${slideSize}px)`;

      setTimeout(() =>{
        slideshow.current.style.transition = '300ms ease-out all';
        slideshow.current.style.transform = `translateX(0)`;
      }, 30)

      }
  }

  return (
    <Container>
      <SlideContainer>
        <SlideshowContainer ref={slideshow}>
            <SlideImage />
            <SlideImage />
            <SlideImage />
            <SlideImage />
            <SlideImage />
            <SlideImage />
        </SlideshowContainer>
          <Arrows>
            <ArrowLeft onClick={prior}>
              <FaArrowLeft />
            </ArrowLeft>
            <ArrowRight onClick={next}>
              <FaArrowRight />
            </ArrowRight>
          </Arrows>
      </SlideContainer>      
    </Container>
  )
}

