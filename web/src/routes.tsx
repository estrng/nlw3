import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import OrphanageMap from "./pages/OrphanageMap";
import CreateOrphanage from "./pages/CreateOrphanage";
import Orphanage from "./pages/Orphanage";
import { ToastContainer } from "react-toastify";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      {/* <ToastContainer autoClose={3000}> */}
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphanageMap} />
        <Route path="/orphanages/:id" component={Orphanage} />
        <Route path="/orphanage/create" component={CreateOrphanage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
