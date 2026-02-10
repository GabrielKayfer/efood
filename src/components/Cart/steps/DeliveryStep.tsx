import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { InputMask } from '@react-input/mask'

import type { RootReducer } from '../../../store'
import { goToCart, goToPayment, setDelivery } from '../../../store/reducers/cart'
import * as S from '../styles'

const DeliveryStep = () => {
  const dispatch = useDispatch()
  const deliveryData = useSelector((state: RootReducer) => state.cart.delivery)

  const formik = useFormik({
    initialValues: deliveryData,
    enableReinitialize: true,
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string().min(3, 'Endereço muito curto').required('Campo obrigatório'),
      city: Yup.string().min(2, 'Cidade muito curta').required('Campo obrigatório'),
      zipCode: Yup.string()
        .matches(/^\d{5}-\d{3}$/, 'CEP inválido')
        .required('Campo obrigatório'),
      number: Yup.string().required('Campo obrigatório'),
      complement: Yup.string().optional()
    }),
    onSubmit: (values) => {
      dispatch(setDelivery(values))
      dispatch(goToPayment())
    }
  })

  const getErrorMessage = (fieldName: keyof typeof formik.values) => {
    const touched = !!formik.touched[fieldName]
    const error = formik.errors[fieldName]
    return touched && error ? String(error) : ''
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <S.FormContainer>
        <S.TitleStep>Entrega</S.TitleStep>

        <S.InputGroup>
          <label htmlFor="fullName">Quem irá receber</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p>{getErrorMessage('fullName')}</p>
        </S.InputGroup>

        <S.InputGroup>
          <label htmlFor="address">Endereço</label>
          <input
            id="address"
            name="address"
            type="text"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p>{getErrorMessage('address')}</p>
        </S.InputGroup>

        <S.InputGroup>
          <label htmlFor="city">Cidade</label>
          <input
            id="city"
            name="city"
            type="text"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p>{getErrorMessage('city')}</p>
        </S.InputGroup>

        <S.Row style={{ gap: '34px' }}>
          <S.InputGroup>
            <label htmlFor="zipCode">CEP</label>
            <InputMask
              id="zipCode"
              name="zipCode"
              type="text"
              value={formik.values.zipCode}
              onChange={formik.handleChange}
              onBlur={() => formik.setFieldTouched('zipCode', true)}
              mask="_____-___"
              replacement={{ _: /\d/ }}
            />
            <p>{getErrorMessage('zipCode')}</p>
          </S.InputGroup>

          <S.InputGroup>
            <label htmlFor="number">Número</label>
            <input
              id="number"
              name="number"
              type="text"
              value={formik.values.number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <p>{getErrorMessage('number')}</p>
          </S.InputGroup>
        </S.Row>

        <S.InputGroup>
          <label htmlFor="complement">Complemento (opcional)</label>
          <input
            id="complement"
            name="complement"
            type="text"
            value={formik.values.complement}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </S.InputGroup>

        <button className="buttomMargin" type="submit">
          Continue para o pagamento
        </button>

        <button type="button" onClick={() => dispatch(goToCart())}>
          Voltar ao carrinho
        </button>
      </S.FormContainer>
    </form>
  )
}

export default DeliveryStep
