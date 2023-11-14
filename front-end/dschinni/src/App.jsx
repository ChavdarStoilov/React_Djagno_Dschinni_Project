import Navigation from "./components/NavigationBar";
import Products from "./components/Products";
import Contacts from "./components/Contacts";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./components/HomePage";
import { AnimatePresence } from "framer-motion";
import About from "./components/aboutUs";
import { AuthContext } from "./contexts/AuthContext";
import { useLocalStorage } from "./hooks/CustomLocalUse"

function App() {
    const location = useLocation();
    const [auth, setAuth] = useLocalStorage('auth', {});

    const UserLoginHendler = (authData) => {
        setAuth(authData);
    };

    const UserLogoutHendler = () => {
        setAuth({})
    };

    console.log(auth)
    return (
        <AuthContext.Provider value={{user: auth, UserLoginHendler, UserLogoutHendler }}>
            <AnimatePresence>
                <Navigation />
                <Routes location={location} key={location.pathname}>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="products/" element={<Products />} />
                    <Route exact path="about/" element={<About />} />
                    <Route exactpath="contact/" element={<Contacts />} />
                </Routes>
            </AnimatePresence>
        </AuthContext.Provider>
    );
}

export default App;
