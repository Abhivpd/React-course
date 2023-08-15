import { useDispatch, useSelector } from "react-redux";
import MenuList from "./MenuList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    const cartItems = useSelector(store => store.cart.items);

    return (
        <div className="p-4 w-6/12 mx-auto flex flex-col items-center">
            <h1 className="text-center font-bold text-2xl">Cart</h1>
            <MenuList items={cartItems} />
            {cartItems.length === 0 && <h1 className="my-4 font-bold">Cart is empty, please add some items!!</h1>}
            {cartItems.length !== 0 && <button type="button" onClick={handleClearCart} className="border border-black p-2 m-auto">Clear Cart</button>}
        </div>
    )
}

export default Cart;