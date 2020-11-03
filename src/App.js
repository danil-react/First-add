import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import styles from "./styles.module.scss";
import Home from './layouts/Home'
import Cart from './layouts/Cart'
import SignIn from './layouts/SignIn'
import SignUp from './layouts/SignUp'
import Navbar from "./components/Navbar/Navbar";
import Logo from "./assets/images/lovelamp.svg";





export default function BasicExample() {
    return (
        <Router>
            <div>
                <Navbar/>
                <div className={styles.logo}>
                    <img src={Logo} alt="logo" />
                </div>
                {/*подключил навбар из "./components/Navbar/Navbar"*/}
                <Switch>
                    {/*свич модуль для страничек*/}
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}


// function Home() {
//     return (
//         <div>
//             <h2>Home</h2>
//         </div>
//     );
// }



function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}
