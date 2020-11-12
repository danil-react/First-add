import React from "react";

import styles from "./styles.module.scss";
import Container from "@material-ui/core/Container";

const CardCart = ({cart}) => {

  const handleClick = (e) => {
    e.preventDefault();
    localStorage.removeItem()
  }

  // <img src={item.img}/> to insert an image
  return (
    <div className={styles.container}>
        <div className={styles.goods}>
          {cart.map(item => {
            return (
              <>
                <div className={styles.left}>
                  <div className={styles.img}>
                    {/*{`${item.img}` }*/}
                    <img src={item.img}/>
                  </div>
                  <div className={styles.info}>
                    <div className={styles.cardTitle}>
                      {`${item.title}`}
                    </div>
                    <div className={styles.cardPrice}>
                      {`${item.number} x ${item.price}`}
                    </div>
                    <div className={styles.cardInfo}>
                      {`${item.info}`}
                    </div>
                  </div>
                </div>
                <div className={styles.deleted}>
                  <button type="button" onClick={handleClick}>x</button>
                </div>
              </>
            )
          })}
        </div>
    </div>
  );
}

export default CardCart