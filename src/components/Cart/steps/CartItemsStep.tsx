import { useDispatch, useSelector } from 'react-redux'
import type { RootReducer } from '../../../store'

import { remove, goToDelivery } from '../../../store/reducers/cart'
import { formatPrice  } from '../../../utils'

import * as S from '../styles'

const CartItemsStep = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()


  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  if (items.length === 0) {
    return (
      <>
        <S.EmptyCart>
          Seu carrinho está vazio.
          <br />
          Por favor, adicione pelo menos um produto para continuar.
        </S.EmptyCart>
      </>
    )
  }

  const getTotalPrice = () => {
    return items.reduce((acc, item) => acc + item.preco, 0)
  }

  return (
    <>
      <ul>
        {items.map((item) => (
          <S.CartItem key={item.id}>
            <img src={item.foto} alt={item.nome} />
            <div>
              <h3>{item.nome}</h3>
              <span>{formatPrice (item.preco)}</span>
            </div>
            <button title='Clique aqui para remover o item do carrinho' onClick={() => removeItem(item.id)} />
          </S.CartItem>
        ))}
      </ul>

      <S.Prices>
        Valor total <span>{formatPrice (getTotalPrice())}</span>
      </S.Prices>

      <button onClick={() => dispatch(goToDelivery())}>
        Continuar com a entrega
      </button>
    </>
  )
}

export default CartItemsStep
