import { Component } from 'solid-js';

import { PromoBanner } from './components/PromoBanner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedItems } from './components/FeaturedItems';


const App: Component = () => {
  return (
    <div>
      <PromoBanner text="Welcome to my store :^)" />
      <Header />
      <Hero />
      <FeaturedItems productIds={[]}/>
    </div>
  );
};

export default App;
