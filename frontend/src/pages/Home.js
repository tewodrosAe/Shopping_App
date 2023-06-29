import {useState} from 'react';

// Importing the components of Home page
import Nav from '../components/Nav'
import HeroSection from '../components/HeroSection'
import ProductSection from '../components/ProductSection';
import Comments from '../components/Comments';
import Footer from '../components/Footer';

const Home = ({isDark}) =>{
    
    return(
        <div className="home">
            <HeroSection/>
            <ProductSection isDark={isDark}/>
            <Comments isDark={isDark}/>
            <Footer isDark={isDark}/>
        </div>
    )
}

export default Home