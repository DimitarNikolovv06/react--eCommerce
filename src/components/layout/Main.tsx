import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Products } from "../Products";
import { MyOrders } from "../MyOrders";
import { AddProduct } from "../AddProduct";

export const Main = () => {
  return (
    <main className="main">
      <Switch>
        <Route exact path="/" component={Redicrector} />
        <Route exact path="/orders" component={MyOrders} />
        <Route exact path="/add" component={AddProduct} />
        <Route exact path="/products" component={Products} />
      </Switch>
    </main>
  );
};

const Redicrector = () => {
  return <Redirect to="/products" />;
};
