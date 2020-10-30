import React from "react";

import Card from '../../components/Card'
const Home = () => {
   const arr = ['a','b']
    return(
        <div>
            <h2>Home</h2>
            <h2>Home</h2> <h2>Home</h2> <h2>Home</h2> <h2>Home</h2> <h2>Home</h2>
            {arr.map((item)=>(
                <Card name={item}/>
            ))}
        </div>
    );
}
export default Home