import React, { useState } from "react";
import Gallery from "react-photo-gallery";
import { Container, Title, GalleryWrapper } from "./styles";
import Carousel, { Modal, ModalGateway } from "react-images";
import { useCallback } from "react";

export default function Galeria() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const photos = [
    {
      src: "https://res.cloudinary.com/ourplaceeglishschool/image/upload/v1750270159/website/Galeria/Novas%20Fotos/livros_ourplace_hawbml.jpg",
      width: 7,
      height: 11,
    },
    {
      src: "https://res.cloudinary.com/ourplaceeglishschool/image/upload/v1748373459/website/Galeria/Novas%20Fotos/IMG_4205_ju2aye.jpg",
      width: 16,
      height: 9,
    },
    {
      src: "https://res.cloudinary.com/ourplaceeglishschool/image/upload/v1748341921/website/Galeria/Novas%20Fotos/o4lliy6uszm1yzazkscg.jpg",
      width: 2,
      height: 3,
    },
    {
      src: "https://res.cloudinary.com/ourplaceeglishschool/image/upload/v1748373481/website/Galeria/Novas%20Fotos/IMG_4316_v0rwej.jpg",
      width: 3,
      height: 4,
    },
    {
      src: "https://res.cloudinary.com/ourplaceeglishschool/image/upload/v1748373456/website/Galeria/Novas%20Fotos/IMG_4321_itrrox.jpg",
      width: 16,
      height: 9,
    },
    {
      src: "https://res.cloudinary.com/ourplaceeglishschool/image/upload/v1748373454/website/Galeria/Novas%20Fotos/IMG_4201_gmu8fn.jpg",
      width: 16,
      height: 9,
    },
    {
      src: "https://res.cloudinary.com/ourplaceeglishschool/image/upload/v1748341922/website/Galeria/Novas%20Fotos/f4h8tgxnfz78xv0gezvf.jpg",
      width: 16,
      height: 9,
    },
    {
      src: "https://res.cloudinary.com/ourplaceeglishschool/image/upload/v1748341922/website/Galeria/Novas%20Fotos/xyjtrtbz0u835amkt09o.jpg",
      width: 16,
      height: 9,
    },
    {
      src: "https://res.cloudinary.com/ourplaceeglishschool/image/upload/v1748341922/website/Galeria/Novas%20Fotos/kxjqetqtc5nqhlccmaf8.jpg",
      width: 2,
      height: 3,
    },
    {
      src: "https://res.cloudinary.com/ourplaceeglishschool/image/upload/v1748534202/website/Galeria/Novas%20Fotos/wtqljkyogsdxctkhipvv.jpg",
      width: 16,
      height: 9,
    },
    {
      src: "https://res.cloudinary.com/ourplaceeglishschool/image/upload/v1748534202/website/Galeria/Novas%20Fotos/v03xnykeomkdpih6if8q.jpg",
      width: 2,
      height: 3,
    },
  ];

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Container id="galeria">
      <Title>Galeria</Title>
      <GalleryWrapper>
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </GalleryWrapper>
    </Container>
  );

  //   const containerStyles = {
  //     mobile: {
  //       width: '300px',
  //       height: '540px',
  //       margin: '0 auto',
  //     },
  //     mobileL: {
  //       width: '395px',
  //       height: '540px',
  //       margin: '0 auto',
  //     },
  //     tablet: {
  //       width: '532px',
  //       height: '540px',
  //       margin: '0 auto',
  //     },
  //     laptop: {
  //       width: '570px',
  //       height: '540px',
  //       margin: '0 auto',
  //     }
  //   };

  //   if(window.innerWidth < 425) {
  //     return (
  //       <Container id="galeria">
  //         <Title>Galeria</Title>
  //         <GalleryWrapper>
  //           <div style={containerStyles.mobile}>
  //             <Slider slides={photos} />
  //           </div>
  //         </GalleryWrapper>
  //       </Container>
  //     )
  //   } else if(window.innerWidth < 600) {
  //     return (
  //       <Container id="galeria">
  //         <Title>Galeria</Title>
  //         <GalleryWrapper>
  //           <div style={containerStyles.mobileL}>
  //             <Slider slides={photos} />
  //           </div>
  //         </GalleryWrapper>
  //       </Container>
  //     )
  //   } else if(window.innerWidth < 1000) {
  //     return (
  //       <Container id="galeria">
  //         <Title>Galeria</Title>
  //         <GalleryWrapper>
  //           <div style={containerStyles.tablet}>
  //             <Slider slides={photos} />
  //           </div>
  //         </GalleryWrapper>
  //       </Container>
  //     )
  //   } else {
  //     return (
  //       <Container id="galeria">
  //         <Title>Galeria</Title>
  //         <GalleryWrapper>
  //           <div style={containerStyles.laptop}>
  //             <Slider slides={photos} />
  //           </div>
  //         </GalleryWrapper>
  //       </Container>
  //     )
  //   }
}
