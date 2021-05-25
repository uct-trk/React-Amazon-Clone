import React, { useEffect } from 'react'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import { auth } from './Firebase/firebase';
import { useStateValue } from './Context/StateProvider';
import Payment from './components/Payment/Payment';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import Orders from './components/Orders/Orders';

// we must wrap payment component with Elements
const promise = loadStripe("pk_test_51IuaXvEKpFr4vhJ9mrMWQ3SyAeEHuUGojtWlRLfA06JRqETBBUC2ETMNRCplyz5Lb2tHxoWPExqeLii7ZMe7zDJQ00R92Wu4ED");


function App() {

  const [{}, dispatch] = useStateValue()
  

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("The user is>>>", authUser)
      if (authUser){
        // user just logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        }) 
      } else {
        // user was logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    }) 
  },[])

  return (
    <Router>
      <div className="App">
      
        <Switch>
          <Route path="/orders">
            <Orders/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>

          <Route exact path="/">
          <Header />
          <Home />
          </Route>

          <Route exact path="/checkout">
            <Header />
            <Checkout/>
          </Route>

          <Route exact path="/payment">
            <Header />
            <Elements stripe={promise}>
            <Payment/>
            </Elements>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
