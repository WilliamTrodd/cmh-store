import { Component, lazy } from 'solid-js';
import { Route, Routes } from '@solidjs/router';


import { PromoBanner } from './components/PromoBanner';
import { Header } from './components/Header';

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Shop = lazy(() => import('./pages/Shop'))


const App: Component = () => {
  return (
    <div>
        <PromoBanner text="Welcome to my store :^)" />
  <Header />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
      </Routes>

    </div>
  );
};

export default App;
