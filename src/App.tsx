import { Component, lazy, createEffect} from 'solid-js';
import { Route, Routes, useLocation } from '@solidjs/router';


import { PromoBanner } from './components/PromoBanner';
import { Header } from './components/Header';
import { state } from './store';

import Home from './pages/Home'
const About = lazy(() => import('./pages/About'))
const Shop = lazy(() => import('./pages/Shop'))
const Product = lazy(() => import('./pages/Product'))

const App: Component = () => {

  const location = useLocation()
  
  createEffect(() => {
    console.log(location.pathname)

  })

  return (
    <div classList={{'max-h-screen overflow-hidden': state.menuOpen}}>
        <PromoBanner text="Welcome to my store :^)" />
        <Header />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
        <Route path="/product">
          <Route path="/:id" component={Product}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
