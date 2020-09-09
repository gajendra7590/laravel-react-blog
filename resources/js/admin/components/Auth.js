import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from '../redux/store'

import RighSide from "./public/RighSide";

import CommonAxios from "../api-axios/Common";
function App({ children }) {
    return (
        <React.Fragment >
            <Provider store={ store }>
                <div className="gd_login_main_wrapper float_left" style={{marginLeft:'33%'}}>
                    <div className="gd_login_left_wrapper"> 
                        { children }
                        <div className="gd_login_copyr">
                            <p>Copyright@React Blog</p>
                        </div> 
                    </div>
                </div> 
            </Provider>
        </React.Fragment>
    );
}

export default App;
