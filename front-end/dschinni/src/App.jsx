import Navigation from "./components/navigationBar.jsx";
import Footer from "./components/footer.jsx";
import Products from "./components/Products.jsx";
import Contacts from "./components/Contacts.jsx";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";

function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="products/" element={<Products />}/>
                <Route path="contact/" element={<Contacts />}/>
            </Routes>
            <Footer />

        </>
    );
}

export default App;
