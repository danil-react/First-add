import React, { useState } from "react";

import img1 from "../../assets/images/lampA.png";
import img2 from "../../assets/images/lampB.png";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import {Modal} from "antd"
import ModalCard from './ModalCard.js'

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
    const [productIndex, setModal] = useState(null)
    const [isOpen, toggle] = useState(false);
    const useStyles = makeStyles({
        root: {
            maxWidth: 700,
        },
        media: {
            height: 200,
        },
    });

    const closeModal = () => {
        setModal(null);
        toggle(false)
    }
    const openModal = (index) => {
        console.log(index)
        setModal(index)
        toggle(true)
    }
    const classes = useStyles();
    const selectedProduct = arr.find((item, i) => i === productIndex)
console.log(selectedProduct)
    return (
        <div className={styles.card}>
            {arr.map((item, index) => (
                <Card className={classes.root} >
                    <CardActionArea onClick={()=>{openModal(index)} }>

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
            <Modal visible={isOpen} onOk={()=> console.log('function cart')} onCancel={closeModal}>
                <ModalCard setClose={() => setModal(null)} selectedProduct={selectedProduct} />

            </Modal>
        </div>
    );
}

export default CardNew;
