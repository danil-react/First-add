import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './layouts/Home'
import Cart from './layouts/Cart'
import SignIn from './layouts/SignIn'
import SignUp from './layouts/SignUp'
import Navbar from "./components/Navbar/Navbar";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";



export default function BasicExample() {
    return (
        <Router>
            <div>
                <Navbar/>
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
