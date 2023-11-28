// Importing the components of Home page
import {useSelector} from 'react-redux'
import HeroSection from '../components/HeroSection'
import ProductSection from '../components/ProductSection';
 
const Home = () =>{
    const {products} = useSelector(state => state.product)
    return( 
        <div className="home" >
            <HeroSection products={products}/>
            <ProductSection products={products} />
        </div>
    )
}

export default Home