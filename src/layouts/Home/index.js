import React, {useState} from "react";
import styles from "../../styles.module.scss";
import Container from "@material-ui/core/Container";
import {Modal} from "antd"

import ModalCard from '../../components/ModalCard/ModalCard'
import CardNew from '../../components/Card'

import Logo from "../../assets/images/lovelamp.svg";
import img1 from "../../assets/images/lampA.png";
import img2 from "../../assets/images/lampB.png";

const arr = [
    {
        img: img1,
        title: "Blue Desk",
        price: "$250.00",
    },
    {
        img: img2,
        title: "Gold Desk",
        price: "$200.00",

    },
]
const Home = () => {
    const [productIndex, setModal] = useState(null)
    const [toggle, setToggle] = useState(false);

    const closeModal = () => {
        setModal(null);
        setToggle(false)
    }
    const openModal = (index) => {
        setModal(index)
        setToggle(true)
    }

    return (
        <Container>
            <div className={styles.logo}>
                <img src={Logo} alt="logo"/>
            </div>
            <div className={styles.img}>
                <CardNew products={arr} onOpen={openModal}/>
            </div>
            <Modal visible={toggle} onOk={() => console.log('fun')} onCancel={closeModal}>
                <ModalCard setClose={() => setModal(null)} selectedProduct={arr[productIndex]}/>
            </Modal>
        </Container>
    );
}
export default Home