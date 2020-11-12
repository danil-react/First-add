import React from "react";

import styles from "./styles.module.scss";
import Container from "@material-ui/core/Container";
import CardCart from "../../components/CardCart/index"

const Cart = ({cart}) => {
  return (
    <div className={styles.container}>
      <Container>
        <CardCart cart={cart}/>
        <br/>
        <br/>
        <br/>
        <div className={styles.price}>
          <div className={styles.total}>
            <p>Sub total:</p>
          </div>
          <div className={styles.check}>
            <p>check out</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Cart