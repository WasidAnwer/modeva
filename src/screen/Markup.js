import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";


function Markup() {
    return (
        <>
            <Header />
            {/* <Nav /> */}
            <Outlet />

        </>
    )
}
export default Markup;