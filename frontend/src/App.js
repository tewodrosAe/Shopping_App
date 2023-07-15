import { useState,useReducer,useEffect} from 'react';
import {BrowserRouter,Routes,Route, useLocation } from 'react-router-dom'
import { Gallery,Sale,Search,Contact,Home } from './pages';
import Nav from './components/Nav';
import Footer from './components/Footer';

 
function App() {
  // Dark theme function
  /* const[isDark,setIsDark] = useState(false)
  const handleTheme = () => {
    setIsDark(prev => !prev)
  } */
  const [search, setSearch] = useState('')
  const [result, setResult] = useState('')
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  let location = useLocation();

  useEffect(() => {
    // Google Analytics
    console.log('change')
  }, [location]);

  return (
   <BrowserRouter>
    {
      // light and dark theme 
    }

    {/* <div className={isDark ? 'dark-theme':'light-theme'}>
      <div className="theme-icon" onClick={handleTheme}>
        <img src={isDark ? "theme/Light.png" : "theme/Dark.png"} alt="theme" />
      </div> */}
      <Nav search={search} setSearch={setSearch} setResult={setResult}/>
      <Routes>
        <Route path='/' element={<Home /* isDark={isDark} *//>}/>
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/sale' element={<Sale/>}/>
        <Route path='/search' element={<Search result={result}/>}/>
      </Routes>
      <Footer/>
   </BrowserRouter>
  );
}

export default App;
