import { Component, createSignal, For } from "solid-js";
import { ProductCard } from "./ProductCard";


type FeaturedItemsProps = {
  productIds: string[]
}

interface Product {
  imageUrl: string
  name: string
  id: string
  price: number
}

export const FeaturedItems: Component<FeaturedItemsProps> = (props) => {

  // Here I could fetch the featured products from an API

  const [products, setProducts] = createSignal<Product[]>([
    {
      imageUrl: '../src/assets/product1.jpg',
      name: 'Test',
      id: '1',
      price: 30
    },
    {
      imageUrl: '../src/assets/product2.jpg',
      name: 'Test 2',
      id: '2',
      price: 30
    },    {
      imageUrl: '../src/assets/product3.jpg',
      name: 'Test 3',
      id: '3',
      price: 30
    },
    {
      imageUrl: '../src/assets/product1.jpg',
      name: 'Test 4',
      id: '4',
      price: 12.50
    },
    {
      imageUrl: '../src/assets/product2.jpg',
      name: 'Test 5',
      id: '5',
      price: 30
    },    {
      imageUrl: '../src/assets/product3.jpg',
      name: 'Test 6',
      id: '6',
      price: 30
    }

  ])


  return (
    <>
    <h2 class='font-serif text-md font-semibold my-3 pl-3 tracking-wider'>Featured Items</h2>
    <div class='grid grid-cols-2 md:grid-cols-4 md:w-4/5 md:mx-auto gap-1 px-3'>
    <For each={products()} fallback={<div>Loading...</div>}>
      {item => <ProductCard product={item} />}
    </For>
    </div>
    </>
  )

}