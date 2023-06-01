import { Component } from "solid-js";

export const Hero: Component = () => {
  return(
<div class='relative w-full'>
    <img class='w-full h-64 object-cover brightness-50' src="/images/hero.jpg" alt="hero" />
    <div class='absolute left-0 right-0 top-0 h-full flex flex-col items-center justify-center text-white'>
      <span class='text-4xl font-serif font-medium'>Casey's Crafts</span>
      <span class='text-lg font-thin font-serif'>Handmade with love</span>
    </div>
</div>
  )
}