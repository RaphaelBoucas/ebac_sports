import { useDispatch, useSelector } from 'react-redux'
import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetProductsQuery } from '../services/api'

import * as S from './styles'

import { RootReducer } from '../store'
import { verificarFavorito } from '../store/reducers/favorito'

const ProdutosComponent = () => {
  const dispatch = useDispatch()

  const favoritos = useSelector(
    (state: RootReducer) => state.favoritoSlice.itens
  )

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  const favoritar = (produto: ProdutoType) => {
    dispatch(verificarFavorito(produto))
  }

  const { data: produtos } = useGetProductsQuery()

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
            favoritar={favoritar}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
