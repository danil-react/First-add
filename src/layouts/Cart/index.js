import React from "react";
import styles from "./styles.module.scss";

import CardCart from "../../components/CardCart/index"
import CartPay from "../../components/CartPay/index"

import Container from "@material-ui/core/Container";
const Cart = ({cart, setState}) => {


  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.upper}>
          <CardCart cart={cart} setState={setState}/>
        </div>
        <div className={styles.downer}>
          <CartPay cart={cart} setState={setState}/>
        </div>
      </div>
    </Container>
  );
}

export default Cart