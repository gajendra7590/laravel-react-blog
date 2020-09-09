import React from "react";
import { Provider } from 'react-redux';
import store from '../redux/store'; 

import Sidebar from "./shared/Sidebar";
import TopHeader from "./shared/TopHeader";   
function App({ children }) {  
    return (
        <Provider store={ store }>
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
        </Provider>
    );
}

export default App; 

