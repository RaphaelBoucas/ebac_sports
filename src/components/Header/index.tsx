import * as S from './styles'

import { useSelector } from 'react-redux'

import {
  selectFavouritesQtt,
  selectProductinCart,
  selectTotalValue
} from '../../features/carrinho'

import { Produto } from '../../App'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

type Props = {
  itensNoCarrinho: Produto[]
  favoritos: Produto[]
}

const Header: React.FC<Props> = ({ itensNoCarrinho, favoritos }) => {
  const valorTotal = useSelector(selectTotalValue)
  const quantidade = useSelector(selectProductinCart)
  const favourites = useSelector(selectFavouritesQtt)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favourites} favoritos</span>
        <img src={cesta} />
        <span>
          {quantidade} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
