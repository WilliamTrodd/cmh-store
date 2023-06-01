import { Component } from "solid-js"
import { FeaturedItems } from "../components/FeaturedItems"

const Cart: Component = () => {


  return (
    <>
    <div class='flex flex-col items-center mt-3 mb-5'>
      <h2 class='text-2xl font-serif mb-6'>Your cart is empty</h2>
      <div class='bg-accent-green text-sm font-thin font-serif px-5 py-2'>Continue shopping</div>
    </div>
    <FeaturedItems productIds={[]}/>
    </>
  )
}

export default Cart