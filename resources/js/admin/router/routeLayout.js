import React from "react"; 
import App from "../components/App";   
import Auth from "../components/Auth";   


export const ProtectedRouterLayout = ({ children }) => {
    return <App>{children}</App>
}   


export const PublicRouterLayout = ({ children }) => {
    return <Auth>{children}</Auth>
}   
