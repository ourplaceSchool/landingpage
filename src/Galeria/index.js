import React from 'react'
import Carousel from '../components/Carousel'
import {
  Container,
  Title,
  GalleryWrapper,
  ColoringGallery,
} from './styles'

export default function Galeria() {
  return (
    <Container>
      <Title>Galeria</Title>
      <GalleryWrapper>
        <Carousel />
      </GalleryWrapper>
      <ColoringGallery />
    </Container>
  )
}
