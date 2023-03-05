import styled from "styled-components";
import { cyan, softBlue} from '../Global/variables'
import etherumIcon from '../../assets/img/icon-ethereum.svg'
import clockIcon from '../../assets/img/icon-clock.svg'

export const NftCardCoinContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const NftCardCoinValue = styled.p`
  color: ${cyan};
  display: flex;
  font-size: 1rem; 
  font-weight: 400;
  &::before{ 
  content: '';
  background: url(${etherumIcon}) no-repeat center;
  display: inline-block;
  width: 11px;
  height: 20px;
  margin-right: 4px;
}
`
export const NftCardCoinCountDown = styled.p`
  color: ${softBlue};
  font-size: 1rem;
  display: flex;
  &::before{ 
  background: url(${clockIcon}) no-repeat center;
  content: '';
  display: inline-block;
  margin-right: 6px;
  width: 15px;
  }
`