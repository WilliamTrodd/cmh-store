//TODO move variables to store
// menu open
// hbopen
// products
// cart
// user?
// current products

import { createStore } from 'solid-js/store'
import type { StoreNode, Store, SetStoreFunction } from 'solid-js/store'

const [state, setState] = createStore({
  menuOpen: false,
  hbOpen: false,
  products: [
    {
      imageUrl: 'images/product1.jpg',
      name: 'Test',
      id: '1',
      price: 30,
    },
    {
      imageUrl: 'images/product2.jpg',
      name: 'Test 2',
      id: '2',
      price: 30,
    },
    {
      imageUrl: 'images/product3.jpg',
      name: 'Test 3',
      id: '3',
      price: 30,
    },
    {
      imageUrl: 'images/product1.jpg',
      name: 'Test 4',
      id: '4',
      price: 12.5,
    },
    {
      imageUrl: 'images/product2.jpg',
      name: 'Test 5',
      id: '5',
      price: 30,
    },
    {
      imageUrl: 'images/product3.jpg',
      name: 'Test 6',
      id: '6',
      price: 30,
    },
  ],
  cart: [],
  user: null,
  currentProduct: null,
})

export { state, setState }
