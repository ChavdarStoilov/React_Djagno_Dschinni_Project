import Navigation from "./assets/navigationBar";
import Footer from "./assets/footer";
import OurClientsComnetars from "./assets/ourClientsComentars";
import About from './assets/aboutUs.jsx'

export default function HomePage() {
  return (
    <div>
      <Navigation />
      <div className="banner_section layout_padding">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6">
                    <h1 className="banner_taital">
                      Beauty <br />
                      Kit
                    </h1>
                    <p className="banner_text">
                      Ncididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo
                    </p>
                    <div className="read_bt">
                      <a href="#">Buy Now</a>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="banner_img">
                      <img src="images/banner-img.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6">
                    <h1 className="banner_taital">
                      Beauty <br />
                      Kit
                    </h1>
                    <p className="banner_text">
                      Ncididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo
                    </p>
                    <div className="read_bt">
                      <a href="#">Buy Now</a>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="banner_img">
                      <img src="images/banner-img.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6">
                    <h1 className="banner_taital">
                      Beauty <br />
                      Kit
                    </h1>
                    <p className="banner_text">
                      Ncididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo
                    </p>
                    <div className="read_bt">
                      <a href="#">Buy Now</a>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="banner_img">
                      <img src="images/banner-img.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6">
                    <h1 className="banner_taital">
                      Beauty <br />
                      Kit
                    </h1>
                    <p className="banner_text">
                      Ncididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo
                    </p>
                    <div className="read_bt">
                      <a href="#">Buy Now</a>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="banner_img">
                      <img src="images/banner-img.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="product_taital">Our Products</h1>
              <p className="product_text">
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation
              </p>
            </div>
          </div>
          <div className="product_section_2 layout_padding">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="product_box">
                  <h4 className="bursh_text">Beauty Bursh</h4>
                  <p className="lorem_text">
                    incididunt ut labore et dolore magna aliqua. Ut enim{" "}
                  </p>
                  <img src="images/img-1.png" className="image_1" />
                  <div className="btn_main">
                    <div className="buy_bt">
                      <ul>
                        <li className="active">
                          <a href="#">Buy Now</a>
                        </li>
                        <li>
                          <a href="#">Buy Now</a>
                        </li>
                      </ul>
                    </div>
                    <h3 className="price_text">Price $30</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product_box">
                  <h4 className="bursh_text">Beauty Bursh</h4>
                  <p className="lorem_text">
                    incididunt ut labore et dolore magna aliqua. Ut enim{" "}
                  </p>
                  <img src="images/img-2.png" className="image_1" />
                  <div className="btn_main">
                    <div className="buy_bt">
                      <ul>
                        <li className="active">
                          <a href="#">Buy Now</a>
                        </li>
                        <li>
                          <a href="#">Buy Now</a>
                        </li>
                      </ul>
                    </div>
                    <h3 className="price_text">Price $30</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product_box">
                  <h4 className="bursh_text">Beauty Bursh</h4>
                  <p className="lorem_text">
                    incididunt ut labore et dolore magna aliqua. Ut enim{" "}
                  </p>
                  <img src="images/img-3.png" className="image_1" />
                  <div className="btn_main">
                    <div className="buy_bt">
                      <ul>
                        <li className="active">
                          <a href="#">Buy Now</a>
                        </li>
                        <li>
                          <a href="#">Buy Now</a>
                        </li>
                      </ul>
                    </div>
                    <h3 className="price_text">Price $30</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product_box">
                  <h4 className="bursh_text">Beauty Bursh</h4>
                  <p className="lorem_text">
                    incididunt ut labore et dolore magna aliqua. Ut enim{" "}
                  </p>
                  <img src="images/img-4.png" className="image_1" />
                  <div className="btn_main">
                    <div className="buy_bt">
                      <ul>
                        <li className="active">
                          <a href="#">Buy Now</a>
                        </li>
                        <li>
                          <a href="#">Buy Now</a>
                        </li>
                      </ul>
                    </div>
                    <h3 className="price_text">Price $30</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="product_box">
                  <h4 className="bursh_text">Beauty Bursh</h4>
                  <p className="lorem_text">
                    incididunt ut labore et dolore magna aliqua. Ut enim{" "}
                  </p>
                  <img src="images/img-9.png" className="image_1" />
                  <div className="btn_main">
                    <div className="buy_bt">
                      <ul>
                        <li className="active">
                          <a href="#">Buy Now</a>
                        </li>
                        <li>
                          <a href="#">Buy Now</a>
                        </li>
                      </ul>
                    </div>
                    <h3 className="price_text">Price $30</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product_box">
                  <h4 className="bursh_text">Beauty Bursh</h4>
                  <p className="lorem_text">
                    incididunt ut labore et dolore magna aliqua. Ut enim{" "}
                  </p>
                  <img src="images/img-10.png" className="image_1" />
                  <div className="btn_main">
                    <div className="buy_bt">
                      <ul>
                        <li className="active">
                          <a href="#">Buy Now</a>
                        </li>
                        <li>
                          <a href="#">Buy Now</a>
                        </li>
                      </ul>
                    </div>
                    <h3 className="price_text">Price $30</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product_box">
                  <h4 className="bursh_text">Beauty Bursh</h4>
                  <p className="lorem_text">
                    incididunt ut labore et dolore magna aliqua. Ut enim{" "}
                  </p>
                  <img src="images/img-11.png" className="image_1" />
                  <div className="btn_main">
                    <div className="buy_bt">
                      <ul>
                        <li className="active">
                          <a href="#">Buy Now</a>
                        </li>
                        <li>
                          <a href="#">Buy Now</a>
                        </li>
                      </ul>
                    </div>
                    <h3 className="price_text">Price $30</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product_box">
                  <h4 className="bursh_text">Beauty Bursh</h4>
                  <p className="lorem_text">
                    incididunt ut labore et dolore magna aliqua. Ut enim{" "}
                  </p>
                  <img src="images/img-12.png" className="image_1" />
                  <div className="btn_main">
                    <div className="buy_bt">
                      <ul>
                        <li className="active">
                          <a href="#">Buy Now</a>
                        </li>
                        <li>
                          <a href="#">Buy Now</a>
                        </li>
                      </ul>
                    </div>
                    <h3 className="price_text">Price $30</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="seemore_bt">
              <a href="#">See More</a>
            </div>
          </div>
        </div>
      </div>
      <About />
      <OurClientsComnetars />
      <Footer />
    </div>
  );
}
