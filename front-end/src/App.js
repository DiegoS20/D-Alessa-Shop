import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./components/Index/Index";
import Navbar from "./components/Navbar/Navbar";
import "./main.css";

function App() {
  function handleSearch(query) {
    alert(query);
  }

  return (
    <Router>
      <Navbar onSearch={handleSearch} />
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
