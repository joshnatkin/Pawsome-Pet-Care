import {Outlet, Link} from "react-router-dom";
import {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./css/Layout.css";

const Layout = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <Header />
            
            <Outlet />

           <Footer />
        </>
    );
};

export default Layout;