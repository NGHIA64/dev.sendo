import React from "react";
import { footer3 } from "../../Data/Footer/footer3";
class Footer3 extends React.Component {

  render() {
    console.log(footer3)
    return (
      <>
        <div className="text-white bg-[#0f1e29] flex">
          <div>
            {footer3.map((item, index) => {
              if (item) {
                if (item.children && typeof item.children == "string") {
                  if (index == 0) {
                    return (
                      <>
                        <div>
                          <span className="font-[700]">{item.children}</span>
                        </div>
                      </>
                    );
                  } else {
                    return (
                      <>
                        <div>
                          <span>{item.children}</span>
                        </div>
                      </>
                    );
                  }
                }
              }
            })}
            <span>
              Email: <a href="mailto:lienhe@sendo.vn">lienhe@sendo.vn</a>
            </span>
            <div className="flex">
              <a>
                <img src="https://media3.scdn.vn/img4/2020/12_16/XhpGDnvWqrlKeHLst3aS.png" />
              </a>
              <a>
                <img src="https://media3.scdn.vn/img4/2020/12_16/h6lEMGIAt4Uapd0Mls34.png" />
              </a>
            </div>
          </div>
          <div>
            <span>Đăng ký nhận bản tin ưu đãi khủng từ Sendo</span>
            <form>
              <div>
                <div>
                  <div>
                    <input
                      placeholder="Email của bạn là"
                      type="text"
                      inputMode="email"
                    />
                  </div>
                </div>
              </div>
              <div>
                <button className="bg-[#ee2624] text-[#fff]">
                  <span>Đăng ký</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default Footer3;
