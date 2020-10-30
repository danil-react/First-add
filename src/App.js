import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './layouts/Home'
import Cart from './layouts/Cart'
import Navbar from "./components/Navbar/Navbar";
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Starter Store</Link>
                    </li>
                    <li>
                        <Link to="/SignUp">Sign up</Link>
                    </li>
                    <li>
                        <Link to="/SignIn">Sign in</Link>
                    </li>
                    <li>
                        <Link to="/Cart">Cart</Link>
                    </li>
                </ul>

                <hr />

                <Switch>
                    <Route exact path="/">
                        {/*роут до большой надписи с сердцем */}
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

// You can think of these components as "pages"
// in your app.

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
