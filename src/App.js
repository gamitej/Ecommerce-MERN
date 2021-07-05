import React from "react";
import "./styles.css";
import Head from "./comp/Head";
import Products from "./detail/Products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./comp/Login";
import Signup from "./comp/Signup";
import AddCart from "./detail/AddCart";
import CheckOrders from "./detail/CheckOrders";
import Admin from "./detail/Admin";
import Add from "./adminpart/Add";
import Edit from "./adminpart/Edit";
import Delete from "./adminpart/Delete";
import ProductDetail from "./detail/ProductDetail";
import EditFinal from "./adminpart/EditFinal";

const App = () => {
  return (
    <Router>
      <Head />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/addtocart" component={AddCart} />
        <Route path="/checkorders" component={CheckOrders} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/edit/:id" component={EditFinal} />
        <Route path="/admin" component={Admin} />
        <Route path="/add" component={Add} />
        <Route path="/edit" component={Edit} />
        <Route path="/delete" component={Delete} />
      </Switch>
    </Router>
  );
};

export default App;
