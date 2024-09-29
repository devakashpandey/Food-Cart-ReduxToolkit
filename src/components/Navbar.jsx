import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <>
      <nav className="flex itemscenter w-full justify-between pt-4 pr-6 pl-6 pb-4 shadow-md">
        <div>
          <h2 className="font-bold">FOOD</h2>
          <h3 className="text-sm">{new Date().toUTCString().slice(0, 16)}</h3>
        </div>
        <div>
          <input
            type="search"
            className="border outline-none p-2 rounded-md w-80"
            placeholder="Search"
            name="search"
            id="search"
            onChange={(e) => dispatch(setSearch(e.target.value))}
            autoComplete="off"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
