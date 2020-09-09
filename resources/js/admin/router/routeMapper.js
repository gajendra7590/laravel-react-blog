import React from "react"; 
import { Route, Redirect } from "react-router-dom"; 
import { ProtectedRouterLayout,PublicRouterLayout } from "./routeLayout"; 

let adminData = localStorage.getItem('ADMIN_SESSION');
let token = null;
if (!!adminData) {
    try {
        adminData = JSON.parse(adminData);
        token = (typeof(adminData.token) != 'undefined') ? adminData.token : null;
    } catch (e) {
        localStorage.removeItem('ADMIN_SESSION'); 
    }
}


export const ProtectedRoute = props => {   
  const { component: Component, ...restProps } = props;   
  if (!Component) return null;
  return (
    <Route
      {...restProps}
        render={routeRenderProps => { 
          return (token!=null)?
          <ProtectedRouterLayout>
              <Component {...routeRenderProps} />
          </ProtectedRouterLayout>
          :(
            <Redirect
              to={{
                pathname: "/admin/login",
                state: { from: routeRenderProps.location }
              }}
            />
          )
        } 
      }
    />
  ); 
};

export const PublicRoute = props => {   
  const { component: Component, ...restProps } = props;   
  if (!Component) return null;
  return (
    <Route
      {...restProps}
      render={routeRenderProps => {
        return (token==null)?
        <PublicRouterLayout>
            <Component {...routeRenderProps} />
        </PublicRouterLayout>
        :(
          <Redirect
            to={{
              pathname: "/admin/dashboard",
              state: { from: routeRenderProps.location }
            }}
          />
        )
      }
      }
    />
  ); 
};
