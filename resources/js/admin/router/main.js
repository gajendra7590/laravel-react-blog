import React from "react"; 
import { Router, Redirect, Route, Switch } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history"; 

import { PublicRoute,ProtectedRoute } from "./routeMapper";

import * as RouteConfig from "./routeConfig.js"; //configure all path in this file 

export default function Main() {
  const { publicRoutes , protectedRoutes } = RouteConfig;
  // scroll top on routes change
  const history = createHistory();
  history.listen(_ => {
    window.scrollTo(0, 0);
  });

  return ( 
      <Router  history={history}> 
          <Switch>  
            {protectedRoutes.map(protectedRouteProps => (
              <ProtectedRoute {...protectedRouteProps} />
            ))}
            {publicRoutes.map(publicRouteProps => (
              <PublicRoute {...publicRouteProps} />
            ))}
            <Route render={() => <Redirect to={{ pathname: "/admin/dashboard" }} />} />
          </Switch> 
      </Router> 
  );
}
