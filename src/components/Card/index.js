import React from "react";
import styles from "./styles.module.scss"
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";

const CardNew = ({products, onOpen}) => {
console.log(products)
    const useStyles = makeStyles({
        root: {
            maxWidth: 700,
        },
        media: {
            height: 200,
        },
    });


    const classes = useStyles();
    return (
        <div className={styles.card}>
            {products.map((item, index) => (
                <Card className={classes.root}>
                    <CardActionArea onClick={() => {
                        onOpen(index)
                    }}>
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
