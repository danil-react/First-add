import React from "react";

import Card from '../../components/Card'
const Home = () => {
   const arr = ['a','b']
    return(
        <div>
            {arr.map((item)=>(
                <Card name={item}/>
            ))}
        </div>
    );
}
export default Home