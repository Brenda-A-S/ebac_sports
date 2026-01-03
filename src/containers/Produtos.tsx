import { useGetProdutosQuery } from '../services/api'
import ProdutoComponent from '../components/Produto'
import * as S from './styles'

const ListaProdutos = () => {
  const { data: produtos, isLoading, error } = useGetProdutosQuery()

  if (isLoading) return <p>Carregando...</p>
  if (error) return <p>Erro ao carregar</p>

  return (
    <S.Produtos>
      {produtos?.map((produto) => (
        <li key={produto.id}>
          <ProdutoComponent produto={produto} />
        </li>
      ))}
    </S.Produtos>
  )
}

export default ListaProdutos
