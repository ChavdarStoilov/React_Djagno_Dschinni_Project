import Navigation from "./components/navigationBar.jsx";
import Footer from "./components/footer.jsx";
import About from "./components/aboutUs.jsx";
import OurClientsComments from "./components/OurCustomerComents.jsx";
import ProductsMain from "./components/ProductsMain.jsx";

function App() {
    return (
        <>
            <Navigation />
            <ProductsMain />
            <About />
            <OurClientsComments />
            <Footer />
        </>
    );
}

export default App;
