import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./components/Index";
import Navbar from "./components/Navbar";
import "./assets/css/main.css";

function App() {
  function handleSearch(query) {}

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Index onSearch={handleSearch} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
