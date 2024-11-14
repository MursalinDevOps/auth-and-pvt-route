import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import NavBar from "./NavBar";

export default function Root() {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    )
}
