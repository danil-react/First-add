import React, {useState} from "react";

const addValueToCart = (cart, value, product) => {
  const {id} = product;
  const isProductExist = cart.some(item => item.id === id);
  if (isProductExist) {
    return cart.map(item => {
      if (item.id === id) {
        return {
          ...item,
          number: Number(item.number) + Number(value)
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
    setValue(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (value > product.total) {
      console.log('ne mojno')
      setError('Erorr')
    } else {
      console.log('mojno')
      setState((prevState) => ({...prevState, cart: addValueToCart(prevState.cart, value, product)}))
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