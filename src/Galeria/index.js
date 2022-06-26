import React from 'react'
import {
  Container,
  Title,
  GalleryWrapper,
  ColoringGallery,
  GalleryPhoto
} from './styles'

export default function Galeria() {
  return (
    <Container>
      <Title>Galeria</Title>
      <GalleryWrapper>
        <GalleryPhoto />
      </GalleryWrapper>
      <ColoringGallery />
    </Container>
  )
}
