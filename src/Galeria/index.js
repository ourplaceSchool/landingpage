import React, { useState, useCallback } from "react";
import { MasonryPhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "react-photo-album/masonry.css";

import { Container, Title, GalleryWrapper } from "./styles";

export default function Galeria() {
  const [index, setIndex] = useState(-1);

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

  const openLightbox = useCallback(({ index }) => {
    setIndex(index);
  }, []);
  const enhancedPhotos = photos.map((photo) => ({
    ...photo,
    src: photo.src.replace("/upload/", "/upload/w_400,q_auto,f_auto/"),
    srcSet: [400, 800, 1200].map((w) => ({
      src: photo.src.replace("/upload/", `/upload/w_${w},q_auto,f_auto/`),
      width: w,
      height: Math.round((photo.height / photo.width) * w),
    })),
  }));

  return (
    <Container id="galeria">
      <Title>Galeria</Title>
      <GalleryWrapper>
        <MasonryPhotoAlbum
        padding={0}
        spacing={16}
        onClick={openLightbox}
        photos={enhancedPhotos}
        columns={(containerWidth) => {
          if (containerWidth < 768) return 1;
          if (containerWidth < 1024) return 2;
          if (containerWidth < 1300) return 3;
          return 4;
        }}
        sizes={{
          size: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1300px) 33vw, 25vw",
        }}
        />

        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={enhancedPhotos.map((photo) => ({
            src: photo.src.replace("/upload/", "/upload/w_1600,q_auto,f_auto/"),
            srcSet: photo.srcSet,
          }))}
        />
      </GalleryWrapper>
    </Container>
  );
}