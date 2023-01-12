import React from "react";
import { footer1 } from "../../Data/Footer/footer1";
class Footer1 extends React.Component {
  render() {
    console.log(footer1)
    return (
      <>
        <div className="flex bg-[#FAFAFA]">
          {footer1.map((item, index) => {
            return (
              <>
                <a>
                  <img src={item.img} />
                  <div>
                    <span>{item.title}</span>
                    <br></br>
                    <span>{item.note}</span>
                  </div>
                </a>
              </>
            );
          })}
        </div>
      </>
    );
  }
}
export default Footer1;
