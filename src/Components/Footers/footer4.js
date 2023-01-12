import React from "react";
import { topTimkiem } from "../../Data/Footer/footer4"
class Footer4 extends React.Component {
  render() {
    console.log(topTimkiem)
    return (
      <>
        <div className="flex">
          <span className="text-[#0f1e29] font-[700] text-[12px]">TOP TÌM KIẾM</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xlink="http://www.w3.org/1999/xlink"
            class="d7ed-SwZDZ2"
          >
            <path
              fill="#6F787E"
              fill-rule="nonzero"
              d="M12 13.214 17.524 8 19 9.393 12 16 5 9.393 6.476 8z"
            ></path>
          </svg>
        </div>
        <div>
          {topTimkiem.list.map((item, index) => {
            return (
              <>
                <a className="text-[#0f62fe] font-[400] text-[12px]">
                  {item.name}
                </a>
              </>
            );
          })}
        </div>
      </>
    );
  }
}
export default Footer4;
