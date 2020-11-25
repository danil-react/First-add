import React, {useState, useEffect, useLayoutEffect, useCallback} from "react";
import styles from "../../styles.module.scss";
import Container from "@material-ui/core/Container";
import {Modal} from "antd"

import ModalCard from '../../components/ModalCard/ModalCard'
import CardNew from '../../components/Card'
import ApiService from "../../api/base";

import Logo from "../../assets/images/lovelamp.svg";


const Home = ({setState}) => {
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState({})

  // useLayoutEffect(() => {
  //   setProducts(JSON.parse(localStorage.getItem('products')))
  // }, [localStorage.getItem('products')])

  const [productIndex, setModal] = useState(null)
  const [toggle, setToggle] = useState(false);

  const closeModal = () => {
    setToggle(false)
  }
  const openModal = (index, id) => {
    getOne(id).then(({data}) => {
      console.log(data)
      setSelectedProduct(data)
      setModal(index)
      setToggle(true)
    })
  }

  const getAll = useCallback( () => {
    ApiService.get({
      resource:`product/`,
    }).then(({data}) => {
      console.log(data)
      setProducts(data)
    })
  })

  const getOne = useCallback((id) => {
   return ApiService.get({
      resource:`product/${id}`,
    })
  })

useEffect(() => {
    getAll({products})
},[])

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
          <ModalCard setClose={() => setModal(null)} selectedProduct={selectedProduct} products={products} setState={setState}/>
        </Modal>
      </Container>
    </div>

  );
}
export default Home