import React, {useCallback, useEffect, useLayoutEffect, useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "antd/dist/antd.css";

import Home from './layouts/Home'
import Cart from './layouts/Cart'
import SignIn from './layouts/SignIn'
import SignUp from './layouts/SignUp'
import NavbarNew from "./components/Navbar/Navbar";

import img1 from "./assets/images/lampA.png";
import img2 from "./assets/images/lampB.png";
import img3 from "./assets/images/lampC.png";
import img4 from "./assets/images/lampD.png";
import img5 from "./assets/images/lampE.png";
import ApiService from "./api/base";

// const arr = [
//   {
//     id: 1,
//     img: img1,
//     title: "Blue Desk",
//     price: "250.00",
//     info: "for poor people",
//     total: 5
//   },
//   {
//     id: 2,
//     img: img2,
//     title: "Gold Desk",
//     price: "200.00",
//     info: "for rich people",
//     total: 5
//   },
//   {
//     id: 3,
//     img: img3,
//     title: "Big Desk",
//     price: "500.00",
//     info: "for people with complexes",
//     total: 3
//   },
//   {
//     id: 4,
//     img: img4,
//     title: "Black Desk",
//     price: "150.00",
//     info: "for the men in black",
//     total: 3
//   },
//   {
//     id: 5,
//     img: img5,
//     title: "Old Desk",
//     price: "50.00",
//     info: "for your grandfather",
//     total: 3
//   },
// ]

const BasicExample = () => {
  // useLayoutEffect(() => {
  //   localStorage.setItem('products', JSON.stringify(arr))
  // }, [])
  const [products, setProducts] = useState([])

  const getAll = useCallback( () => {
    const allProducts = localStorage.getItem('products')
    ApiService.get({
      resource:`product/`,
      params: {
        allProducts
      }
    }).then(({data}) => {
      localStorage.setItem('products',JSON.stringify(data))
      setProducts(data)

    })
  },[])
  useLayoutEffect(() => {
    getAll()
  },[])

  const [state, setState] = useState({
    cart: [],
  })

  const {cart} = state;

  const numberOfCart = cart.map(item => item.number).reduce((acc, item) => {
    return acc + item
  }, 0)
  return (
    <Router>
      <div>
        <NavbarNew numberOfCart={numberOfCart}/>
        <Switch>
          <Route exact path="/">
            <Home setState={setState} products={products}/>
          </Route>
          <Route path="/cart">
            <Cart cart={cart} setState={setState} products={products}/>
          </Route>
          <Route path="/signIn">
            <SignIn cart={cart} setState={setState} products={products}/>
          </Route>
          <Route path="/signUp">
            <SignUp cart={cart} setState={setState} products={products}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default BasicExample