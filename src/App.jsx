import { React } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from './components/Navbar/Navbar'
import Hero from './container/Hero.jsx'
import BlogChainSystem from './container/BlogChainSystem'
import WebGaming from './container/WebGaming.jsx'
import GameConsole from './container/GameConsole.jsx'
import Product from './container/Product.jsx'
import FavoriteChain from './container/FavoriteChain.jsx'
import BlogSlider from './container/BlogSlider.jsx'
import Review from './container/Review.jsx'
import Community from './container/Community.jsx'
import Partner from './container/Partner.jsx'
import Footer from './container/Footer.jsx'
function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <BlogChainSystem/>
      <WebGaming/>
      <GameConsole/>
      <Product/>
      <FavoriteChain/>
      <BlogSlider/>
      <Review/>
      <Community/>
      <Partner/>
      <Footer/>
     
    </>
  )
}

export default App
