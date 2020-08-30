import React from "react";
import ReactDOM from "react-dom";

//
import Main from './admin/router/main';


require('./bootstrap');  

require('./admin/router/main');  


if (document.getElementById("app")) {
    ReactDOM.render(<Main />, document.getElementById("app"));
}
