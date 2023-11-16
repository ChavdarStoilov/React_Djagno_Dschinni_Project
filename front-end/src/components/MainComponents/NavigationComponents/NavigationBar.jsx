import logo from "../../../assets/logo.webp";
import { useState } from "react";
import UserModal from "../../UserComponents/UserModal";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import ShoppingCartModal from "../../ShoppingComponents/ShoppingCartModal";
import AuthMenu from "./AuthMenu";

export default function Navigation({
    ordering
}) {
    const [showUserModal, setShowUserModal] = useState(false);
    const [showShoppingCartModal, setShoppingCartModal] = useState(false);
    const [Typemodal, setTypeModal] = useState();

    const handleCloseUserModal = () => setShowUserModal(false);
    
    const handleShowUserModal = (e) => {
        setTypeModal(e.target.textContent);
        setShowUserModal(true);
    };

    const handleCloseShoppingCartModal = () => setShoppingCartModal(false);
    const handleShowShoppingCartModal = () => setShoppingCartModal(true);

   

    return (
        <>
            {showUserModal && (
                <UserModal
                    showUserModal={handleShowUserModal}
                    closeUerModal={handleCloseUserModal}
                    type={Typemodal}
                />
            )}

            {showShoppingCartModal && (
                <ShoppingCartModal
                    showCartModal={handleShowShoppingCartModal}
                    closeCartModal={handleCloseShoppingCartModal}
                    ordering={ordering}

                />
            )}

            <div className="header_section">
                <div className="container-fluid">
                    <nav className="navbar navbar-light bg-light justify-content-between">
                        <div>
                            <Link className="logo" to="/">
                                <img src={logo} className="logo" />
                            </Link>
                        </div>
                        <Menu />
                        <AuthMenu 
                            showUserModal = {handleShowUserModal}
                            ShowShoppingModal = {handleShowShoppingCartModal}
                        />
                    </nav>
                </div>
            </div>
        </>
    );
}
