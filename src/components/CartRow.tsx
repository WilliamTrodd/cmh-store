import { Component } from 'solid-js'
import { Product } from '../types'

type CartRowProps = {
  product: Product
}

export const CartRow: Component<CartRowProps> = (props) => {

  return (
    <div class='flex h-20 w-full justify-between items-center font-serif'>
      <div class='flex items-center'>
      <img src={props.product.imageUrl} alt={props.product.name} class='object-cover w-20 h-20'/>
      <div class='w-20 text-center'>
      {props.product.name}
      </div>
      </div>
      <div class='grow text-right'>
      £{props.product.price.toFixed(2)}
      </div>
    </div>
  )
}