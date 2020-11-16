import React from "react";

import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import {Link} from "react-router-dom";

import styles from "./styles.module.scss";

const NavbarNew = () => {
  return (

    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className={styles.navbarUuuu}>
        <div className={styles.nav}>
          <Nav className="1111">
            <div className={styles.left}>
              <Link to="/">Starter Store</Link>
            </div>
            <div className={styles.right}>
              <Link to="/SignUp">SignUp</Link>
              <Link to="/SignIn">SignIn</Link>
              <Link to="/Cart">Cart</Link>
            </div>
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>

    // <div className={styles.mininav}>
    //   <Navbar bg="light" expand="lg">
    //     <span> <Navbar.Toggle aria-controls="basic-navbar-nav" className=""/></span>
    //
    //     <div className={styles.nav}>
    //       <Navbar.Collapse id="basic-navbar-nav" >
    //         <div className={styles.left}>
    //           <Link to="/">Starter Store</Link>
    //         </div>
    //         <div className={styles.right}>
    //           <Link to="/SignUp">SignUp</Link>
    //           <Link to="/SignIn">SignIn</Link>
    //           <Link to="/Cart">Cart</Link>
    //         </div>
    //       </Navbar.Collapse>
    //     </div>
    //   </Navbar>
    // </div>
  )
}

export default NavbarNew;
