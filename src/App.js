import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import AddProducts from "./components/AddProducts";

function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route path="/addproducts">
            <AddProducts />
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
