import React,{useLayoutEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from './layouts/Home'
import Cart from './layouts/Cart'
import SignIn from './layouts/SignIn'
import SignUp from './layouts/SignUp'
import NavbarNew from "./components/Navbar/Navbar";

import 'bootstrap/dist/css/bootstrap.min.css';
import "antd/dist/antd.css";
import img1 from "./assets/images/lampA.png";
import img2 from "./assets/images/lampB.png";

const arr = [
    {
        id: 1,
        img: img1,
        title: "Blue Desk",
        price: "$250.00",
        info: "for poor people",
        total: 5
    },
    {
        id: 2,
        img: img2,
        title: "Gold Desk",
        price: "$200.00",
        info: "for rich people",
        total: 2
    },
]

export default function BasicExample() {
    useLayoutEffect(() => {
        localStorage.setItem('products', JSON.stringify(arr))


    },[])
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
