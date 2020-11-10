import React from "react";
import styles from "../ModalCard/styles.module.scss"
import Modal from 'react-modal';

import CardNew from '../Card'



const ModalCard = (props) => {
    const arr = ['a']
    console.log(props)
    return (
        <div className={styles.modal}>
            <div className={styles.img}>
                {props.selectedProduct && <img src={props.selectedProduct.img}/>}
            </div>
            <div className={styles.info}>
                <a>{JSON.stringify(props.selectedProduct)}</a>
            </div>
        </div>
    )
}

export default ModalCard