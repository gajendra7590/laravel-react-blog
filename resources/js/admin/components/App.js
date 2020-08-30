import React,{ useEffect} from "react";
import ReactDOM from "react-dom";

import Sidebar from "./shared/Sidebar";
import TopHeader from "./shared/TopHeader";  

//
import CommonAxios from '../api-axios/Common';
function App({ children }) {  
    return (
        <div className="pr_dash_main_wrapper float_left"> 
            <Sidebar />
            <div className="gd_fav_right_cont_box">
                <TopHeader />
                <div className="pr_dash_right_boxes_main float_left">
                    { children }
                </div>
            </div>
            <div className="gd_fav_bottom_footer float_left">
                <p>Copyright@React Blog</p>
            </div>
        </div>
    );
}

export default App; 

