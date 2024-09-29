import React from "react";
import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decreaseQty,
} from "../redux/slices/CartSlice";

const CartItem = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="mb-4">
      {cartItems.map(({ id, img, price, name, qty }) => (
        <div
          className="w-full shadow-md px-3 py-4 rounded-md flex items-center border border-slate-100 gap-3 mt-3 "
          key={id}
        >
          <img src={img} alt="" className="w-[4rem] h-[4rem] " />
          <div className="flex flex-col gap-2 w-full">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-[0.9em] w-[80%]">{name}</h3>
              <MdDelete
                onClick={() => handleDelete(id)}
                className="text-red-500 text-[1.2rem] cursor-pointer"
              />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-green-500">₹{price}</h3>
              <p className="flex items-center gap-2.5">
                <span
                  onClick={() => dispatch(decreaseQty(id))}
                  className="border px-3 py-0 rounded-lg cursor-pointer transition-all duration-200 hover:bg-slate-100"
                >
                  -
                </span>
                <span>{qty}</span>
                <span
                  onClick={() => dispatch(incrementQty(id))}
                  className="border px-3 py-0 rounded-lg cursor-pointer transition-all duration-200 hover:bg-slate-100"
                >
                  +
                </span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
