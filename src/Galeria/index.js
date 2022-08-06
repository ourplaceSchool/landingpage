import React from 'react'
import Slider from '../components/Slider/index'
import {
  Container,
  Title,
  GalleryWrapper,
} from './styles'

export default function Galeria() {

  const photos = [
    {
      url: 'https://res.cloudinary.com/ourplaceeglishschool/image/upload/v1659787783/website/Galeria/WhatsApp_Image_2022-07-19_at_11.13.09_1_xkogka.jpg', 
      title: 'image1'
    },
    {
      url: 'https://res.cloudinary.com/ourplaceeglishschool/image/upload/v1659787782/website/Galeria/WhatsApp_Image_2022-08-01_at_12.07.15_lot9d4.jpg', 
      title: 'image2'
    },
    {
      url: 'https://res.cloudinary.com/ourplaceeglishschool/image/upload/v1659787782/website/Galeria/WhatsApp_Image_2022-07-19_at_11.13.10_dpdi1z.jpg', 
      title: 'image3'
    },
    {
      url: 'https://res.cloudinary.com/ourplaceeglishschool/image/upload/v1659787782/website/Galeria/WhatsApp_Image_2022-07-19_at_12.16.15_1_h6mzp1.jpg', 
      title: 'image4'
    },
    {
      url: 'https://res.cloudinary.com/ourplaceeglishschool/image/upload/v1659787782/website/Galeria/WhatsApp_Image_2022-08-01_at_12.06.02_ffkkig.jpg', 
      title: 'image5'
    },
    {
      url: 'https://res.cloudinary.com/ourplaceeglishschool/image/upload/v1659787782/website/Galeria/WhatsApp_Image_2022-07-19_at_12.16.15_2_jzj0qo.jpg', 
      title: 'image6'
    },
    {
      url: 'https://res.cloudinary.com/ourplaceeglishschool/image/upload/v1659787782/website/Galeria/WhatsApp_Image_2022-07-19_at_11.42.02_indfua.jpg', 
      title: 'image7'
    },
    {
      url: 'https://res.cloudinary.com/ourplaceeglishschool/image/upload/v1659787782/website/Galeria/WhatsApp_Image_2022-07-19_at_11.28.14_letjai.jpg', 
      title: 'image8'
    },
    {
      url: 'https://res.cloudinary.com/ourplaceeglishschool/image/upload/v1659787781/website/Galeria/WhatsApp_Image_2022-08-01_at_12.06.30_t3aolt.jpg', 
      title: 'image9'
    },
    {
      url: 'https://res.cloudinary.com/ourplaceeglishschool/image/upload/v1659787781/website/Galeria/WhatsApp_Image_2022-07-19_at_11.40.07_c8l6y8.jpg', 
      title: 'image10'
    },
    {
      url: 'https://res.cloudinary.com/ourplaceeglishschool/image/upload/v1659787781/website/Galeria/WhatsApp_Image_2022-07-19_at_11.27.19_n9tsfi.jpg', 
      title: 'image11'
    },
    {
      url: 'https://res.cloudinary.com/ourplaceeglishschool/image/upload/v1659787781/website/Galeria/WhatsApp_Image_2022-07-19_at_11.13.09_nis99x.jpg', 
      title: 'image12'
    },
    {
      url: 'https://res.cloudinary.com/ourplaceeglishschool/image/upload/v1659787781/website/Galeria/WhatsApp_Image_2022-07-19_at_12.16.15_qwvnnd.jpg', 
      title: 'image13'
    },
  ];

  const containerStyles = {
    mobile: {
      width: '300px',
      height: '540px',
      margin: '0 auto',
    },  
    mobileL: {
      width: '395px',
      height: '540px',
      margin: '0 auto',
    },   
    tablet: {
      width: '532px',
      height: '540px',
      margin: '0 auto',
    },
    laptop: {
      width: '570px',
      height: '540px',
      margin: '0 auto',
    }
  };

  if(window.innerWidth < 425) {
    return (
      <Container id="galeria">
        <Title>Galeria</Title>
        <GalleryWrapper>
          <div style={containerStyles.mobile}>
            <Slider slides={photos} />
          </div>
        </GalleryWrapper>
      </Container>
    )
  } else if(window.innerWidth < 600) {
    return (
      <Container id="galeria">
        <Title>Galeria</Title>
        <GalleryWrapper>
          <div style={containerStyles.mobileL}>
            <Slider slides={photos} />
          </div>
        </GalleryWrapper>
      </Container>
    )
  } else if(window.innerWidth < 1000) {
    return (
      <Container id="galeria">
        <Title>Galeria</Title>
        <GalleryWrapper>
          <div style={containerStyles.tablet}>
            <Slider slides={photos} />
          </div>
        </GalleryWrapper>
      </Container>
    )
  } else {
    return (
      <Container id="galeria">
        <Title>Galeria</Title>
        <GalleryWrapper>
          <div style={containerStyles.laptop}>
            <Slider slides={photos} />
          </div>
        </GalleryWrapper>
      </Container>
    )
  }
}
