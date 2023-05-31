import { Component } from "solid-js"

type PromoBannerProps = {
  text: string
}

export const PromoBanner: Component<PromoBannerProps> = (props) => {
  return (
    <div class="bg-accent-green w-full h-6 flex items-center font-serif font-extralight italic text-xs justify-center">{props.text}</div>
  )

}