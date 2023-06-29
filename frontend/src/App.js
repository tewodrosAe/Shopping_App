import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Sale from './pages/Sale';
import Nav from './components/Nav';
 
function App() {
  // Dark theme function
  /* const[isDark,setIsDark] = useState(false)
  const handleTheme = () => {
    setIsDark(prev => !prev)
  } */

  return (
   <BrowserRouter>
    {
      // light and dark theme 
    }

    {/* <div className={isDark ? 'dark-theme':'light-theme'}>
      <div className="theme-icon" onClick={handleTheme}>
        <img src={isDark ? "theme/Light.png" : "theme/Dark.png"} alt="theme" />
      </div> */}
      <Nav/>
      <Routes>
        <Route path='/' element={<Home /* isDark={isDark} *//>}/>
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/sale' element={<Sale/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
