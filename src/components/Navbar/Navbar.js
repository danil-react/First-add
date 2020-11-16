import React from "react";
import styles from "./styles.module.scss";

import {Navbar} from 'react-bootstrap'
import {Link} from "react-router-dom";

import CartCount from "../CartCount"

const NavbarNew = ({numberOfCart}) => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <div className={styles.nav}>
                <Navbar.Collapse id="basic-navbar-nav" >
                    <div className={styles.left}>
                        <Link to="/">Starter Store</Link>
                    </div>
                    <div className={styles.right}>
                        <Link to="/SignUp">SignUp</Link>
                        <Link to="/SignIn">SignIn</Link>
                        <Link to="/Cart">Cart(<CartCount numberOfCart={numberOfCart} />)</Link>
                    </div>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default NavbarNew;