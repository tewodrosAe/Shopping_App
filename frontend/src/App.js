import { useEffect, useState} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Gallery,Sale,Search,Contact,Home, Login, SignUp } from './pages';
import { BasicLayout, UserLayout } from './layout';
import Product from './pages/Product';
import Cart from './pages/Cart';
import { useDispatch } from 'react-redux';
import { addUser } from './redux/userSlicer';
import { addUserDetail, getUserDetails } from './redux/userDetailSlicer';
import axios from 'axios';
import { path } from './constants';
import { addProducts } from './redux/productSlice';
import Loading from './components/Loading';
function App() { 
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    // Checking if user has logged in already and getting the details
    const users = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
    if(users){
      dispatch(getUserDetails(users.token))
      dispatch(addUser(users))
    }

    // Getting all products
    async function getProducts (){
      try{
        const products = await axios.get(`${path}/product`)
        dispatch(addProducts(products.data))
        setLoading(false)
      }catch(e){
        console.log('something went wrong')
      }
    }
    getProducts()
  },[])
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
          <Route path='sale' element={<Sale/>}/>
          <Route path='product/:productId' element={<Product/>}/>
          <Route path='search' element={<Search result={result}/>}/>
          <Route path='cart' element={<Cart/>}/>
        </Route>
        <Route path='/user' element={<UserLayout/>}>
          <Route path='signup' element={<SignUp/>} />
          <Route path='login' element={<Login/>} />
        </Route>
      </Routes>
   }
   </BrowserRouter>
  );
}

export default App;
