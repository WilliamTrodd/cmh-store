import { Component, For, Show } from "solid-js"
import { productState } from '../store'
import { CartRow } from './CartRow'

export const ShoppingCart: Component = () => {

  const cart = JSON.parse(productState.cart)
  const total = cart.reduce((acc: number, product: any) => acc + product.price, 0)

  return (
    <div class='flex flex-col mx-3 mt-5 gap-2'>
      <For each={cart} fallback={<></>}>
        {(product) => <CartRow product={product}/>}
      </For>
      <span class='text-xl font-serif w-fit mr-0 ml-auto'>Total: £{total.toFixed(2)}</span>
      <div class='bg-accent-green text-center font-serif text-lg tracking-wide px-3 py-1 w-fit ml-auto mr-0'>Proceed to checkout</div>
    </div>
)
}