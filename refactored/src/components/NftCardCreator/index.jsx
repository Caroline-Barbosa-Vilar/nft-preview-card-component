import React from 'react'
import { NftCardCreatorContainer, NftCardCreatorDesc, NftCardCreatorImg, NftCardCreatorName } from './style'
import image from '../../assets/img/image-avatar.png'

export default function NftCardCreator() {
  return (
    <NftCardCreatorContainer>
      <NftCardCreatorImg src={image} alt="nft creator picture"/>
      <NftCardCreatorDesc>Creation of 
        <NftCardCreatorName>Jules Wyvern</NftCardCreatorName>
      </NftCardCreatorDesc>
    </NftCardCreatorContainer>
  )
}
