import React from "react";
import ReactDOM from "react-dom";
import Example from "./component/Example/Example";
import ExampleTwo from "./component/Example/ExampleTwo";
import Boxes from "./component/Boxes/Boxes"

import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import "./App.css"

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
      <div className="container" >
        <div className="row">
          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 content-left">
            <h2 style={{textAlign:"center"}}>Cộng Hòa Xã Hội Chủ Nghĩa Việt Nam </h2>
            <h4 style={{textAlign:"center"}}>Độc Lập - Tự Do - Hạnh Phúc </h4><br />
            <p style={{textAlign:"right"}}>Khánh hòa ............., Ngày......., tháng......, năm.....</p><br/>
            <h3 style={{textAlign:"center"}}>
              GIẤY ĐỀ NGHỊ ĐĂNG KÍ DOANH NGHIỆP <br/>
              DOANH NGHIỆP TƯ NHÂN
            </h3>
            <div className="group-inline">
              <p>Kính gửi: Phòng đăng kí kinh doanh tỉnh, thành phố</p>
              <ExampleTwo />
             </div>

            <div className="one"  >
              <div className="row">
                
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 group-inline">
                  <p>Tôi là:  </p>
                  <ExampleTwo />

                </div>

                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 group-inline">
                <p>Giới tính:  </p>
                  <ExampleTwo />
                </div>
              </div>
           </div>
           <div className="two" style={{display:"flex", flexDirection:"row"}}  >
                 <div className="row">
                
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 group-inline">
                    <p>Ngày sinh:  </p>
                    <ExampleTwo />  
                </div>

                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 group-inline">
                <p>Dân tộc:  </p>
                  <ExampleTwo />
                </div>

                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 group-inline">
                <p>Quốc tịch:  </p>
                  <ExampleTwo />
                </div>
          </div>
          </div>
          
          <div className="three"  >
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 group-inline">
                <p>Số CMND  </p>
                  <ExampleTwo />
                </div>
              </div>
          </div>

          <div className="four"  >
              <div className="row">
                
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 group-inline">
                  <p>SĐT:  </p>
                  <ExampleTwo />

                </div>

                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 group-inline">
                <p>FAX:  </p>
                  <ExampleTwo />
                </div>
              </div>
           </div>

           <div className="five"  >
              <div className="row">
                
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 group-inline">
                  <p>Email:  </p>
                  <ExampleTwo />

                </div>

                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 group-inline">
                <p>WEBSITE:  </p>
                  <ExampleTwo />
                </div>
              </div>
           </div>
          
        </div>
         
          
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 content-right">
            <Boxes />
          </div>
          
          
          
          

        </div>
      </div>
      </DndProvider>
     
    </div>
  );
}

export default App;