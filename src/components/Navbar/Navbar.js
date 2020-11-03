import React from "react";

import styles from "./styles.module.scss";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import {Link} from "react-router-dom";
import Icon from '@material-ui/core/Icon';
import lamp from "../../assets/images/iconlamp.svg"
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import WbIncandescentTwoToneIcon from '@material-ui/icons/WbIncandescentTwoTone';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';


const Navbar = () => {


    return (
        <div className={styles.header}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <div className={styles.navbar}>
                        <div className={styles.left}>
                            <Typography variant="h6"  >
                                <WbIncandescentTwoToneIcon />
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
                                <ShoppingCartTwoToneIcon />
                            </Typography>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;