import React from "react";
import Megamenu from "../../img/mega-menu.svg";
import Cart from "../../img/cart.svg";
class Header2 extends React.Component {
  render() {
    return (
      <div className="text-white bg-[#EE2E23] flex justify-center p-2 align-middle">
        <div className="font-[700] italic text-4xl px-5">Sendo</div>
        <div className="flex align-middle h-full">
          <div className="h-full align-middle">
            <img src={Megamenu} className="px-5 py-2" />
          </div>
          <div className="pr-full">
            <form className="pr-full">
              <input
                type="search"
                id="default-search"
                className="block p-2  pr-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:placeholder-gray-400 dark:text-white focus:outline-none"
                placeholder="Search..."
                required
              />
            </form>
          </div>
          <button
            type="submit"
            className="p-2 ml-2 text-sm font-medium text-white bg-white rounded-lg border hover:bg-gray-400 focus:outline-none dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="black"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
        <div className="px-5">
          <ul className="flex align-middle h-full">
            <li>
              <img src={Cart} className="py-2" />
            </li>
            <li className="px-5">
              <button className="bg-white hover:bg-gray-100 text-black-300 font-semibold py-1 px-4 border border-gray-400 rounded shadow text-black font-[700]">
                Đăng nhập
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Header2;
