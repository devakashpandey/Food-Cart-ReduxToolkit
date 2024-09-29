import React from "react";
import FoodData from "../data/FoodData";
import { IoMdStar } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";
import { useSelector } from "react-redux";

const FoodCard = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);

  const filteredFood = FoodData.filter((food) => {
    if (category === "All") {
      return food.name.toLowerCase().includes(search);
    } else {
      return (
        category === food.category && food.name.toLowerCase().includes(search)
      );
    }
  });

  // const filteredFood = FoodData?.filter((food) =>
  //   food?.name?.toLowerCase().includes(search)
  // );

  return (
    <>
      <div className="p-6 grid grid-cols-4 gap-9 place-content-center w-full items-center place-self-center place-items-start justify-center">
        {filteredFood.map(({ id, img, name, price, rating, desc }) => (
          <div
            className="w-[18rem] h-[26rem] bg-slate-50 flex flex-col gap-2 rounded-md shadow-lg p-5 transition-all duration-300 hover:scale-105 ease-in-out"
            key={id}
          >
            <img src={img} alt={name} className="w-full h-[200px] " />
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-[15px]">{name}</h3>
                <p className="text-green-600 font-semibold">₹{price}</p>
              </div>
              <p>{desc.slice(0, 50)}</p>
              <div className="flex w-full justify-between items-center">
                <span className="flex items-center gap-1">
                  <IoMdStar className="text-[orange] " />
                  <p>{rating}</p>
                </span>
                <button
                  onClick={() =>
                    dispatch(
                      addToCart({ id, name, price, rating, qty: 1, img })
                    )
                  }
                  className="px-3 py-2 bg-green-500 rounded-md text-[14px] font-semibold text-white"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FoodCard;
