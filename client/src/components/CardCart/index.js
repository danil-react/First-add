import React from "react";

import styles from "./styles.module.scss";

const CardCart = ({cart, setState, deleteOne}) => {

  const handleClick = (id) => {
    setState(prevState => ({...prevState, cart: cart.filter(item => item.id !== id)}))
  }

  // const product = product.filter ((i) => { item.id === i.id })
  return (
    <div className={styles.container}>
      <div className={styles.goods}>
        {cart.map(item => {
          return (
            <>
              <div className={styles.container} key={item.id}>
                <div className={styles.left}>
                  <div className={styles.img}>
                    <img src={`http://localhost:5000${item.img}`}/>
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
                <div className={styles.right}>
                  <div className={styles.deleted}>
                    <button type="button" onClick={() => {
                      deleteOne(item._id, item.total)
                    }}>x</button>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </div>
  );
}

export default CardCart