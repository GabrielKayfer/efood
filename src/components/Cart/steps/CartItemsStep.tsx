import { useDispatch, useSelector } from 'react-redux'
import type { RootReducer } from '../../../store'

import { Prices, CartItem, EmptyCart } from '../styles'
import { remove, goToDelivery } from '../../../store/reducers/cart'

import { formataPreco } from '../../../utils'

const CartItemsStep = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const getTotalPrice = () => {
    return items.reduce((acc, item) => acc + item.preco, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  if (items.length === 0) {
    return (
      <>
        <EmptyCart>
          Seu carrinho está vazio.
          <br />
          Por favor, adicione pelo menos um produto para continuar.
        </EmptyCart>
      </>
    )
  }

  return (
    <>
      <ul>
        {items.map((item) => (
          <CartItem key={item.id}>
            <img src={item.foto} alt={item.nome} />
            <div>
              <h3>{item.nome}</h3>
              <span>{formataPreco(item.preco)}</span>
            </div>
            <button onClick={() => removeItem(item.id)} />
          </CartItem>
        ))}
      </ul>

      <Prices>
        Valor total <span>{formataPreco(getTotalPrice())}</span>
      </Prices>

      <button onClick={() => dispatch(goToDelivery())}>
        Continuar com a entrega
      </button>
    </>
  )
}

export default CartItemsStep
