import { useEffect, useState} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Gallery,Sale,Search,Contact,Home, Login, SignUp } from './pages';
import { BasicLayout, UserLayout } from './layout';
import Product from './pages/Product';
import Cart from './pages/Cart';
import { useDispatch } from 'react-redux';
import { addUser } from './redux/userSlicer';
import { getUserDetails } from './redux/userDetailSlicer';
import axios from 'axios';
import { path } from './constants';
import { addProducts } from './redux/productSlice';
import Loading from './components/Loading';
import { getCart } from './redux/cartSlice';
import CheckoutSuccess from './pages/CheckoutSucces';
import NotFound from './pages/NotFound';
import UserInfo from './pages/UserInfo';

function App() { 
  // React Hooks
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  // useEffect
  useEffect(() => {
    // Checking if user has logged in already and getting the details
    const users = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
    if(users){
      try{
        dispatch(getUserDetails(users))
        .then(data => 
          {
            if(data.meta.requestStatus !== 'fulfilled'){
              dispatch(addUser(null))
            }else{
              dispatch(addUser(users))
            }
          }
          )
        // Getting user cart info
        dispatch(getCart(users))
      }catch(e){
        throw new Error({error: 'Something went wrong!'})
      }
    }

    // Getting all products
    async function getProducts (){
      try{
        const products = await axios.get(`${path}/product`)
        dispatch(addProducts(products.data))
        setLoading(false)
      }catch(e){
        setLoading(false)
      }
    }
    getProducts()
  },[dispatch])

  return (
   <BrowserRouter>
   {
      loading ?
      <Loading words={'Loading...'}/>:
      <Routes>
        <Route path='/' element={<BasicLayout setResult={setResult}/>}>
          <Route path='/'   element={<Home />}/>
          <Route path='gallery' element={<Gallery/>} />
          <Route path='contact' element={<Contact/>}/>
          <Route path='detail' element={<UserInfo/>}/>
          <Route path='sale' element={<Sale/>}/>
          <Route path='product/:productId' element={<Product/>}/>
          <Route path='search' element={<Search result={result}/>}/>
          <Route path='cart' element={<Cart/>}/>
        </Route>
        <Route path='/user' element={<UserLayout/>}>
          <Route path='signup' element={<SignUp/>} />
          <Route path='login' element={<Login/>} />
          <Route path='*' element={<NotFound/>}/>
        </Route>
        <Route path='/checkout-success' element={<CheckoutSuccess/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
   }
   </BrowserRouter>
  );
}

export default App;
