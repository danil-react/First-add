import React, {useCallback, useEffect} from "react";
import styles from "./styles.module.scss";

import CardCart from "../../components/CardCart/index"
import CartPay from "../../components/CartPay/index"

import Container from "@material-ui/core/Container";
import ApiService from "../../api/base";

const Cart = ({cart, setState}) => {

  const getAll = useCallback(() => {
    ApiService.get({
      resource: `product/`,
    }).then(({data}) => {
      console.log(data)
      // setProducts(data)
    })
  })
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      // getAll({products})
    }
  }, [])
  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.upper}>
          <CardCart cart={cart} setState={setState}/>
        </div>
        <div className={styles.downer}>
          <CartPay cart={cart} setState={setState}/>
        </div>
      </div>
    </Container>
  );
}

export default Cart