import React from "react";

import styles from "./styles.module.scss";

const CardCart = ({cart,setState}) => {

  const handleClick = (id) => {
    setState(prevState => ({...prevState,cart: cart.filter(item => item.id !== id)}))
  }

  return (
    <div className={styles.container}>
        <div className={styles.goods}>
          {cart.map(item => {
            return (
              <>
                <div className={styles.left}>
                  <div className={styles.img}>
                    <img src={item.img}/>
                  </div>
                  <div className={styles.info}>
                    <div className={styles.cardTitle}>
                      {`${item.title}`}
                    </div>
                    <div className={styles.cardPrice}>
                      {`${item.number} x $${item.price}`}
                    </div>
                    <div className={styles.cardInfo}>
                      {`${item.info}`}
                    </div>
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

export default CardCart