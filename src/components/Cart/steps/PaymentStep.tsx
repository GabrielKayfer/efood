import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import type { RootReducer } from '../../../store'

import { setPayment, finishOrder, goBackToDelivery } from '../../../store/reducers/cart'

import {
    FormContainer,
    InputGroup,
    InputLarge,
    InputSmall,
    Row,
    TitleStep
} from '../styles'

import { formataPreco } from '../../../utils'

const PaymentStep = () => {
    const dispatch = useDispatch()

    const { items, delivery, payment: paymentData } = useSelector(
        (state: RootReducer) => state.cart
    )

    const [form, setForm] = useState(paymentData)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const getTotalPrice = () => items.reduce((acc, item) => acc + item.preco, 0)

    const handleFinish = async () => {
        setError('')
        setIsLoading(true)

        try {
            dispatch(setPayment(form))

            const payload = {
                products: items.map((item) => ({
                    id: item.id,
                    price: item.preco
                })),
                delivery: {
                    receiver: delivery.fullName,
                    address: {
                        description: delivery.address,
                        city: delivery.city,
                        zipCode: delivery.zipCode,
                        number: Number(delivery.number),
                        complement: delivery.complement
                    }
                },
                payment: {
                    card: {
                        name: form.cardOwner,
                        number: form.cardNumber,
                        code: Number(form.cardCode),
                        expires: {
                            month: Number(form.expiresMonth),
                            year: Number(form.expiresYear)
                        }
                    }
                }
            }

            const response = await fetch(
                'https://api-ebac.vercel.app/api/efood/checkout',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                }
            )

            if (!response.ok) {
                throw new Error(`Checkout falhou (HTTP ${response.status})`)
            }

            const data: { orderId?: string } = await response.json()

            if (!data.orderId) {
                throw new Error('A API não retornou o orderId.')
            }

            dispatch(finishOrder({ orderId: data.orderId }))
        } catch (err) {
            const message =
                err instanceof Error ? err.message : 'Erro inesperado ao finalizar.'
            setError(message)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <FormContainer>
            <TitleStep>
                Pagamento - Valor total a ser pago <span>{formataPreco(getTotalPrice())}</span>
            </TitleStep>

            <InputGroup>
                <label htmlFor="cardOwner">Nome no cartão</label>
                <input
                    id="cardOwner"
                    name="cardOwner"
                    type="text"
                    value={form.cardOwner}
                    onChange={handleChange}
                />
            </InputGroup>

            <Row style={{ gap: '34px' }}>
                <InputLarge>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input
                        className="inputCard"
                        id="cardNumber"
                        name="cardNumber"
                        type="text"
                        value={form.cardNumber}
                        onChange={handleChange}
                    />
                </InputLarge>

                <InputSmall>
                    <label htmlFor="cardCode">CVV</label>
                    <input
                        id="cardCode"
                        name="cardCode"
                        type="text"
                        value={form.cardCode}
                        onChange={handleChange}
                    />
                </InputSmall>
            </Row>

            <Row style={{ gap: '34px' }}>
                <InputGroup>
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <input
                        id="expiresMonth"
                        name="expiresMonth"
                        type="text"
                        value={form.expiresMonth}
                        onChange={handleChange}
                    />
                </InputGroup>

                <InputGroup>
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <input
                        id="expiresYear"
                        name="expiresYear"
                        type="text"
                        value={form.expiresYear}
                        onChange={handleChange}
                    />
                </InputGroup>
            </Row>

            {error && <p>{error}</p>}

            <button
                className="buttomMargin"
                type="button"
                onClick={handleFinish}
                disabled={isLoading}
            >
                {isLoading ? 'Finalizando...' : 'Finalizar pagamento'}
            </button>

            <button type="button" onClick={() => dispatch(goBackToDelivery())} disabled={isLoading}>
                Voltar para edição de endereço
            </button>
        </FormContainer>
    )
}

export default PaymentStep
