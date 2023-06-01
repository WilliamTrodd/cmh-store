import { Component, createSignal } from "solid-js"
import { Hamburger } from "./Hamburger"
import { A } from '@solidjs/router'
import { state, setState } from '../store'
import { FiShoppingBag } from 'solid-icons/fi'

export const Header: Component = () => {

  const handleClick = () => {
    setState('menuOpen', !state.menuOpen)
  }


  return (
    <div class='w-full bg-white flex items-center justify-between h-14'>
      <div id='hamburger' class='w-12' onClick={handleClick}>
        <Hamburger />
      </div>
      <div class='absolute w-80 -left-80 transition-transform duration-300 ease-in top-20 bottom-0 z-50 bg-accent-offwhite' classList={{['translate-x-80 overflow-hidden']: state.menuOpen}}>
        <div>
          <A onClick={handleClick} href='/' class='block py-2 pl-3 text-left font-serif text-lg tracking-wider hover:bg-accent-green'>Home</A>
          <A onClick={handleClick} href='/shop' class='block py-2 pl-3 text-left font-serif text-lg tracking-wider hover:bg-accent-green'>Shop</A>
          <A onClick={handleClick} href='/about' class='block py-2 pl-3 text-left font-serif text-lg tracking-wider hover:bg-accent-green'>About</A>
        </div>
      </div>
      <div class='grow text-center font-serif'>CMH Crafts</div>
      <div class='w-12'>
        <span id='search'></span>
        <A href={'/cart'} id='basket'><FiShoppingBag color=''/></A>
      </div>
    </div>
  )
}