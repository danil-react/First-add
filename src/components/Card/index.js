import React from "react";

import styles from "./styles.module.scss";
import img1 from "../../assets/images/lampA.png";
import img2 from "../../assets/images/lampB.png";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";




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
    const useStyles = makeStyles({
        root: {
            maxWidth: 800,
        },
        media: {
            height: 400,
        },
    });

    const classes = useStyles();

    return (
        <div className={styles.card}>
            {arr.map((item) => (
                <Card className={classes.root}>
                    <CardActionArea>
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
