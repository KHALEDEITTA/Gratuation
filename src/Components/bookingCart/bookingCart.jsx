import { useDispatch, useSelector } from "react-redux";
// import { clearCart, decrease, deleteCart, increase } from "../features/counter/CartSlice";

import { Link } from "react-router-dom";


export default function Cart() {
    const carts = useSelector((state) => state.Cart);
    const dispatch = useDispatch();

    const totalPrice = carts.reduce((acc, cart) => {
        acc += ( cart.price ) * (cart.quantity);
        return acc;
    }, 0);

    const totalQuantity = carts.reduce((acc, cart) => {
        acc +=  cart.quantity ;
        return acc;
    }, 0);

    return (
        <>
            <div className="pt-5" >
                <h3 className="text-gray-700 text-4xl font-inter font-bold tracking-normal leading-none pl-5 ">product in card</h3>
            </div>
            {carts.length > 0 ? (
                <div className="mt-5 py-5 container mx-auto">
                    <table className="table-auto w-full border-separate border-spacing-2">
                        <thead>
                            <tr>
                                <th className="text-left py-2 px-4 bg-gray-700 rounded text-white">#</th>
                                <th className="text-left py-2 px-4 bg-gray-700 rounded text-white">Product</th>
                                <th className="text-left py-2 px-4 bg-gray-700 rounded text-white">Brand</th>
                                <th className="text-left py-2 px-4 bg-gray-700 rounded text-white">Unit Price</th>
                                <th className="text-left py-2 px-4 bg-gray-700 rounded text-white">Quantity</th>
                                <th className="text-left py-2 px-4 bg-gray-700 rounded text-white">Total Price</th>
                                <th className="text-left py-2 px-4 bg-gray-700 rounded text-white">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carts.map((cart) => (
                                <tr key={cart.id} className="hover:bg-gray-100">
                                    <td className="text-center py-2">{}</td>
                                    <td className="py-2 px-4">
                                        <img src={cart.img} alt={cart.name} className="w-16 h-16 object-cover rounded-lg shadow-md" />
                                    </td>
                                    <td className="py-2 px-4">{cart.type}</td>
                                    <td className="py-2 px-4">{cart.price} $</td>
                                    <td className="py-2 px-4 flex items-center justify-center space-x-2">
                                        <button
                                            className="text-black text-2xl  px-2 py-1 rounded-full hover:scale-150"
                                            // onClick={() => dispatch(decrease(cart))}
                                        >
                                            -
                                        </button>
                                        <div className="text-center font-semibold">{cart.quantity}</div>
                                        <button
                                            className=" text-black text-2xl  px-2 py-1 rounded-full hover:scale-150"
                                            // onClick={() => dispatch(increase(cart))}
                                        >
                                            +
                                        </button>
                                    </td>
                                    <td className="py-2 px-4">{(cart.price) * (cart.quantity)} $</td>
                                    <td className="py-2 px-4">
                                        <button
                                            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-700"
                                            // onClick={() => dispatch(deleteCart(cart))}
                                        >
                                            Delet
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <div className="text-xl font-semibold text-sky-900">
                            <h2>Total Price: {totalPrice.toFixed(2)} $</h2>
                            <h2>Total quantity: {totalQuantity}</h2>
                        </div>
                        <div className="flex gap-4">
                            <button
                                type="button"
                                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
                                // onClick={() => dispatch(clearCart())}
                            >
                                Clear Cart
                            </button>
                            <button
                                type="button"
                                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container mx-auto flex flex-col items-center justify-center py-10">
                    <div className="mb-4">
                    <h5 className="text-gray-600 text-4xl ">
                        No Product In Cart 
                    </h5>
                    </div>
                    <Link
                        to="/"
                        className="bg-sky-900 text-white px-6 py-2 rounded-lg hover:bg-sky-950 no-underline"
                    >
                        Go To Shopping
                    </Link>
                </div>
            )}
        </>
    );
}

