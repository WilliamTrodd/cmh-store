import { createStore } from 'solid-js/store'
import { Product } from './types'

const [state, setState] = createStore({
  menuOpen: false,
  hbOpen: false,
  currentProduct: null,
})

import { createLocalStorage } from '@solid-primitives/storage'

const [productState, setProductState] = createLocalStorage()

setProductState(
  'products',
  JSON.stringify([
    {
      imageUrl: '/images/product1.jpg',
      name: 'Test',
      id: '1',
      price: 30,
    },
    {
      imageUrl: '/images/product2.jpg',
      name: 'Test 2',
      id: '2',
      price: 30,
    },
    {
      imageUrl: '/images/product3.jpg',
      name: 'Test 3',
      id: '3',
      price: 30,
    },
    {
      imageUrl: '/images/product1.jpg',
      name: 'Test 4',
      id: '4',
      price: 12.5,
    },
    {
      imageUrl: '/images/product2.jpg',
      name: 'Test 5',
      id: '5',
      price: 30,
    },
    {
      imageUrl: '/images/product3.jpg',
      name: 'Test 6',
      id: '6',
      price: 30,
    },
  ])
)
setProductState('user', 'null')

export { state, setState, productState, setProductState }
