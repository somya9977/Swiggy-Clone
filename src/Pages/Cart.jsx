import { useDispatch, useSelector } from "react-redux"
import NavBar from "../Components/NavBar"
import { addToCart, decreaseQuantity } from "../Utils/CartSlice"

const cdn = import.meta.env.VITE_SWIGGY_IMG_URL

const Cart = () => {

    const dispatch = useDispatch()

    const cartitem = useSelector((store) => store.cart.cartItem )

   const subTotal = cartitem.reduce((acc, item) => {
                 return acc + ((item.price || item.defaultPrice) * item.quantity)/100
        }, 0)

    // let total = 0
    // console.log(total)

    return (
        <div className="bg-gray-100 min-h-screen">

            <NavBar />

            <div className="w-[800px] mx-auto mt-10 bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-8">

                <h1 className="text-3xl font-bold border-b pb-5">
                    Your Cart
                </h1>

                {cartitem.length === 0 ? (

                    <div className="flex justify-center items-center h-60 text-gray-500 text-xl">
                        Cart is Empty
                    </div>

                ) : (

                    <div className="mt-8 flex flex-col gap-6">

                        {cartitem.map((item) => {
                            // total += ((item.price || item.defaultPrice) / 100) * item.quantity

                            return(
                             
                            <div
                                key={item.id}
                                className="flex items-center justify-between border-b pb-5"
                            >

                                
                                <div className="flex gap-5">

                                    <img
                                        src={cdn + item.imageId}
                                        alt=""
                                        className="w-28 h-28 rounded-2xl object-cover"
                                    />

                                    <div className="flex flex-col justify-center">

                                        <h1 className="font-bold text-xl">
                                            {item.name}
                                        </h1>

                                        <p className="text-gray-500 mt-2 text-sm w-80 line-clamp-2">
                                            {item.description}
                                        </p>

                                        <p className="font-bold mt-3">
                                            ₹{((item.price || item.defaultPrice) / 100)}
                                        </p>

                                    </div>
                                </div>

                                
                                <div className="flex items-center gap-4 border rounded-xl px-4 py-2">

                                    <button
                                        onClick={() => dispatch(decreaseQuantity(item.id))}
                                        className="text-2xl font-bold"
                                    >
                                        -
                                    </button>

                                    <span className="font-bold text-lg">
                                        {item.quantity}
                                    </span>

                                    <button
                                        onClick={() => dispatch(addToCart(item))}
                                        className="text-2xl font-bold text-green-600"
                                    >
                                        +
                                    </button>

                                </div>

                            </div>
                        )}
                        )}

                        
                        <div className="flex justify-between items-center mt-6 border-t pt-6">

                            <h1 className="text-2xl font-bold">
                                Sub Total
                            </h1>

                            <p className="text-2xl font-bold">
                                ₹{subTotal}
                            </p>

                        </div>

                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart