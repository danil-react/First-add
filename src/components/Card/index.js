import React, { useState } from "react";

import img1 from "../../assets/images/lampA.png";
import img2 from "../../assets/images/lampB.png";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";

import ModalCard from './components/ModalCard'

import styles from "./styles.module.scss"

const arr = [
    {
        img: img1,
        title: "Blue Desk",
        price: "$250.00",
    },
    {
        img: img2,
        title: "Gold Desk",
        price: "$200.00",

    },
]

const CardNew = () => {
    const [modal, setModal] = useState(null)
    const useStyles = makeStyles({
        root: {
            maxWidth: 700,
        },
        media: {
            height: 200,
        },
    });

    const classes = useStyles();
console.log(modal)
    return (
        <div className={styles.card}>
            {arr.map((item, index) => (
                <Card className={classes.root} >
                    {modal === index && <ModalCard id={index} setClose={() => setModal(null)}/>}
                    <CardActionArea onClick={()=>{setModal(index)}}>
                        <CardMedia
                            className={styles.cardImage}
                            image={item.img}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {item.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {item.price}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </div>
    );
}

export default CardNew;
