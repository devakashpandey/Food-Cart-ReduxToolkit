import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import CartItem from "./CartItem";
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";

const Cart = () => {
  const [toggle, setToggle] = useState(false);
  const cartItems = useSelector((item) => item.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const total = cartItems.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-[24vw] h-full bg-white border-l-2 ${
          toggle ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-20`}
      >
        <div className="flex items-center w-full justify-between mb-3 px-4 py-3 ">
          <h3 className="font-semibold text-[1.3rem] ">My Orders</h3>
          <IoClose
            onClick={() => setToggle(!toggle)}
            className="cursor-pointer text-[1.3rem]"
          />
        </div>

        <hr />

        <div className=" px-4 py-2">
          <CartItem />
        </div>

        <div className=" absolute bottom-0 mb-3 w-full px-6">
          <div className=" flex flex-col gap-4">
            {" "}
            <h3 className="font-semibold">Items: {totalQty} </h3>
            <h3 className="mb-2 font-semibold">Total Amount: {total}</h3>
          </div>
          <hr />
          <button className="px-3 py-2 bg-green-500 rounded-md text-[14px] font-semibold text-white w-full mt-4">
            Checkout
          </button>
        </div>
      </div>
      <div
        onClick={() => setToggle(!toggle)}
        className={`bg-white rounded-full shadow-md fixed bottom-10 right-7 h-16 w-16 flex items-center justify-center cursor-pointer hover:-translate-y-1.5 ${
          totalQty > 0 && "animate-bounce"
        } transition-all duration-200`}
      >
        {" "}
        <FaCartArrowDown className="text-[2rem]" />
      </div>
    </>
  );
};

export default Cart;
