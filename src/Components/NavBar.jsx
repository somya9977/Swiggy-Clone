import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CartCard from "./Card/CartCard";

const NavBar = () => {

    const location = useSelector((store) => store.location?.data?.location)
    const cartitem = useSelector((store) => store.cart.cartItem)

    const navigate = useNavigate()

    const [showCart, SetShowCart] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)

    const truncateText = (text, maxLength) => {
        if (!text) return "Detecting location..."

        return text.length > maxLength
            ? text.slice(0, maxLength) + "..."
            : text
    }

    return (

        <nav className="shadow-lg px-4 md:px-10 py-3 bg-white relative">

            <div className="flex items-center justify-between">

                {/* LEFT SECTION */}
                <div className="flex items-center gap-3">

                    <div
                        className="h-12 w-12 cursor-pointer"
                        onClick={() => navigate("/resturant")}
                    >
                        <img
                            className="h-full w-full object-cover"
                            src="Logo/Logo.svg"
                            alt=""
                        />
                    </div>

                    <div className="hidden sm:flex gap-2 group">

                        <h1 className="font-bold group-hover:text-orange-500">
                            Other
                        </h1>

                        <p className="max-w-[180px] md:max-w-[250px] text-sm group-hover:text-gray-400">
                            {truncateText(location, 30)}
                        </p>

                    </div>

                </div>

                {/* DESKTOP MENU */}
                <div className="hidden lg:flex items-center gap-8">

                    <div className="font-bold flex items-center gap-2 cursor-pointer">
                        <img src="Logo/corporate.svg" alt="" />
                        <h1>Swiggy Corporate</h1>
                    </div>

                    <div className="font-bold flex items-center gap-2 cursor-pointer">
                        <img src="Logo/search.svg" alt="" />
                        <h1>Search</h1>
                    </div>

                    <div className="font-bold flex items-center gap-2 cursor-pointer">
                        <img src="Logo/offer.svg" alt="" />
                        <h1>Offers</h1>
                    </div>

                    <div className="font-bold flex items-center gap-2 cursor-pointer">
                        <img src="Logo/help.svg" alt="" />
                        <button>Help</button>
                    </div>

                    <div className="font-bold flex items-center gap-2 cursor-pointer">
                        <img src="Logo/signIn.svg" alt="" />
                        <h1>Sign In</h1>
                    </div>

                    {/* CART */}
                    <div
                        onMouseEnter={() => SetShowCart(true)}
                        onMouseLeave={() => SetShowCart(false)}
                        onClick={() => navigate("/cart")}
                        className="relative flex items-center cursor-pointer"
                    >

                        <FontAwesomeIcon
                            icon={faCartArrowDown}
                            className="text-black text-xl"
                        />

                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
                            {cartitem.length}
                        </span>

                        <button className="ml-2 font-bold">
                            Cart
                        </button>

                        {showCart && (
                            <div className="absolute top-12 right-0 bg-white shadow-xl rounded-xl p-4 h-70 w-90 z-50">
                                <CartCard />
                            </div>
                        )}

                    </div>

                </div>

                {/* MOBILE MENU BUTTON */}
                <button
                    className="lg:hidden text-2xl"
                    onClick={() => setMobileMenu(!mobileMenu)}
                >
                    <FontAwesomeIcon
                        icon={mobileMenu ? faXmark : faBars}
                    />
                </button>

            </div>

            {/* MOBILE MENU */}

            {mobileMenu && (

                <div className="lg:hidden flex flex-col gap-5 mt-5 pb-5">

                    <div className="font-bold flex items-center gap-2">
                        <img src="Logo/corporate.svg" alt="" />
                        <h1>Swiggy Corporate</h1>
                    </div>

                    <div className="font-bold flex items-center gap-2">
                        <img src="Logo/search.svg" alt="" />
                        <h1>Search</h1>
                    </div>

                    <div className="font-bold flex items-center gap-2">
                        <img src="Logo/offer.svg" alt="" />
                        <h1>Offers</h1>
                    </div>

                    <div className="font-bold flex items-center gap-2">
                        <img src="Logo/help.svg" alt="" />
                        <h1>Help</h1>
                    </div>

                    <div className="font-bold flex items-center gap-2">
                        <img src="Logo/signIn.svg" alt="" />
                        <h1>Sign In</h1>
                    </div>

                    <div
                        onClick={() => navigate("/cart")}
                        className="relative flex items-center gap-3 font-bold"
                    >

                        <div className="relative">

                            <FontAwesomeIcon
                                icon={faCartArrowDown}
                                className="text-black text-xl"
                            />

                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
                                {cartitem.length}
                            </span>

                        </div>

                        <button>
                            Cart
                        </button>

                    </div>

                </div>

            )}

        </nav>
    )
}

export default NavBar