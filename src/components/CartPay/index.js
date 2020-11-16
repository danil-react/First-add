import React from "react";

import styles from "./style.module.scss";

const CartPay = ({cart, setState}) => {

  const handleClick = (id) => {
    setState(prevState => ({...prevState, cart: cart.filter(item => item.id !== id)}))
  }

  const subTotal = cart.map(item => item.price * item.number).reduce((acc, item) => {return acc + item}, 0)

  return (
    <div className={styles.container}>
      <div className={styles.goods}>
        <div className={styles.left}>
          <div className={styles.cardPrice}>
            <a>Sub total:</a>{`$${subTotal}`}
          </div>
        </div>
        <div className={styles.deleted}>
          {/*<button type="button" onClick={() => handleClick(item.id)}>x</button>*/}
        </div>
      </div>
    </div>
  );
}

export default CartPay