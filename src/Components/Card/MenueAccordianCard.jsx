import { useDispatch } from "react-redux"
import { addToCart } from "../../Utils/CartSlice"

const cdn = import.meta.env.VITE_SWIGGY_IMG_URL

const MenueAccordianCard = ({ items }) => {
  const info = items?.card?.info
  const imgUrl = info?.imageId
  const dispatch = useDispatch()
 

  return (
    <div className="border-b border-gray-300 flex justify-between items-center py-6">

      
      <div className="w-[70%]">
         <div
                className={`w-4 h-4 border flex items-center justify-center rounded-sm
                ${info?.isVeg ? "border-green-600" : "border-red-600"}`}
            >
                <div
                className={`w-2 h-2 rounded-full
                ${info?.isVeg ? "bg-green-600" : "bg-red-600"}`}
                ></div>
        </div>

        <h1 className="font-bold text-lg">
          {info?.name}
        </h1>

        <p className="font-semibold mt-1">
          ₹{(info?.defaultPrice || info?.price) / 100}
        </p>

        {info?.ratings?.aggregatedRating?.rating && (
          <p className="text-green-600 font-semibold mt-1 flex gap-1">
            <img src="/greenStar.svg" alt="" />
             {info?.ratings?.aggregatedRating?.rating}
          </p>
        )}

        <p className="line-clamp-2 text-gray-500 mt-2">
          {info?.description}
        </p>

      </div>

      {/* Right Side */}
      <div className="relative">

        {imgUrl && (
          <img
            className="w-[140px] h-[120px] object-cover rounded-2xl"
            src={cdn + imgUrl}
            alt={info?.name}
          />
        )}

        <button onClick={() => {
          dispatch(addToCart(info))
        }} 
        className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 bg-white border shadow-md px-6 py-1 rounded-lg font-bold text-green-600"
        >
          ADD
        </button>

      </div>

    </div>
  )
}

export default MenueAccordianCard