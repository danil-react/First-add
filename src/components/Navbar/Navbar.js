import React from "react";

import styles from "./styles.module.scss";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import {Link} from "react-router-dom";


const Navbar = () => {



    return (
        <div className={styles.header}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <div className={styles.navbar}>
                        <div className={styles.left}>
                            <Typography variant="h6"  >
                                {/*иконку лампы вставить*/}
                                <Link to="/">Starter Store</Link>
                            </Typography>
                        </div>
                        <div className={styles.right}>
                            <Typography variant="h6" color="inherit">
                                <Link to="/SignUp">Sign up</Link>
                            </Typography>
                            <Typography variant="h6" color="inherit">
                                <Link to="/SignIn">Sign in</Link>
                            </Typography>
                            <Typography variant="h6" color="inherit">
                                <Link to="/Cart">Cart</Link>
                            </Typography>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;