import { useEffect, useState} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Gallery,Sale,Search,Contact,Home, Login, SignUp } from './pages';
import { BasicLayout, UserLayout } from './layout';
import Product from './pages/Product';
import Cart from './pages/Cart';
import { useDispatch } from 'react-redux';
import { addUser } from './redux/userSlicer';
import { addUserDetail } from './redux/userDetailSlicer';
function App() { 
  const [result, setResult] = useState('')
  const dispatch = useDispatch()
  useEffect(() => {
    const users = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
    const userDetail = localStorage.getItem('userdetail')? JSON.parse(localStorage.getItem('userdetail')) : null
    if(users){
      dispatch(addUser(users))
      dispatch(addUserDetail(userDetail))
    }
  },[])

  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<BasicLayout setResult={setResult}/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='gallery' element={<Gallery/>} />
          <Route path='contact' element={<Contact/>}/>
          <Route path='sale' element={<Sale/>}/>
          <Route path='product/:id' element={<Product/>}/>
          <Route path='search' element={<Search result={result}/>}/>
          <Route path='cart' element={<Cart/>}/>
        </Route>
        <Route path='/user' element={<UserLayout/>}>
          <Route path='signup' element={<SignUp/>} />
          <Route path='login' element={<Login/>} />
        </Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
