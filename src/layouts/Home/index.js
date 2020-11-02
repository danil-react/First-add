import React from "react";

import CardNew from '../../components/Card'
const Home = () => {
   const arr = ['a']
    return(
        <div>
            {arr.map((item)=>(
                <CardNew name={item}/>
            ))}
        </div>
    );
}
export default Home