import React from "react";
import {Navbar} from 'react-bootstrap'
import styles from "./styles.module.scss";

import {Link} from "react-router-dom";



const NavbarNew = () => {


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
                        <Link to="/Cart">Cart</Link>
                    </div>
                </Navbar.Collapse>
            </div>
        </Navbar>





        // <div className={styles.header}>
        //     <AppBar position="static">
        //         <Toolbar variant="dense">
        //             <div className={styles.navbar}>
        //                 <div className={styles.left}>
        //                     <Typography variant="h6"  >
        //                         <WbIncandescentTwoToneIcon />
        //                         <Link to="/">Starter Store</Link>
        //                     </Typography>
        //                 </div>
        //                 <div className={styles.right}>
        //                     <Typography variant="h6" color="inherit">
        //                         <Link to="/SignUp">Sign up</Link>
        //                     </Typography>
        //                     <Typography variant="h6" color="inherit">
        //                         <Link to="/SignIn">Sign in</Link>
        //                     </Typography>
        //                     <Typography variant="h6" color="inherit">
        //                         <Link to="/Cart">Cart</Link>
        //                         <ShoppingCartTwoToneIcon />
        //                     </Typography>
        //                 </div>
        //             </div>
        //         </Toolbar>
        //     </AppBar>
        // </div>
    )
}

export default NavbarNew;