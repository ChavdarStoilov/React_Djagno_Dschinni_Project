import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const Menu = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Switch location={location} key={location.pathname}>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </Switch>
        </AnimatePresence>
    );
};


export default Menu();