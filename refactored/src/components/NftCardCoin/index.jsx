import React from 'react'
import { NftCardCoinContainer, NftCardCoinCountDown, NftCardCoinValue } from './style'

export default function NftCardCoin() {
  return (
    <NftCardCoinContainer>
      <NftCardCoinValue>0.041 ETH</NftCardCoinValue>
      <NftCardCoinCountDown>3 days left</NftCardCoinCountDown>
    </NftCardCoinContainer>
  )
}
