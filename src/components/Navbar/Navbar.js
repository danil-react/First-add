import React from "react";

import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import {Link} from "react-router-dom";

import styles from "./styles.module.scss";
import CartCount from "../CartCount"

const NavbarNew = () => {
  return (

    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className={styles.navbarUuuu}>
        <div className={styles.nav}>
          <Nav className={styles['custom-navbar']}>
            <div className={styles.left}>
              <div className={styles.block}>
                <Link to="/">Starter Store</Link>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.block}>
                <Link to="/SignUp">SignUp</Link>
              </div>
              <div className={styles.block}>
                <Link to="/SignIn">SignIn</Link>
              </div>
              <div className={styles.block}>
                <Link to="/Cart">Cart{<CartCount />}</Link>
              </div>
            </div>
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarNew;
