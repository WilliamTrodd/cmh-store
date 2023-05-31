import { Component, createSignal } from 'solid-js'

export const Hamburger: Component = () => {

  const [hbOpen, setHbOpen] = createSignal(false)
  const handleClick = () => {
    setHbOpen(!hbOpen())
  }

  return (
    <div id='hb' class='mx-4 w-12 cursor-pointer' onClick={handleClick}>
      <span id='hb-top' class='block w-6 h-1 bg-accent-green mb-1 transition-all duration-200 ease-in' classList={{['rotate-45 translate-y-2']: hbOpen()}}></span>
      <span id='hb-mid' class='block w-6 h-1 bg-accent-green mb-1 transition-all duration-200 ease-in' classList={{['opacity-0']: hbOpen()}}></span>
      <span id='hb-bot' class='block w-6 h-1 bg-accent-green transition-all duration-200 ease-in' classList={{['-rotate-45 -translate-y-2']: hbOpen()}}></span>
    </div>
  )
}