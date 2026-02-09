import { useDispatch, useSelector } from 'react-redux'
import type { RootReducer } from '../../../store'
import { goToCart, goToPayment, setDelivery } from '../../../store/reducers/cart'
import { useState } from 'react'

import { FormContainer, InputGroup, Row, TitleStep } from '../styles'

const DeliveryStep = () => {
    const dispatch = useDispatch()
    const deliveryData = useSelector((state: RootReducer) => state.cart.delivery)

    const [form, setForm] = useState(deliveryData)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = () => {
        dispatch(setDelivery(form))
        dispatch(goToPayment())
    }

    return (
        <FormContainer>
            <TitleStep>Entrega</TitleStep>

            <InputGroup>
                <label htmlFor="fullName">Quem irá receber</label>
                <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={form.fullName}
                    onChange={handleChange}
                />
            </InputGroup>

            <InputGroup>
                <label htmlFor="address">Endereço</label>
                <input
                    id="address"
                    name="address"
                    type="text"
                    value={form.address}
                    onChange={handleChange}
                />
            </InputGroup>

            <InputGroup>
                <label htmlFor="city">Cidade</label>
                <input
                    id="city"
                    name="city"
                    type="text"
                    value={form.city}
                    onChange={handleChange}
                />
            </InputGroup>

            <Row style={{ gap: '34px' }}>
                <InputGroup>
                    <label htmlFor="zipCode">CEP</label>
                    <input
                        id="zipCode"
                        name="zipCode"
                        type="text"
                        value={form.zipCode}
                        onChange={handleChange}
                    />
                </InputGroup>

                <InputGroup>
                    <label htmlFor="number">Número</label>
                    <input
                        id="number"
                        name="number"
                        type="text"
                        value={form.number}
                        onChange={handleChange}
                    />
                </InputGroup>
            </Row>

            <InputGroup>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                    id="complement"
                    name="complement"
                    type="text"
                    value={form.complement}
                    onChange={handleChange}
                />
            </InputGroup>
        
            <button className='buttomMargin' type="button" onClick={handleSubmit}>
                Continue para o pagamento
            </button>

            <button type="button" onClick={() => dispatch(goToCart())}>
                Voltar ao carrinho
            </button>
        </FormContainer>
    )
}

export default DeliveryStep