import React, {useCallback, useEffect} from "react";

import Local from "../LocalStorage/index"

import styles from "./styles.module.scss";

const ModalCard = (props) => {

  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <div className={styles.img}>
          {props.selectedProduct && <img src={`http://localhost:5000${props.selectedProduct.img}`}/>}
        </div>
        <div className={styles.upperRight}>
          <div className={styles.title}>
            <a>{props.selectedProduct.title}</a>
          </div>
          <div className={styles.price}>
            <a>${props.selectedProduct.price}</a>
          </div>
          <div className={styles.uniqueId}>
            <a>SKU: BLE1000BLU</a>
          </div>
          <div className={styles.checkOutForm}>
            <Local product={props.selectedProduct} setState={props.setState}/>
          </div>
        </div>
      </div>
      <div className={styles.downer}>
        <div className={styles.about}>
          <a>About this product</a>
        </div>
        <div className={styles.info}>
          <a>{props.selectedProduct.title} {props.selectedProduct.info}.</a>
        </div>
      </div>
    </div>
  )
}

export default ModalCard