import React, {useState, useEffect} from "react";

const addValueToCart = (cart, value, product) => {
  const {id} = product;
  console.log(cart)
  const isProductExist = cart.some(item => item.id === id);
  console.log(isProductExist, value, 222222)
  if (isProductExist) {
    return cart.map(item => {
      if (item.id === id) {
        return {
          ...item,
          number:  Number(value)
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

  useEffect(()=> {
    setState({
      cart: [
        {
          ...product,
          number: 0
        }
      ]
    })
  },[])

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
      console.log('ne mojno')
    } else {
      console.log('mojno')
      setState((prevState) => {
        const {cart} = prevState
        const el = cart.find(el => el.id === product.id)
        const isEnough  = el && el.total > value + el.number
        if(el.total < value + el.number) setError('Erorr: There is not enough stock to add' + " " + [product.title] + " " + "to you cart")
       return ({...prevState, cart: addValueToCart(prevState.cart,  isEnough ? value : product.total, product)})
      })
    }
  };

  return (
    <form>
      <div>
        <input value={value} onChange={handleChange} id="number" name="number" type="number"/>
        <button onClick={handleClick}>Add to cart</button>
        {error && <p>{error}</p>}
      </div>
    </form>
  )
}

export default Local