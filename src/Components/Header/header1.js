import React from "react";
import header1 from "../../Data/Header/header1";
class Header1 extends React.Component {
  render() {
    var data = header1()
    return (
      <div className="">
        <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
          {data.map((item, index) => (
            <li>
              <a className="text-white" key={index}>
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
