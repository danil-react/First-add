import React, {useCallback, useEffect} from "react";
import styles from "./styles.module.scss";

import CardCart from "../../components/CardCart/index"
import CartPay from "../../components/CartPay/index"

import Container from "@material-ui/core/Container";
import ApiService from "../../api/base";

const Cart = ({cart, setState, products}) => {

  const getAll = useCallback(() => {
    ApiService.get({
      resource: `cart/`,
    }).then(({data}) => {
      console.log(data)
      setState(prevState => ({...prevState, cart: data}))
    })
  })
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      getAll()
    }
  }, [])

  const deleteOne = useCallback((productId, total) => {
    console.log(productId, total)
    ApiService.delete({
      resource: `cart/?id=${productId}`
    }).then(({data}) => {
      console.log(data)
      getAll()
    })
  })

  const checkOut = useCallback((productId) => {
    console.log(productId)
    ApiService.put({
      resource: `cart/`
    }).then(({data}) => {
      console.log(data)
      getAll()
    })
  })

  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.upper}>
          <CardCart cart={cart} setState={setState} deleteOne={deleteOne}/>
        </div>
        <div className={styles.downer}>
          <CartPay cart={cart} setState={setState} checkOut={checkOut}/>
        </div>
      </div>
    </Container>
  );
}

export default Cart