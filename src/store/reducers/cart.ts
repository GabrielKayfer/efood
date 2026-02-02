import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { ApiMenuItem } from '../../models/ApiRestaurant'

type CartState = {
    items: ApiMenuItem[]
    isOpen: boolean
}

const initialState: CartState = {
    items: [],
    isOpen: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<ApiMenuItem>) => {
            const product = state.items.find(item => item.id === action.payload.id);
            if (!product) {
            state.items.push(action.payload)
            } else {
                alert('O item já consta no carrinho')
            }
        },
        remove: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        }
    },
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
