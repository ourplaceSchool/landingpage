import React from 'react'
import { ModalCard } from './styles'

export default function Modal({ closeModal }) {
  return (
    <ModalCard
      onClick={() => closeModal(false)}
    >
      Modal
    </ModalCard>
  )
}
