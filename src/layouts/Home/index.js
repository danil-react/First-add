import React from "react";
import Container from "@material-ui/core/Container";

import CardNew from '../../components/Card'
import styles from "../../styles.module.scss";
import Logo from "../../assets/images/lovelamp.svg";

const Home = () => {
    const arr = ['a']
    return (
        <Container>
            <div className={styles.logo}>
                <img src={Logo} alt="logo"/>
            </div>
            <div>
                {arr.map((item) => (
                    <CardNew name={item}/>
                ))}
            </div>
        </Container>
    );
}
export default Home