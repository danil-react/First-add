import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from './layouts/Home'
import Cart from './layouts/Cart'
import SignIn from './layouts/SignIn'
import SignUp from './layouts/SignUp'
import NavbarNew from "./components/Navbar/Navbar";

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./styles.module.scss";

export default function BasicExample() {
    return (
        <Router>
            <div>
                <NavbarNew/>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                    <Route path="/signIn">
                        <SignIn />
                    </Route>
                    <Route path="/signUp">
                        <SignUp />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}
