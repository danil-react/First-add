import React, {useState, useLayoutEffect} from "react";
import styles from "../../styles.module.scss";
import Container from "@material-ui/core/Container";
import {Modal} from "antd"

import ModalCard from '../../components/ModalCard/ModalCard'
import CardNew from '../../components/Card'

import Logo from "../../assets/images/lovelamp.svg";

const Home = ({setState}) => {
  const [products, setProducts] = useState([])

  useLayoutEffect(() => {
    setProducts(JSON.parse(localStorage.getItem('products')))
  }, [localStorage.getItem('products')])

  const [productIndex, setModal] = useState(null)
  const [toggle, setToggle] = useState(false);

  const closeModal = () => {
    setToggle(false)
  }
  const openModal = (index) => {
    setModal(index)
    setToggle(true)
  }


  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.logo}>
          <img src={Logo} alt="logo"/>
        </div>
        <div className={styles.img}>
          <CardNew products={products} onOpen={openModal}/>
        </div>
        <Modal
          className={styles.modal}
          destroyOnClose
          visible={toggle}
          onOk={() => console.log('fun')}
          onCancel={closeModal}
          width="60%"
          footer={null}
          wrapClassName="sa"
        >
          <ModalCard setClose={() => setModal(null)} selectedProduct={products[productIndex]} products={products} setState={setState}/>
        </Modal>
      </Container>
    </div>

  );
}
export default Home