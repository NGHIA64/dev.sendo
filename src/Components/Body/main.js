import React from "react";
import Body1 from "./body1";
import Sidebar1 from "./sidebar1";
import Sidebar2 from "./sidebar2";
class Body extends React.Component {
  render() {
    return (
      <div className="Body bg-[#F2F3F4]">
        <Body1 />
        <div className="flex">
          <Sidebar1 />
          <Sidebar2 />
        </div>
      </div>
    );
  }
}
export default Body;
