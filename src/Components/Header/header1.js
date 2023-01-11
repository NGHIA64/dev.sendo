import React from "react";
import header1 from "../../Data/Header/header1";
class Header1 extends React.Component {
  render() {
    var data = header1()
    return (
      <div className="bg-[#D5281F]">
        <ul className="flex flex-row mt-0 mr-6 space-x-2 text-sm font-medium ">
          {data.map((item, index) => (
            <li key={index}>
              <a className="text-white p-2" key={index}>
                {data[index].name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Header1;
