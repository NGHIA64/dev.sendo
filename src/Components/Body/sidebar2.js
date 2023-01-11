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
          <div className="flex">
            {sidebar2.sanPhamBinhThuong.map( (item, index) => {
                return (
                  <>
                    <div>
                      <img src={item.image} />
                      <div className="flex">
                        <img src="https://media3.scdn.vn/img4/2022/11_09/6WTj8y7uau8dW1m4jiDA.png" />
                        <img src="https://media3.scdn.vn/img4/2022/12_29/ZP0hPP4m4WbFPaY8mLmG.png" />
                      </div>
                      <div>
                        <img src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png" />
                        <span>{item.name}</span>
                      </div>
                      <div className="flex">
                        <span>{item.sale_percent + "%"}</span>
                        <span>
                          {this.numberWithCommas(item.default_price_max)}
                        </span>
                      </div>
                      <div>{this.numberWithCommas(item.sale_price_max)}</div>
                      <div>
                        <img src="https://media3.scdn.vn/img4/2022/11_09/gj399CMo7lEnCO3fCiQ9.png" />
                        <span>Trả góp 0%</span>
                      </div>
                      <div>Đã bán {item.order_count_text}</div>
                      <div>
                        {item.rated.star}/5
                        <span class="_8511-ioQgyg"></span>
                        <span>{item.shop.ware_house_region_name}</span>
                      </div>
                    </div>
                  </>
                );
            })}
          </div>
        </div>
      </>
    );
  }
}
export default Sidebar2;
