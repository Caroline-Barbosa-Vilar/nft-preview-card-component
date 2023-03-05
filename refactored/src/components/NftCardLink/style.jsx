import styled from 'styled-components'
import { cyan } from '../Global/variables'
import image from '../../assets/img/icon-view.svg'

export const NftCardLinkStyle = styled.a`
  border-radius: 8px;
  display: flex;
  overflow: hidden;
  position: relative;
    &::before {
    background-color: ${cyan};
    content: '';
    height: 100%;
    position: absolute;
    opacity: 0;
    transition: 0.3s ease-in-out;
    z-index: 1;
    width: 100%;
    &::after {
      background: url(${image}) no-repeat center;
      content: '';
      height: 100%;
      opacity: 0;
      position: absolute;
      transition: .3s ease-in-out;
      width: 100%;
    }
    &:hover::before {
      display: block;
      opacity: 0.4;
    }   
    &:hover::after {
      display: block;
      opacity: 1;
    }   
  }
`
export const NftCardImg = styled.img`
  border-radius: 8px;
  display: block;
  height:100%; 
  width: 100%;
`