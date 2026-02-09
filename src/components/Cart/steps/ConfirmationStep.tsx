import { useDispatch, useSelector } from 'react-redux'
import type { RootReducer } from '../../../store'
import { SucessStep, TitleStep } from '../styles'
import { resetFlow, close } from '../../../store/reducers/cart'

const ConfirmationStep = () => {
    const dispatch = useDispatch()
    const { orderId } = useSelector((state: RootReducer) => state.cart)

    const handleFinish = () => {
        dispatch(resetFlow())
        dispatch(close())
    }

    return (
        <SucessStep>
            <TitleStep>
                Pedido confirmado - {orderId ? orderId : '---'}
            </TitleStep>

            <p>
                Estamos felizes em informar que seu pedido já está em processo de
                preparação e, em breve, será entregue no endereço fornecido.
                <br />
                <br />
                Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
                realizar cobranças extras.
                <br />
                <br />
                Lembre-se da importância de higienizar as mãos após o recebimento do
                pedido, garantindo assim sua segurança e bem-estar durante a refeição.
                <br />
                <br />
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
            </p>

            <button type="button" onClick={handleFinish}>
                Concluir
            </button>
        </SucessStep>
    )
}

export default ConfirmationStep