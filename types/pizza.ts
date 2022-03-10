export interface PizzaData {
  pizza: Pizza[]
  toppings: PizzaTopping[]
  size: PizzaSize[]
}

export interface ShoppingCart {
  id?: number
  name?: string
  price?: number
  img?: string
  size?: PizzaSize
  toppings?: PizzaTopping[]
}

export interface Pizza {
  id: number
  name: string
  price: number
  img: string
}

export interface PizzaTopping {
  id: number
  name: string
}

export interface PizzaSize {
  id: number
  name: string
}
