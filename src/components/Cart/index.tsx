import { useDispatch, useSelector } from "react-redux"

import { Overlay, CartContainer, Sidebar, Prices, CartItem } from "./styles"
import type { RootReducer } from "../../store"
import { close, remove } from '../../store/reducers/cart'

import { formataPreco } from "../../utils"

const Cart = () => {
    const {isOpen, items} = useSelector((state: RootReducer) => state.cart)

    const dispatch = useDispatch()

    const closeCart = () => {
        dispatch(close())
    }

    const getTotalPrice = () => {
        return items.reduce((acumulador, valorAtual) => {
            return (acumulador += valorAtual.preco)
        }, 0)
    }

    const removeItem = (id: number) => {
        dispatch(remove(id))
    }
    
    return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={closeCart}/>
        <Sidebar>
            <ul>
                {items.map((item) => (
                <CartItem key={item.id}>
                    <img src={item.foto} alt={item.nome} />
                    <div>
                        <h3>{item.nome}</h3>
                        <span>{formataPreco(item.preco)}</span>
                    </div>
                    <button onClick={() => removeItem(item.id)}/>
                </CartItem>
                ))}
            </ul>
            <Prices>Valor total<span>{formataPreco(getTotalPrice())}</span></Prices>
            <button>Continuar com a entrega</button>
        </Sidebar>
    </CartContainer>
)
}

export default Cart