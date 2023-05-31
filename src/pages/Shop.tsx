import { Component, For, createSignal } from 'solid-js'
import { ShopCard } from '../components/ShopCard'

type ShopItemsProps = {
  productIds: string[]
}

interface Product {
  imageUrl: string
  name: string
  id: string
  price: number
}

const Shop: Component<ShopItemsProps> = (props) => { 

  const [products, setProducts] = createSignal<Product[]>([
    {
      imageUrl: 'images/product1.jpg',
      name: 'Test',
      id: '1',
      price: 30
    },
    {
      imageUrl: 'images/product2.jpg',
      name: 'Test 2',
      id: '2',
      price: 30
    },    {
      imageUrl: 'images/product3.jpg',
      name: 'Test 3',
      id: '3',
      price: 30
    },
    {
      imageUrl: 'images/product1.jpg',
      name: 'Test 4',
      id: '4',
      price: 12.50
    },
    {
      imageUrl: 'images/product2.jpg',
      name: 'Test 5',
      id: '5',
      price: 30
    },    {
      imageUrl: 'images/product3.jpg',
      name: 'Test 6',
      id: '6',
      price: 30
    }

  ])


  return (

    <>
      <div class='flex justify-between px-3 my-2 font-serif text-md'>
        <span>Filter and sort</span>
        <span>{products().length} products</span>  
      </div>
      <div class='grid grid-cols-2 md:grid-cols-4 gap-2 px-3'>
        <For each={products()}>
          {item => <ShopCard product={item}/>}
        </For>
      </div>
    </>
  )

}

export default Shop