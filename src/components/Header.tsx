import { Component, createSignal } from "solid-js"
import { Hamburger } from "./Hamburger"

export const Header: Component = () => {

  const [menuOpen, setMenuOpen] = createSignal(false)

  const handleClick = () => {
    setMenuOpen(!menuOpen())
  }


  return (
    <div class='w-full bg-white flex items-center justify-between h-14'>
      <div id='hamburger' class='w-12' onClick={handleClick}>
        <Hamburger />
      </div>
      <div class='absolute w-80 -left-80 transition-transform duration-300 ease-in top-16 z-50 bg-accent-offwhite' classList={{['translate-x-80']: menuOpen()}}>
        <div>
          <a href='#' class='block py-2 pl-3 text-left font-serif text-lg hover:bg-accent-green'>Home</a>
          <a href='#' class='block py-2 pl-3 text-left font-serif text-lg hover:bg-accent-green'>Shop</a>
          <a href='#' class='block py-2 pl-3 text-left font-serif text-lg hover:bg-accent-green'>About</a>
        </div>
      </div>
      <div class='grow text-center font-serif'>CMH Crafts</div>
      <div class='w-12'>
        <span id='search'></span>
        <span id='basket'></span>
      </div>
    </div>
  )
}