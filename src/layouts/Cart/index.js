import React from "react";

import styles from "./styles.module.scss";
import Container from "@material-ui/core/Container";
import CardCart from "../../components/CardCart/index"
import CartPay from "../../components/CartPay/index"

const Cart = ({cart, setState}) => {


  return (
    <div className={styles.container}>
      <Container>
        <CardCart cart={cart} setState={setState}/>
        <br/>
        <br/>
        <br/>
        <CartPay cart={cart} setState={setState}/>
      </Container>
    </div>
  );
}

export default Cart