import React from 'react'
import { Pizza, ShoppingCart } from '../types/pizza'

type Action =
  | { type: 'SET_MODAL_PRODUCT'; product: Pizza | {} }
  | { type: 'ADD_PRODUCT_TO_CART'; shoppingCart: ShoppingCart }
  | { type: 'REMOVE_PRODUCT_FROM_CART'; index: number }
  | { type: 'EMPTY_PRODUCT_FROM_CART' }
type Dispatch = (action: Action) => void
type State = {
  modalProduct: Pizza | {}
  shoppingCart: ShoppingCart[] | []
}
type ShoppingProviderProps = { children: React.ReactNode }

const initialState = {
  modalProduct: {},
  shoppingCart: [],
}

const ShoppingStateContext = React.createContext<{ state: State; dispatch: Dispatch } | undefined>(
  undefined
)

function ShoppingReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_MODAL_PRODUCT': {
      return {
        ...state,
        modalProduct: action.product,
      }
    }
    case 'ADD_PRODUCT_TO_CART': {
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, action.shoppingCart],
      }
    }
    case 'REMOVE_PRODUCT_FROM_CART': {
      return {
        ...state,
        shoppingCart: [
          ...state.shoppingCart.slice(0, action.index),
          ...state.shoppingCart.slice(action.index + 1),
        ],
      }
    }
    case 'EMPTY_PRODUCT_FROM_CART': {
      return {
        ...state,
        shoppingCart: [],
      }
    }
    default: {
      return state
    }
  }
}

function ShoppingProvider({ children }: ShoppingProviderProps) {
  const [state, dispatch] = React.useReducer(ShoppingReducer, initialState)
  const value = { state, dispatch }
  return <ShoppingStateContext.Provider value={value}>{children}</ShoppingStateContext.Provider>
}

function useShopping() {
  const context = React.useContext(ShoppingStateContext)
  if (context === undefined) {
    throw new Error('useShopping must be used within a ShoppingProvider')
  }
  return context
}

export { ShoppingProvider, useShopping }
