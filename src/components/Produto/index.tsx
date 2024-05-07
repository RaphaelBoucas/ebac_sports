import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { selectIsInCart, estaNosFavoritos } from '../../features/carrinho'

import { Produto as ProdutoType } from '../../App'

import {
  adicionarAoCarrinho,
  adicionarAoFavorito
} from '../../features/carrinho'

import * as S from './styles'

type Props = {
  produto: ProdutoType
  aoComprar: (produto: ProdutoType) => void
  favoritar: (produto: ProdutoType) => void
  estaNosFavoritos: boolean
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()
  const adicionar = () => dispatch(adicionarAoCarrinho(produto))
  const favoritar = () => dispatch(adicionarAoFavorito(produto.id))
  const estaNosFavoritos = useSelector(
    (root: RootReducer) => (root.carrinho, produto.id)
  )
  const inCart = useSelector((root: RootReducer) =>
    selectIsInCart(root.carrinho.produtosAVenda, produto.id)
  )

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={favoritar} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={adicionar} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
