import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function Root() {
    return (
        <div>
             <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    )
}
