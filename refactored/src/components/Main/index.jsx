import React from 'react'
import { MainStyle } from './style'

export default function Main(props) {
  return (
    <MainStyle>
      {props.children}
    </MainStyle>
  )
}