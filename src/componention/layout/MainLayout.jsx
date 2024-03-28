import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";

const MainLayout=()=>{
    return (
        <div className="layout">
            <Navbar/>
            <Outlet/>
        </div>
    )
}

export default MainLayout;