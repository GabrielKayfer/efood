import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { InputMask } from '@react-input/mask'

import type { RootReducer } from '../../../store'
import { goBackToDelivery, setPayment, finishOrder } from '../../../store/reducers/cart'

import * as S from '../styles'
import { usePurchaseMutation } from '../../../services/api'
import { formatPrice, onlyDigits } from '../../../utils'

const PaymentStep = () => {
    const dispatch = useDispatch()

    const { items, delivery, payment: paymentData } = useSelector(
        (state: RootReducer) => state.cart
    )

    const [purchase, { isLoading, isError, data }] = usePurchaseMutation()

    const getTotalPrice = () => items.reduce((acc, item) => acc + item.preco, 0)

    const formik = useFormik({
        initialValues: paymentData,
        enableReinitialize: true,
        validationSchema: Yup.object({
            cardOwner: Yup.string()
                .min(5, 'O nome precisa ter pelo menos 5 caracteres')
                .required('Campo obrigatório'),
            cardNumber: Yup.string()
                .test('card-len', 'O número do cartão precisa ter 16 números', (v) => {
                    return onlyDigits(v ?? '').length === 16
                })
                .required('Campo obrigatório'),
            cardCode: Yup.string()
                .test('cvv-len', 'O código do cartão tem 3 dígitos', (v) => {
                    return onlyDigits(v ?? '').length === 3
                })
                .required('Campo obrigatório'),
            expiresMonth: Yup.string()
                .test('mm', 'Mês inválido', (value) => {
                    if (!value) return false
                    const month = Number(onlyDigits(value))
                    return month >= 1 && month <= 12
                })
                .required('Campo obrigatório')
                .required('Campo obrigatório'),
            expiresYear: Yup.string()
                .test('yy', 'O ano de vencimento do cartão tem 2 dígitos', (v) => {
                    return onlyDigits(v ?? '').length === 2
                })
                .required('Campo obrigatório')
        }),
        onSubmit: (values) => {
            dispatch(setPayment(values))

            purchase({
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
                        name: values.cardOwner,
                        number: values.cardNumber,
                        code: Number(values.cardCode),
                        expires: {
                            month: Number(values.expiresMonth),
                            year: Number(values.expiresYear)
                        }
                    }
                }
            })
        }
    })

    useEffect(() => {
        if (data?.orderId) {
            dispatch(finishOrder({ orderId: data.orderId }))
        }
    }, [data, dispatch])

    const getErrorMessage = (fieldName: keyof typeof formik.values) => {
        const touched = !!formik.touched[fieldName]
        const error = formik.errors[fieldName]
        return touched && error ? String(error) : ''
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <S.FormContainer>
                <S.TitleStep>
                    Pagamento - Valor total a ser pago <span>{formatPrice(getTotalPrice())}</span>
                </S.TitleStep>

                <S.InputGroup>
                    <label htmlFor="cardOwner">Nome no cartão</label>
                    <input
                        id="cardOwner"
                        name="cardOwner"
                        type="text"
                        value={formik.values.cardOwner}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <p>{getErrorMessage('cardOwner')}</p>
                </S.InputGroup>

                <S.Row style={{ gap: '34px' }}>
                    <S.InputLarge>
                        <label htmlFor="cardNumber">Número do cartão</label>
                        <InputMask
                            id="cardNumber"
                            name="cardNumber"
                            type="text"
                            value={formik.values.cardNumber}
                            onChange={formik.handleChange}
                            onBlur={() => formik.setFieldTouched('cardNumber', true)}
                            mask="____ ____ ____ ____"
                            replacement={{ _: /\d/ }}
                        />
                        <p>{getErrorMessage('cardNumber')}</p>
                    </S.InputLarge>

                    <S.InputSmall>
                        <label htmlFor="cardCode">CVV</label>
                        <InputMask
                            id="cardCode"
                            name="cardCode"
                            type="text"
                            value={formik.values.cardCode}
                            onChange={formik.handleChange}
                            onBlur={() => formik.setFieldTouched('cardCode', true)}
                            mask="___"
                            replacement={{ _: /\d/ }}
                        />

                        <p>{getErrorMessage('cardCode')}</p>
                    </S.InputSmall>
                </S.Row>

                <S.Row style={{ gap: '34px' }}>
                    <S.InputGroup>
                        <label htmlFor="expiresMonth">Mês de vencimento</label>
                        <InputMask
                            id="expiresMonth"
                            name="expiresMonth"
                            type="text"
                            value={formik.values.expiresMonth}
                            onChange={formik.handleChange}
                            onBlur={() => formik.setFieldTouched('expiresMonth', true)}
                            mask="__"
                            replacement={{ _: /\d/ }}
                        />
                        <p>{getErrorMessage('expiresMonth')}</p>
                    </S.InputGroup>

                    <S.InputGroup>
                        <label htmlFor="expiresYear">Ano de vencimento</label>
                        <InputMask
                            id="expiresYear"
                            name="expiresYear"
                            type="text"
                            value={formik.values.expiresYear}
                            onChange={formik.handleChange}
                            onBlur={() => formik.setFieldTouched('expiresYear', true)}
                            mask="__"
                            replacement={{ _: /\d/ }}
                        />

                        <p>{getErrorMessage('expiresYear')}</p>
                    </S.InputGroup>
                </S.Row>

                {isError && <p>Ocorreu um erro ao processar o pagamento.</p>}

                <button className="buttomMargin" type="submit" disabled={isLoading}>
                    {isLoading ? 'Finalizando...' : 'Finalizar pagamento'}
                </button>

                <button type="button" onClick={() => dispatch(goBackToDelivery())} disabled={isLoading}>
                    Voltar para edição de endereço
                </button>
            </S.FormContainer>
        </form>
    )
}

export default PaymentStep
