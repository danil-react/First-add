import React, {useState} from "react";



const Local = ({products}) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)



  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(value,products)

    // if(value > products.total){
    //   console.log('ne mojno')
    // }else{
    //   console.log('mojno')
    // }
      // setError('Erorr')
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