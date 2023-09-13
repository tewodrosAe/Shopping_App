import { Outlet } from "react-router-dom"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

export const BasicLayout = ({setResult}) =>{
    return (
    <>
      <Nav  setResult={setResult}/>
      <Outlet/>
      <Footer/>
    </>)
  }

export const UserLayout = () => {
    return(
    <Outlet/>
    )
  }