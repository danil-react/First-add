import React from "react";
import styles from "../ModalCard/styles.module.scss"
import Modal from 'react-modal';

import CardNew from '../Card'


const ModalCard = (props) => {
    return (
        <div>
            <div className={styles.upper}>
                <div className={styles.img}>
                    {props.selectedProduct && <img src={props.selectedProduct.img}/>}
                </div>
                <div className={styles.upperRight}>
                    <div className={styles.title}>
                        <a>{props.selectedProduct.title}</a>
                    </div>
                    <div className={styles.price}>
                        <a>{props.selectedProduct.price}</a>
                    </div>
                    <div className={styles.uniqueId}>
                        <a>SKU: BLDE1000BLU</a>
                    </div>
                    <div className={styles.buyForm}>
                        <input/>
                        <button>Add to cart</button>
                    </div>
                </div>
            </div>
            <div className={styles.downer}>
                {/*<a>{JSON.stringify(props.selectedProduct)}</a>*/}
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