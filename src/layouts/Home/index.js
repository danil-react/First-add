import React from "react";
import Container from "@material-ui/core/Container";

import CardNew from '../../components/Card'

const Home = () => {
   const arr = ['a']
    return(
        <Container>
       <div>
            {arr.map((item)=>(
                <CardNew name={item}/>
            ))}
        </div>
        </Container>
    );
}
export default Home