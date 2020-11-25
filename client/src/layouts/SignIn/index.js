import React, {useCallback, useEffect, useState} from "react";
import {Alert, Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {withRouter} from 'react-router'
import styles from "./styles.module.scss";
import Container from "@material-ui/core/Container";
import ApiService from "../../api/base";

const SignIn = ({history, setState}) => {

  const [error, setError] = useState(null)
  const [counter, setCounter] = useState(5)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = useCallback((values) => {
    console.log(values)
    let body = {
      email: values.email,
      password: values.password
    }

    ApiService.post({
      resource: `auth/login`,
      params: {
        ...body
      }
    }).then(({data}) => {
      console.log(data, 'login1')
      localStorage.setItem('token', data.token)
      history.push('/')
    })
      .catch((e) => {
        e && console.log(e.message)
        setError(e.message)
      })
  }, []);

  useEffect(() => {
    if (error && counter) {
      setTimeout(() => {
        setCounter((prevState) => prevState - 1)
      }, 1000)
    } else {
      setCounter(7)
      setError(null)
    }
  }, [error, counter])

  const handleClick = () => {
    onSubmit({email, password})
  }

  return (
    <div className="SignInForm">
      <div className={styles.container}>
        <Container>
          <div className={styles.alert}>
            <h1 className={styles.SignInHeading}>Log in to your account</h1>
            {error && <Alert
              variant={"danger"}
              closeLabel="asdsadsaada"
              onClose={() => setError(false)} show={error}>
              {error}
            </Alert>}
          </div>
          <div className={styles.form}>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="signUpFormControls"
                  size="lg"
                  onChange={(event) => {
                    setEmail(event.target.value)
                  }}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  className="signUpFormControls"
                  size="lg"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(event) => {
                    setPassword(event.target.value)
                  }}
                />
              </Form.Group>
              <Button variant="primary" className={styles.signUpButton} onClick={() => handleClick()}>
                Sign In
              </Button>
            </Form>
          </div>
        </Container>
      </div>
    </div>)
}

export default withRouter(SignIn);