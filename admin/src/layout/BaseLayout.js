import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

export const BasicLayout = () =>{
    return(
        <>
            <Nav/>
            <div className='ml-60 px-20 py-10 bg-background min-h-screen'>
                <Outlet/>
            </div>
        </>
    )
}