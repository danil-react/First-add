import React, {useState} from "react";
import styles from "./styles.module.scss"
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const addValueToCart = (cart, value, product) => {
  const {id} = product;
  const isProductExist = cart.some(item => item.id === id);
  if (isProductExist) {
    return cart.map(item => {
      if (item.id === id) {
        return {
          ...item,
          number: Number(value)
        }
      }
      return item
    })
  }
  return [...cart, {...product, number: value}]
}

const Local = ({product, setState}) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    setValue(+e.target.value);
    if (e.target.value > product.total) {
      return setError('Erorr: There is not enough stock to add' + " " + [product.title] + " " + "to you cart")
    }
    setError(null)
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (value > product.total) {
    } else {
      setState((prevState) => {
        const {cart} = prevState
        const el = cart.find(el => el.id === product.id)
        const actualValue = el ? Number(value) + Number(el.number) : value;
        const valueForItem = el && el.total < actualValue ? el.number : actualValue;
        const isEnough = el ? el.total > value + el.number : true;
        if (!isEnough) setError('Erorr: There is not enough stock to add' + " " + [product.title] + " " + "to you cart")
        return ({...prevState, cart: addValueToCart(prevState.cart, valueForItem, product)})
      })
    }
  };

  return (
    <form>
      <div>
        <input value={value}
               onChange={handleChange}
               id="number"
               name="number"
               type="number"
        />
        <button onClick={handleClick} id={"AddToCart"}><AddShoppingCartIcon />Add to cart</button>

        {error && <p className={styles.error}>{error}</p>}
      </div>
    </form>
  )
}

export default Local