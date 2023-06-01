import { useParams } from "@solidjs/router"
import { Component, Show } from "solid-js"
import { setProductState, productState } from "../store"
import { Product } from "../types"

const ProductPage: Component = () => {

  // Strucure:
  // Image Carousel (Just do 3x the same image for now)
  // Maker?
  // Product Name
  // Price
  // Add to Cart
  // Description
  // Also Like
  const params = useParams()

  // for now, let's just access the store directly, rather than fetching any data

  const products = JSON.parse(productState.products)
  const cart: Product[] = JSON.parse(productState.cart) || []
  const product = products.find((p: Product) => p.id === params.id)  

  const addToCart = () => {
    if(product){
      setProductState('cart', JSON.stringify([...cart, product]))
    }
  }


  return (
    <Show when={product} fallback={<div>No product found</div>}>
      <div class='flex flex-col gap-2 mx-3'>
        {/*image carousel*/}
        <img src={product?.imageUrl} class='aspect-square object-cover'/>
        <span class='font-serif text-sm tracking-wide font-medium'>Casey Harling</span>
        <span class='font-serif text-2xl tracking-wide font-medium'>{product?.name}</span>
        <span class='font-serif text-2xl tracking-wide font-medium'>£{product?.price.toFixed(2)}</span>
        {/*Quantitiy*/}
        <div onClick={addToCart} class='font-serif text-xl mx-auto bg-accent-green px-6 py-2 cursor-pointer'>Add to Cart</div>
        <div class='font-serif text-lg tracking-wide font-medium'>Here's a sample description</div>
      </div>
    </Show>
  )
}

export default ProductPage