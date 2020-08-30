import React from "react"; 
import { Route, Redirect } from "react-router-dom"; 
import { ProtectedRouterLayout,PublicRouterLayout } from "./routeLayout"; 


export const ProtectedRoute = props => {   
  const { component: Component, ...restProps } = props;   
  if (!Component) return null;
  return (
    <Route
      {...restProps}
      render={routeRenderProps =>
        <ProtectedRouterLayout>
            <Component {...routeRenderProps} />
        </ProtectedRouterLayout>
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
      render={routeRenderProps =>
        <PublicRouterLayout>
            <Component {...routeRenderProps} />
        </PublicRouterLayout>
      }
    />
  ); 
};
