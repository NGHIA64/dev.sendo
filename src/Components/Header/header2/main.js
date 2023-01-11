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
      <div className="flex justify-center mr-auto text-white bg-[#EE2E23]">
        <div className="font-[700] italic text-4xl">Sendo</div>
        <div>
          <ul>
            <li>
              <a>
                <img src={Megamenu} className="" />
              </a>
            </li>
            <li>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
                required
              />
            </li>
            <li></li>
          </ul>
        </div>
        <div>
          <ul>
            <li></li>
            <li>
              <button class="bg-white hover:bg-gray-100 text-[#3f4b53] font-semibold py-2 px-4 border border-gray-400 rounded shadow">
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
