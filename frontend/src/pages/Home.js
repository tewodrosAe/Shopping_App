// Importing the components of Home page
import HeroSection from '../components/HeroSection'
import ProductSection from '../components/ProductSection';
import Comments from '../components/Comments';

 
const Home = ({isDark}) =>{
    return(
        <div className="home" >
            <HeroSection/>
            <ProductSection isDark={isDark}/>
            <Comments isDark={isDark}/>
        </div>
    )
}

export default Home