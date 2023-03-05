import styled from 'styled-components'
import { white, softBlue, cyan } from '../Global/variables'

export const NftCardTitle = styled.h1`
  color: ${white};
  font-size: 1.35rem;
  font-weight: 600;
  margin: 28px 0 20px;
  &:hover {
  color: ${cyan};
  cursor: pointer;
}
`
export const NftCardText = styled.p`
  color: ${softBlue};
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 25px;
  margin-bottom: 28px;
  width: 100%;
`