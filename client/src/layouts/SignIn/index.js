import React from "react";
import {Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

import * as yup from "yup";
import {Formik} from "formik";
import styles from "./styles.module.scss";
import Container from "@material-ui/core/Container";

const SignIn = () => {
    return (
                <div className="SignInForm">
                    <div className={styles.container}>
                        <Container>
                            <h1 className={styles.SignInHeading}>Log in to your account</h1>
                            <div className={styles.form}>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control
                                            type="email"
                                            placeholder="Email"
                                            name="email"
                                            className="signUpFormControls"
                                            size="lg"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Control
                                            className="signUpFormControls"
                                            size="lg"
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                        />
                                    </Form.Group>
                                    <Button variant="primary" className={styles.signUpButton} type="submit">
                                        Sign In
                                    </Button>
                                </Form>
                            </div>
                        </Container>
                    </div>
                </div>)}

export default SignIn;