import React from "react";

import styles from "./styles.module.scss";
import Container from "@material-ui/core/Container";

const Cart = () => {
    return (
        <div className={styles.container}>
            <Container>
                <div className={styles.goods}>
                    <div className={styles.left}>
                        <div className={styles.img}>
                            <p>image</p>
                        </div>
                        <div className={styles.info}>
                            <p>title</p>
                            <p>price</p>
                            <p>info</p>
                        </div>
                    </div>
                    <div className={styles.deleted}>
                        <p>button</p>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <div className={styles.price}>
                    <div className={styles.total}>
                        <p>Sub total:</p>
                    </div>
                    <div className={styles.check}>
                        <p>check out</p>
                    </div>
                </div>
            </Container>
        </div>
    );
}
export default Cart