// import logo from './logo.svg';
// import { Router, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NotFound from "./components/notFound/NotFound";
import CheckOut from "./components/checkOut/CheckOut";
import { createContext, useState } from 'react';
import Header from "./components/Header/Header";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
    <h3>email: {loggedInUser.email}</h3>
    <Router>
      <Switch>
      <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/destination">
          <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          {/* <Route path="/checkout">
            <CheckOut></CheckOut>
          </Route> */}
          <PrivateRoute path="/checkout">
            <CheckOut></CheckOut>
          </PrivateRoute>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        
      </Switch>
    </Router>
   </UserContext.Provider>
  );
}

export default App;
