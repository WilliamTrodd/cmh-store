import { Component } from 'solid-js'

interface Product {
  imageUrl: string
  name: string
  id: string
  price: number
}

type ShopCardProps = {
  product: Product
}

export const ShopCard: Component<ShopCardProps> = (props) => {
  return (
    <div class='flex flex-col'>
      <img class='object-cover h-48' src={props.product.imageUrl} />
      <div class='bg-accent-offwhite p-4'>
        <div class='text-sm font-light font-serif tracking-wider'>{props.product.name}</div>
        <div class='text-md font-serif tracking-wide'>£{props.product.price.toFixed(2)}</div>
      </div>
    </div>
  )
}