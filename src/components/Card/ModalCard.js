import React from "react";

import CardNew from '../../components/Card'
import Modal from 'react-modal';
import styles from "./styles.module.scss"


const ModalCard = (props) => {
    const arr = ['a']
    console.log(props)
    return (
                <div className={styles.modal}>
                    <div className={styles.img}>
                        {/*{arr.map((item) => (*/}
                        {/*    <CardNew name={item}/>*/}
                        {/*))}*/}
                        {JSON.stringify(props.selectedProduct)}
                    </div>
                    <div className={styles.info}>
                        <a>info</a>
                    </div>
                </div>



    )
}

export default ModalCard