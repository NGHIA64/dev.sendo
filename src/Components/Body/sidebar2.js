import React from "react";
import { sidebar2 } from "../../Data/Body/sidebar2";
class Sidebar2 extends React.Component {
   numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + 'đ';
}
  render() {
    console.log(sidebar2)
    return (
      <>
        <div>
          <div>
            <span>Sắp xếp theo:</span>
            <select></select>
          </div>
          <div className="bg-[#fff]">
            <span className="text-[#6f787e] text-[16px] font-[600]">
              Sản phẩm được tài trợ
            </span>
            <div className="flex">
              {sidebar2.sanPhamDuocTaiTro.map((item, index) => {
                return (
                  <>
                    <div className="">
                      <img src={item.image} />
                      <div>
                        <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />
                        <span>{item.name}</span>
                      </div>
                      <div>{this.numberWithCommas(item.final_price)}</div>
                      <div>{item.shop_warehouse_city}</div>
                    </div>
                    ;
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Sidebar2;
