import React, {useCallback, useEffect, useState} from "react";
import {Alert, Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

import styles from "./styles.module.scss";
import Container from "@material-ui/core/Container";
import ApiService from "../../api/base";




const SignIn = () => {

    const [error, setError] = useState(null)
    const [counter, setCounter] = useState(5)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = useCallback( (values) => {
        console.log(values)
        let body = {
            email: values.email,
            password: values.password
        }
        let user = {}
        ApiService.post({
            resource: `auth/login`,
            params: {
                ...body
            }
        }).then(({data})=>{
            console.log(data)
            user = {
                name:data.name
            }
            alert(`good`)
            ApiService.post({
                resource: `auth/login`,
                params: {
                    ...body
                }
            }).then((data)=>{
                console.log(data)
                user = {...user, token: data.token}
                console.log(data)
            })
        })
          .catch((e)=>{
              e && console.log(e.message)
              setError(e.message)
          })
    }, []);

    useEffect(()=>{
        if(error && counter){
            setTimeout(()=>{ setCounter((prevState) => prevState - 1)},1000)
        } else{
            setCounter(7)
            setError(null)
        }
    },[error, counter])

    const handleClick = () => {
        onSubmit({email,password})
    }

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
                                            onChange={(event)=> {setEmail(event.target.value)}}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Control
                                            className="signUpFormControls"
                                            size="lg"
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            onChange={(event)=> {setPassword(event.target.value)}}
                                        />
                                    </Form.Group>
                                    <Button variant="primary" className={styles.signUpButton} onClick={() => handleClick()}>
                                        Sign In
                                    </Button>
                                </Form>
                                {error&&<Alert variant={"danger"} closeLabel="asdsadsaada" onClose={() => setError(false)} show={error}>
                                    {error}
                                </Alert>}
                            </div>
                        </Container>
                    </div>
                </div>)}

export default SignIn;