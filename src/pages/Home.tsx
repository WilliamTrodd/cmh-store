import { Hero } from '../components/Hero';
import { FeaturedItems } from '../components/FeaturedItems';
import { Component } from 'solid-js';


const Home: Component = () => {  
  return(
  <>
  <Hero />
  <FeaturedItems productIds={[]}/>
  </>
)}

export default Home;