import logo from "../assets/logo.webp";
import { useState } from "react";
import { Link } from 'react-router-dom'

export default function Navigation() {
    const [IsLoadMenu, setIsLoadMenu] = useState(false)

    const OnMenuHandler = () => {
        if (IsLoadMenu) {
            setIsLoadMenu(false);
        }
        else {
            setIsLoadMenu(true);
        }
    }

    const OnMenuClose = () => {
        setIsLoadMenu(false);
    }


    return (
        <div className="header_section" >
            <div className="container-fluid">
                <nav className="navbar navbar-light bg-light justify-content-between">
                    { IsLoadMenu && 
                    <div id="mySidenav" className="sidenav">
                        <a
                            className="closebtn"
                            onClick={OnMenuClose}
                        >
                            &times;
                        </a>
                        <Link to="/">Home</Link>
                        <Link to="/products">Products</Link>
                        {/* <Link to="/about">About</Link> */}
                        <Link to="/contact">Contact</Link>
                    </div>
                    }
                    <div className="toggle_icon">
                        <i className="fas fa-bars"  onClick={OnMenuHandler}></i>
                    </div>
                    <div>
                        <a className="logo" href="index.html">
                            <img src={logo} className="logo" />
                        </a>
                    </div>
                    <div className="login_text">
                        <ul>
                            <li>
                                <a href="#">
                                    <i className="fas fa-user-alt"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fas fa-shopping-cart"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}
