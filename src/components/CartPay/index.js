import React from "react";

import styles from "./style.module.scss";

const CartPay = ({cart,setState}) => {

  const handleClick = (id) => {
    setState(prevState => ({...prevState,cart: cart.filter(item => item.id !== id)}))
  }

  // const subTotal = cart.reduce(function (price, number){
  //   return price * number;
  //   console.log(subTotal);
  // })

  // {cart.reduce(item =>{
  //
  // })}

  return (
    <div className={styles.container}>
      <div className={styles.goods}>
        {cart.map(item => {
          return (
            <>
              <div className={styles.left}>
                  <div className={styles.cardPrice}>
                    <a>Sub total:</a>{`$${item.price*item.number}`}
                  </div>
              </div>
              <div className={styles.deleted}>
                <button type="button" onClick={() => handleClick(item.id)}>x</button>
              </div>
            </>
          )
        })}
      </div>
    </div>
  );
}

export default CartPay