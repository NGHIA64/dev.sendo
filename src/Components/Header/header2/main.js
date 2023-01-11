import React from "react";
import ButtonDangNhap from "./button-dang-nhap";
import Logo from "./logo";
import Megamenu from "./img/mega-menu.svg";
import InputSearch from "./input-search";
import ButtonSearch from "./button-search";
import Cart from "./cart";
import logo from './img/logo.svg'
class Header2 extends React.Component {
  render() {
    return (
      <div className="text-white bg-[#EE2E23] items-center flex justify-between	">
        <div className="font-[700] italic text-4xl">Sendo</div>
        <div className="flex">
          <img src={Megamenu} />
          <form>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
              required
            />
          </form>
          <button
            type="submit"
            class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span class="sr-only">Search</span>
          </button>
        </div>
        <div>
          <ul>
            <li></li>
            <li>
              <button class="bg-white hover:bg-gray-100 text-black-300 font-semibold py-1 px-4 border border-gray-400 rounded shadow">
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
