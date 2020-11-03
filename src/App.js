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
import NavbarNew from "./components/Navbar/Navbar";


import 'bootstrap/dist/css/bootstrap.min.css';





export default function BasicExample() {
    return (
        <Router>
            <div>
                <NavbarNew/>
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
