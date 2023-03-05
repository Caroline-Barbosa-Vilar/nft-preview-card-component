import styled from "styled-components";
import { grayishBlue, white, softBlue, cyan } from '../Global/variables'

export const NftCardCreatorContainer = styled.div`
  align-items: center;
  border-top: .8px solid ${grayishBlue};
  display: flex;
  margin-top: 22px;
  padding-top: 18px;
`
export const NftCardCreatorImg = styled.img`
  border: 1px solid ${white};
  border-radius: 50%;
  margin-right: 15px;
  max-width: 32px;
`
export const NftCardCreatorDesc = styled.p`
  color: ${softBlue};
  font-size: 1rem;
`
export const NftCardCreatorName = styled.a`
  color: ${white};
  padding: 3px;
  &:hover {
    color: ${cyan};
  }
`