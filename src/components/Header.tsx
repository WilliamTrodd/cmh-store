import { Component } from "solid-js"

export const Header: Component = () => {
  return (
    <div class='w-full bg-white flex items-center justify-between h-14'>
      <div id='hamburger' class='w-12'></div>
      <div class='grow text-center font-serif'>CMH Crafts</div>
      <div class='w-12'>
        <span id='search'></span>
        <span id='basket'></span>
      </div>
    </div>
  )
}