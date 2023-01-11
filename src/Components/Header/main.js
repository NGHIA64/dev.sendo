import React from "react";
import Header1 from "./header1";
import Header2 from "./header2/main";
class Header extends React.Component{
    render(){
        return (
          <div className="Header2">
            <Header1 />
            <Header2/>
          </div>
        );
    }
}
export default Header