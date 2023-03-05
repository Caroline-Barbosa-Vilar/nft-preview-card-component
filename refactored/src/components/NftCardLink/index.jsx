import React from 'react'
import image from '../../assets/img/image-equilibrium.jpg'
import { NftCardLinkStyle, NftCardImg } from './style'

export default function NftCardLink() {
  return (
    <>
    <NftCardLinkStyle href="#">
      <NftCardImg src={image} alt="a cube that represents the nft Equilibrium"/>
    </NftCardLinkStyle>
    </>
  )
}
