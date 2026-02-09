import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { ApiMenuItem } from '../../models/ApiRestaurant'

export type CartStep = 'cart' | 'delivery' | 'payment' | 'success'

type DeliveryData = {
    fullName: string
    address: string
    city: string
    zipCode: string
    number: string
    complement?: string
}

type PaymentData = {
    cardOwner: string
    cardNumber: string
    expiresMonth: string
    expiresYear: string
    cardCode: string
}

type CartState = {
    items: ApiMenuItem[]
    isOpen: boolean
    step: CartStep
    delivery: DeliveryData
    payment: PaymentData
    orderId?: string
}

const initialState: CartState = {
    items: [],
    isOpen: false,
    step: 'cart',
    delivery: {
        fullName: '',
        address: '',
        city: '',
        zipCode: '',
        number: '',
        complement: ''
    },
    payment: {
        cardOwner: '',
        cardNumber: '',
        expiresMonth: '',
        expiresYear: '',
        cardCode: ''
    },
    orderId: undefined
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<ApiMenuItem>) => {
            const product = state.items.find((item) => item.id === action.payload.id)
            if (!product) {
                state.items.push(action.payload)
            } else {
                alert('O item já consta no carrinho')
            }
        },
        remove: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
            if (state.items.length === 0) {
                state.step = 'cart'
            }
        },
        open: (state) => {
            state.isOpen = true
        },

        close: (state) => {
            state.isOpen = false
        },
        goToCart: (state) => {
            state.step = 'cart'
        },
        goToDelivery: (state) => {
            if (state.items.length > 0) {
                state.step = 'delivery'
            }
        },
        goBackToDelivery: (state) => {
            state.step = 'delivery'
        },
        goToPayment: (state) => {
            state.step = 'payment'
        },
        setDelivery: (state, action: PayloadAction<DeliveryData>) => {
            state.delivery = action.payload
        },
        setPayment: (state, action: PayloadAction<PaymentData>) => {
            state.payment = action.payload
        },
        finishOrder: (state, action: PayloadAction<{ orderId: string }>) => {
            state.orderId = action.payload.orderId
            state.step = 'success'
            state.items = []
        },

        resetFlow: (state) => {
            state.step = 'cart'
            state.orderId = undefined
            state.delivery = initialState.delivery
            state.payment = initialState.payment
        }
    }
})

export const {
    add,
    remove,
    open,
    close,
    goToCart,
    goToDelivery,
    goToPayment,
    setDelivery,
    setPayment,
    finishOrder,
    resetFlow,
    goBackToDelivery
} = cartSlice.actions

export default cartSlice.reducer