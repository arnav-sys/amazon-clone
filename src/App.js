import React, { useEffect } from 'react';
import './App.css';
import Header from './Header'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Checkout from './Checkout';
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import 'react-notifications-component/dist/theme.css';
import Payment from './Payment';
import Orders from './Orders';
import CustomFooter from "./CustomFooter"

const promise = loadStripe(
  "pk_test_51HPvTYJ8JHZj0y6KIuINFNfusRkEc32Fbv6Aa6eWXWZnNFYQxBVRx0BBvfyiBr5RTtBpBXKSfSfdcfnngXTqdxUH00dqZUQxvo"
);

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
     
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <CustomFooter />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <CustomFooter />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
            <CustomFooter />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <CustomFooter />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
