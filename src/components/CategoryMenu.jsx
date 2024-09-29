import React, { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { useDispatch } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";
import { useSelector } from "react-redux";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const filterCategory = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((item) => item.category)),
    ]; // we use ... to convert object to array
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    filterCategory();
  }, []);

  const dispatch = useDispatch();

  const selectedCategory = useSelector((item) => item.category.category); // for show which cat is active or selected

  return (
    <>
      <div className="flex flex-col gap-3 p-6">
        <div className="flex flex-col gap-4">
          <h3 className="text-[1.6rem] font-semibold">Explore Best Foods</h3>

          <div className="flex items-center gap-5 text-[1rem]">
            <p
              className={`px-5 py-1 rounded-md bg-slate-100 text-black  cursor-pointer hover:bg-green-500 hover:text-white transition-all duration-200 ${
                selectedCategory === "All" ? "bg-green-600 text-white" : ""
              }`}
              onClick={() => dispatch(setCategory("All"))}
            >
              All
            </p>
            {categories.map((category, index) => (
              <p
                className={`px-5 py-1 rounded-md bg-slate-100  cursor-pointer hover:bg-green-500 hover:text-white transition-all duration-200 ${
                  selectedCategory === category ? "bg-green-600 text-white" : ""
                }`}
                key={index}
                onClick={() => dispatch(setCategory(category))}
              >
                {category}
              </p>
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default CategoryMenu;
