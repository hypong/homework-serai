import { PizzaData } from '../types/pizza'

export const pizzaData: PizzaData = {
  pizza: [
    {
      id: 1,
      name: 'Pizza #1',
      price: 99,
      img: 'https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272_960_720.jpg',
    },
    {
      id: 2,
      name: 'Pizza #2',
      price: 99,
      img: 'https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272_960_720.jpg',
    },
    {
      id: 3,
      name: 'Pizza #3',
      price: 99,
      img: 'https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272_960_720.jpg',
    },
    {
      id: 4,
      name: 'Pizza #4',
      price: 99,
      img: 'https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272_960_720.jpg',
    },
    {
      id: 5,
      name: 'Pizza #5',
      price: 99,
      img: 'https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272_960_720.jpg',
    },
    {
      id: 6,
      name: 'Pizza #6',
      price: 99,
      img: 'https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272_960_720.jpg',
    },
  ],
  toppings: [
    {
      id: 1,
      name: 'Pizza Topping #1',
    },
    {
      id: 2,
      name: 'Pizza Topping #2',
    },
    {
      id: 3,
      name: 'Pizza Topping #3',
    },
    {
      id: 4,
      name: 'Pizza Topping #4',
    },
    {
      id: 5,
      name: 'Pizza Topping #5',
    },
    {
      id: 6,
      name: 'Pizza Topping #6',
    },
  ],
  size: [
    {
      id: 1,
      name: 'Pizza Size #1',
    },
    {
      id: 2,
      name: 'Pizza Size #2',
    },
    {
      id: 3,
      name: 'Pizza Size #3',
    },
  ],
}

export const fetchData = (): Promise<PizzaData> =>
  new Promise((resolve, reject) => {
    resolve(pizzaData)
  })
