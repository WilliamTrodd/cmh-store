import { Hero } from '../components/Hero';
import { FeaturedItems } from '../components/FeaturedItems';
import { Component } from 'solid-js';
import { state } from '../store';


const Home: Component = () => {
  state.products.forEach((product) => {
    console.log(product.imageUrl)
  })
  
  return(
  <>
  <Hero />
  <FeaturedItems productIds={[]}/>
  </>
)}

export default Home;