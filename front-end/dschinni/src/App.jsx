import Navigation from "./components/navigationBar.jsx";
import Products from "./components/Products.jsx";
import Contacts from "./components/Contacts.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import { AnimatePresence } from "framer-motion";
import About from "./components/aboutUs.jsx";

function App() {
    const location = useLocation();

    return (
        <>
            <AnimatePresence>
                <Navigation />
                <Routes location={location} key={location.pathname}>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="products/" element={<Products />} />
                    <Route exact path="about/" element={<About />} />
                    <Route exactpath="contact/" element={<Contacts />} />
                </Routes>
            </AnimatePresence>
        </>
    );
}

export default App;
