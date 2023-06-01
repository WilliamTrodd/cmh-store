import { Component, createSignal, For } from "solid-js";
import { FeaturedProductCard } from "./FeaturedProductCard";
import { A } from "@solidjs/router"
import { state } from "../store";

type FeaturedItemsProps = {
  productIds: string[]
}

export const FeaturedItems: Component<FeaturedItemsProps> = (props) => {

  return (

    <div class='flex flex-col items-center'>
    <h2 class='font-serif text-md font-semibold my-3 pl-3 tracking-wider'>Featured Items</h2>
    <div class='grid grid-cols-2 md:grid-cols-4 md:w-4/5 md:mx-auto gap-1 px-3'>
    <For each={state.products} fallback={<div>Loading...</div>}>
      {item => <FeaturedProductCard product={item} />}
    </For>
    </div>
    <A href='/shop' class='px-4 py-2 mt-2 hover:scale-105 font-serif bg-accent-green'>
      View All
    </A>
    </div>
  )

}