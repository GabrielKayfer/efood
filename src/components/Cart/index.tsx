import { useDispatch, useSelector } from 'react-redux'
import type { RootReducer } from '../../store'


import CartLayout from './CartLayout'
import CartItemsStep from './steps/CartItemsStep'
import DeliveryStep from './steps/DeliveryStep'
import PaymentStep from './steps/PaymentStep'
import ConfirmationStep from './steps/ConfirmationStep'

import { close } from '../../store/reducers/cart'

const Cart = () => {
    const dispatch = useDispatch()
    const { isOpen, step } = useSelector((state: RootReducer) => state.cart)

    return (
        <CartLayout isOpen={isOpen} onClose={() => dispatch(close())}>
            {step === 'cart' && <CartItemsStep />}
            {step === 'delivery' && <DeliveryStep />}
            {step === 'payment' && <PaymentStep />}
            {step === 'success' && <ConfirmationStep />}
        </CartLayout>
    )
}

export default Cart