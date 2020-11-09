import React from "react";
import {Modal, Button} from 'antd';
import styles from "./styles.module.scss"

const ModalCard = (props) => {

    return (
        <div className={styles.modal}>
                <div>
                    <a>{props.id}</a>
                </div>
                <button onClick={props.setClose}>x</button>

        </div>

    )
}

export default ModalCard