// Importing the components of Home page
import {useSelector} from 'react-redux'
import HeroSection from '../components/HeroSection'
import ProductSection from '../components/ProductSection';
import Comments from '../components/Comments';

 
const Home = () =>{
    const {products} = useSelector(state => state.product)
    return( 
        <div className="home" >
            <HeroSection products={products}/>
            <ProductSection products={products} />
            <Comments />
        </div>
    )
}

export default Home