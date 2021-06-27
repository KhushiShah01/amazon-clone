import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51J5DswSCe9FwEutAhgRvEI6WNrlsDIx2wcapir1JQXdemhRO4rFHn6PiiqQDKTy7zzn5qeIKpJBH8X9ciXrZcHgG00YUO4qTMg"
);

function App() {
  const [{}, dispatch] = useStateValue();

  // to keep track of who has signedIn
  useEffect(() => {
    // kind of like an if statement in React
    // auth.onAuthStateChanged is the listener.. useEffect is refired every time we do things like login or logout
    auth.onAuthStateChanged((authUser) => {
      console.log("USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in or was logged in fr eg before refreshing the page
        dispatch({
          // this sends user information to the data layer
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    // will run only once when the app component loads
    // but if we put anything inside [] then whenever the components in [] change, useEffect is re fired
  }, []);

  return (
    // BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path="/payment">
            <Header />
            {/* higher order func - it wraps the payment element  */}
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
