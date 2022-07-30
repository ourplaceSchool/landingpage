import React, { useRef, useEffect } from "react";
import { BiArrowFromBottom } from "react-icons/bi";
import './styles.scss'

export const ScrollToTop = () => {
  // const [isVisible, setIsVisible] = useState(false)
  const btn = useRef('false')

  const toggleVisibility = () => {
    if(window.pageYOffset > 300) {
      btn.current.classList.remove("atTheTop")
      btn.current.classList.add("backToTop-btn");
      console.log('scrolling happening')
    } else {
      btn.current.classList.remove("backToTop-btn")
      btn.current.classList.add("atTheTop");
      console.log('at the top')
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return(
    <div className="fixed-bottom goUpBtn">
      <div 
        type="button" 
        onClick={scrollToTop} 
        className="" 
        ref={btn}
      >
        Back To Top <BiArrowFromBottom 
                      aria-hidden='true'
                      className={{
                        height: '6px', 
                        width: '6px',
                      }}/>
      </div>
    </div>
  )
}
