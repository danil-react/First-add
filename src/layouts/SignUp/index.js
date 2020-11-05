import React from "react";

import {Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import styles from "./styles.module.scss";
import Container from "@material-ui/core/Container";

const SignUp = () => {
    return (
        <div className={styles.container}>
            <div >
                <h2>Create an account</h2>
            </div>
            <Container>
                <div className={styles.form}>
                    <Form>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder="Name"/>
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"/>
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"/>
                        </Form.Group>
                        <Button type="submit" >Submit</Button>
                    </Form>
                </div>
            </Container>
        </div>
    );
}
export default SignUp