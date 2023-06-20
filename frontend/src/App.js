import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Gallery from './pages/Gallery';
 
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

      <Routes>
        <Route path='/' element={<Home /* isDark={isDark} *//>}/>
        <Route path='/gallery' element={<Gallery/>} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
