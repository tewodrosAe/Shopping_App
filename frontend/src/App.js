import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import {useState} from 'react';
import HeroSection from './components/HeroSection'
import ProductSection from './components/ProductSection';
import Comments from './components/Comments';
import Footer from './components/Footer';

function App() {
  const[isDark,setIsDark] = useState(false)
  return (
    <>
      <Nav isDark={isDark}/>
      <HeroSection/>
      <ProductSection/>
      <Comments/>
      <Footer/>
    </>
  );
}

export default App;
