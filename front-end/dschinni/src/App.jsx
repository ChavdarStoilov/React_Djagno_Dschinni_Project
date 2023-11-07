import Navigation from "./components/navigationBar.jsx";
import Footer from "./components/footer.jsx";
import About from "./components/aboutUs.jsx";
import OurClientsComments from "./components/OurCustomerComents.jsx";
import TopProduct from "./components/TopProduct.jsx";
import OfferProducts from "./components/OfferProducts.jsx";

function App() {
    return (
        <div>
            <Navigation />
            <OfferProducts />
            <TopProduct />
            <About />
            <OurClientsComments />
            <Footer />
        </div>
    );
}

export default App;
