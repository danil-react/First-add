import React from "react";

import {Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import styles from "./styles.module.scss";
import Container from "@material-ui/core/Container";

// function Valid() {
//     const useFormField = (initialValue: string = '') => {
//         const [value, setValue] = React.useState(initialValue);
//         const onChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value), []);
//         return { value, onChange };
//     };
// }
//
// function useFormField() {
//     return undefined;
// }
//
// export function LoginForm() {
//     const emailField = useFormField();
//     const passwordField = useFormField();
//
//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         api.e(emailField.value, passwordField.value);
//     };

const SignIn = () => {
    return (



        <div className={styles.container}>
            <div >
                <h2>Log in on your account</h2>
            </div>
            <Container>
                <div className={styles.form}>
                    {/*onSubmit={handleSubmit}*/}
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
