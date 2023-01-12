import React from "react";
import { footer2 } from "../../Data/Footer/footer2";
class Footer2 extends React.Component {
  render() {
    console.log(footer2)
    return (
      <>
        <div className="flex bg-[#f2f3f4]">
          {footer2.map((item, index) => {
            return (
              <div>
                <span>{item[0].props.children}</span>
                <br></br>
                {item[1].props.list.map((item, index) => {
                  if(item.appStore){
                    return (
                      <>
                        <span>{item.text}</span>
                        <div>
                          <div>
                            <a>
                              <img src={item.appStore.image} />
                            </a>
                          </div>
                          <div>
                            <a>
                              <img src={item.googlePlay.image} />
                            </a>
                          </div>
                          <div>
                            <a>
                              <img src={item.appGallery.image} />
                            </a>
                          </div>
                        </div>
                        <br></br>
                      </>
                    );
                  }else{
                    return (
                      <>
                        <a>{item.text}</a>
                        <br></br>
                      </>
                    );
                  }
                  
                })}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
export default Footer2;
