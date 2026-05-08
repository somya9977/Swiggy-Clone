import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const location = useSelector((store) => store.location?.data?.location)
    const navigate = useNavigate()

    const truncateText = (text, maxLength) => {
            if (!text) return "Detecting location...";

            return text.length > maxLength ? text.slice(0, maxLength) + "..."
                : text;
            }


  return (
    <nav className="flex py-3  h-21 gap-12 items-center shadow-lg">
        <div className="flex items-center gap-5">
            <div  className="h-13 w-13 ml-42 cursor-pointer">
                <img onClick={() => navigate("/resturant")} className="h-full w-full object-cover" src="Logo/Logo.svg" alt="" />
            </div>

            <div className="flex gap-2 group ">
                <h1 className="font-bold group-hover:text-orange-500 ">Other </h1>
                <p className="w-70 group-hover:text-gray-400"> {truncateText(location, 30)}</p>
            </div>

        </div>



        <div className="flex w-full gap-16 ">

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
                <h1>
                    Offers
                </h1>
            </div>

            <div className="font-bold flex items-center gap-2">
                <img src="Logo/help.svg" alt="" />
                <button>
                    Help
                </button>
            </div>

            <div className="font-bold flex items-center gap-2">
                <img src="Logo/signIn.svg" alt="" />
                <h1>
                    SignIn
                </h1>
            </div>
            
                <div className="relative flex items-center">
    
                        
                        <FontAwesomeIcon icon={faCartArrowDown} className="text-black text-xl" />

                    
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
                            0
                        </span>

                        
                        <button className="ml-2 font-bold">
                            Cart
                        </button>

                </div>

        </div>
    </nav>
  )
}

export default NavBar