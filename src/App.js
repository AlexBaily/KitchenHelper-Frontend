import React from "react";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import LocationApi from "./views/LocationApi";

function App() {

  
  return (
    <div className="App">
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/location" component={LocationApi} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;