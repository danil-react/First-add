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
        <div className={styles.oneCard}>
        <Card className={classes.root}>

            <CardActionArea onClick={() => {
              onOpen(index)
            }}>
              <div>
                <CardMedia
                  className={styles.cardImage}
                  image={item.img}
                  title="Contemplative Reptile"
                />
              </div>
              <div className={styles.content}>
                <CardContent>
                  <div className={styles.title}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.title}
                    </Typography>
                  </div>
                  <div className={styles.price}>
                    <Typography variant="body2" color="textSecondary" component="p">
                      ${item.price}
                    </Typography>
                  </div>
                </CardContent>
              </div>
            </CardActionArea>

        </Card>
        </div>
      ))}
    </div>
  );
}

export default CardNew;
