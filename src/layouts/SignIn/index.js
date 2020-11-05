import React from "react";

import {Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import Container from "@material-ui/core/Container";

import styles from "./styles.module.scss";

const SignIn = () => {
    return (
        <div className={styles.container}>
            <div >
                <h2>Log in on your account</h2>
            </div>
            <Container>
                <div className={styles.form}>
                    <Form >
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button type="submit" onclick='validate()'>Submit</Button>

                    </Form>
                </div>
            </Container>
        </div>
    );
}
export default SignIn
