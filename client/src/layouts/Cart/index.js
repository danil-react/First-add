import React, {useState, useCallback, useEffect} from "react";
import styles from "./styles.module.scss";

import CardCart from "../../components/CardCart/index"
import CartPay from "../../components/CartPay/index"

import Container from "@material-ui/core/Container";
import ApiService from "../../api/base";

const Cart = ({cart, setState, products}) => {

  const [prods, setProds] = useState([])

  const getAll = useCallback(() => {
    ApiService.get({
      resource: `cart/`,
    }).then(({data}) => {
      const products = JSON.parse(localStorage.getItem('products'))
      const dataId = data.map((item) => item.id)
      const productId = products.map((item) => item._id)
      const result = products.filter(el => {
       return  dataId.includes(el._id)
      })
      setProds(result)
      console.log(result,'result')
      // const items = productId.filter((prod,index) => {
      //   dataId.map(el => {
      //     if (el === prod._id) {
      //       prod = {
      //         img: products[index].img,
      //         title: products[index].title,
      //         number: products[index].number,
      //         price: products[index].price,
      //         info: products[index].info
      //       }
      //       console.log(prod)
      //     }
      //     return prod
      //   })
      //   return prod
      // })
      // console.log(items)
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
    const userId = localStorage.getItem('user')
    ApiService.delete({
      resource: `cart/${userId}/${productId}`,
      params: productId
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
          <CardCart cart={cart} prods={prods} setState={setState} deleteOne={deleteOne}/>
        </div>
        <div className={styles.downer}>
          <CartPay cart={cart} setState={setState} checkOut={checkOut}/>
        </div>
      </div>
    </Container>
  );
}

export default Cart