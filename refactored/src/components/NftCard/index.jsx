import React from 'react'
import NftCardCoin from '../NftCardCoin/index'
import NftCardCreator from '../NftCardCreator/index'
import NftCardDesc from '../NftCardDesc/index'
import NftCardLink from '../NftCardLink/index'
import { NftCardContainer } from './style'

export default function NftCard() {
  return (
    <NftCardContainer>
      <NftCardLink/>
      <NftCardDesc/>
      <NftCardCoin/>
      <NftCardCreator/>
    </NftCardContainer>
  )
}