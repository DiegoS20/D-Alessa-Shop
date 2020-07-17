import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./components/Index/Index";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  function handleSearch(query) {
    alert(query);
  }

  return (
    <Router>
      <Navbar onSearch={handleSearch} />
      <Switch>
        <Route exact path="/" component={Index} />
      </Switch>
    </Router>
  );
}

export default App;
