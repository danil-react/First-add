import React from "react";
import styles from "./styles.module.scss";
import {withRouter} from 'react-router'

import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import {NavLink} from "react-router-dom";

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import CartCount from "../CartCount"

const NavbarNew = ({numberOfCart, history}) => {
  const token = localStorage.getItem('token')
  const LogOut = () => {
    localStorage.removeItem('token')
    history.push('/SignIn')
  }
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <div className={styles.nav}>
          <Nav className={styles.navbar}>
            <div className={styles.left}>
              <NavLink to="/" activeClassName={styles.active}><LoyaltyIcon className={styles.icon}/>Starter
                Store</NavLink>
            </div>
            <div className={styles.right}>
              {token ? <NavLink onClick={LogOut} to="/SignIn" className={styles.active}>Log Out</NavLink> : <> <NavLink
                to="/SignUp" className={styles.active}>Sign Up</NavLink>
                <NavLink to="/SignIn" className={styles.active}>Sign In</NavLink> </> }
              <NavLink to="/Cart" className={styles.active}><ShoppingCartIcon className={styles.icon}/>Cart(<CartCount
                numberOfCart={numberOfCart}/>)</NavLink>
            </div>
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default withRouter(NavbarNew);
