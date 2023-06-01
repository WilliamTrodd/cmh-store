import { Component } from 'solid-js'
import { A } from '@solidjs/router'

interface Product {
  imageUrl: string
  name: string
  id: string
  price: number
}

type ProductCardProps = {
  product: Product
}

export const FeaturedProductCard: Component<ProductCardProps> = (props) => {
  return (
    <A href={'/product/'+props.product.id} class='flex flex-col'>
      <img class='object-cover grow' src={props.product.imageUrl} />
      <div class='bg-accent-offwhite p-4'>
        <div class='text-sm font-light font-serif tracking-wider'>{props.product.name}</div>
        <div class='text-md font-serif tracking-wide'>£{props.product.price.toFixed(2)}</div>
      </div>
    </A>
  )
}