import React from "react";
import { data_filter } from "../../Data/Body/sidebar1";
class Sidebar1 extends React.Component {
  render() {
    return (
      <>
        <div className="bg-white box-border flex-col	flex-wrap box-border items-stretch content-stretch width-full">
          {data_filter.map((item, index) => {
            if (item.attribute_term == "GeneralTerm") {
              return "";
            }
            console.log(item);
            return (
              <>
                <div >
                  <span className="text-[#0f1e29] font-[700] text-[14px]">
                    {item.attribute_name}
                  </span>
                  <button>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xlink="http://www.w3.org/1999/xlink"
                      className="d7ed-SwZDZ2 d7ed-w34diS"
                    >
                      <path
                        fill="#6F787E"
                        fillRule="nonzero"
                        d="M12 10.786L6.476 16 5 14.607 12 8l7 6.607L17.524 16z"
                      ></path>
                    </svg>
                  </button>
                </div>
                {item.attribute_value.map((item, index) => {
                  return (
                    <>
                      <div>
                        <input type="checkbox" />
                        <span>{item.option_name}</span>
                      </div>
                    </>
                  );
                })}
                <button className="flex">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xlink="http://www.w3.org/1999/xlink"
                    className="d7ed-SwZDZ2 d7ed-w34diS"
                  >
                    <path
                      fill="#6F787E"
                      fillRule="nonzero"
                      d="M13 11h9v2h-9v9h-2v-9H2v-2h9V2h2z"
                    ></path>
                  </svg>
                  <span className="text-[#3f4b53] font-[700] text-[14px]">
                    Xem thêm
                  </span>
                </button>
              </>
            );
          })}
        </div>
      </>
    );
  }
}
export default Sidebar1;
