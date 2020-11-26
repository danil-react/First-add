import React from "react";

import styles from "./styles.module.scss";

const CardCart = ({cart, setState, deleteOne, getAll, prods}) => {

  // const handleClick = (id) => {
  //   setState(prevState => ({...prevState, cart: getAll.filter(item => item.id !== id)}))
  // }
  //
  // // const product = getAll.filter ((i) => { item.id === i.id })
  return (
    <div className={styles.container}>
      <div className={styles.goods}>
        {prods.map(item => {
          return (
            <>
              <div className={styles.container} key={item._id}>
                <div className={styles.left}>
                  <div className={styles.img}>
                    <img src={`http://localhost:5000${item.img}`}/>
                  </div>
                  <div className={styles.info}>
                    <div className={styles.cardTitle}>
                      {`${item.title}`}
                    </div>
                    <div className={styles.cardPrice}>
                      {`${item.total} x $${item.price}`}
                    </div>
                    <div className={styles.cardInfo}>
                      {`${item.info}`}
                    </div>
                  </div>
                </div>
                <div className={styles.right}>
                  <div className={styles.deleted}>
                    <button type="button" onClick={() => {
                      deleteOne()
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