import { useSelector } from "react-redux"
const cdn = import.meta.env.VITE_SWIGGY_IMG_URL

const CartCard = () => {

    const cartItems = useSelector(
        (store) => store.cart.cartItem
    )

    const lastItem = cartItems[cartItems.length - 1]

    const subTotal = cartItems.reduce((acc, item) => {
        return acc + ((item.price || item.defaultPrice) * item.quantity)
    }, 0)

    if (!lastItem) {
        return (
            <div className="flex items-center justify-center h-full text-gray-500">
                Cart is Empty
            </div>
        )
    }

    return (
        <div className="p-4">

            {/* Top Section */}
            <div className="flex gap-4 border-b pb-4">

                <img
                    src={cdn + lastItem.imageId}
                    alt=""
                    className="w-18 h-18 rounded-xl object-cover"
                />

                <div className="flex flex-col justify-center">

                    <h1 className="font-bold text-lg">
                        KFC
                    </h1>

                    <p className="text-gray-500 text-sm">
                        {lastItem?.restaurantName || "Vijay Nagar"}
                    </p>

                </div>
            </div>

            {/* Item Section */}
            <div className="mt-5">

                <div className="flex justify-between items-center">

                    <div>
                        <h2 className="font-semibold text-[15px]">
                            {lastItem.name}
                        </h2>

                        <p className="text-sm text-gray-500 mt-1">
                            x{lastItem.quantity}
                        </p>
                    </div>

                    <p className="font-bold">
                        ₹{((lastItem.price || lastItem.defaultPrice) * lastItem.quantity) / 100}
                    </p>

                </div>
            </div>

            {/* Sub Total */}
            <div className="border-t mt-6 pt-4 flex justify-between items-center">

                <h1 className="font-bold text-lg">
                    Sub Total
                </h1>

                <p className="font-bold text-lg">
                    ₹{subTotal / 100}
                </p>

            </div>

        </div>
    )
}

export default CartCard