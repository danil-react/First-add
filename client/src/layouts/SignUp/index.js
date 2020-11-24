import React, {useCallback, useEffect, useState, useLayoutEffect} from "react";
import {Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Alert} from 'react-bootstrap'
import { withRouter } from 'react-router'
import * as yup from "yup";
import {Formik} from "formik";
import styles from "./styles.module.scss";
import Container from "@material-ui/core/Container";
import ApiService from "../../api/base";

const schema = yup.object({
    username: yup.string().required('Please Enter a username'),
    email: yup
        .string()
        .email()
        .required('Please Enter your Email'),
    password: yup
        .string()
        .required('Please Enter your password')
        .matches(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase and One Number "
        ),
    confirmPassword: yup
        .string()
        .required()
        .oneOf([yup.ref("password"), null], "Passwords must match")
});



const SignUp = ({history}) => {
  const [error, setError] = useState(null)
  const [counter, setCounter] = useState(5)

  const getData = useCallback(async (values) => {
    console.log(values)
    let body = {
      name: values.username,
      email: values.email,
      password: values.password
    }
    let user = {}
    ApiService.post({
      resource: `auth/registration`,
      params: {
        ...body
      }
    }).then(({data})=>{
      console.log(data)
      user = {
        name:data.name,
      }
      ApiService.post({
        resource: `auth/login`,
        params: {
          ...body
        }
      }).then((data)=>{
        console.log(data)
        localStorage.setItem('token',data.data.token)
        history.push('/')
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
    return (
        <Formik
            validationSchema={schema}
            onSubmit={(values) => getData(values)}
            initialValues={{
                username: "",
                email: "",
                confirmEmail: "",
                password: "",
                confirmPassword: ""
            }}
        >
            {({
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  values,
                  touched,
                  isValid,
                  errors,
              }) => (
                <div className="SignUpForm">
                    <div className={styles.container}>
                        <Container>
                            <h1 className={styles.SignInHeading}>Create an account</h1>
                            <div className={styles.form}>
                                <Form noValidate onSubmit={handleSubmit} action="signUp" method="post">
                                    <Form.Group controlId="formBasicUserName">
                                        <Form.Control
                                            size="lg"
                                            className="SignUpFormControls"
                                            type="text"
                                            name="username"
                                            value={values.username}
                                            onChange={handleChange}
                                            placeholder="Username"
                                            isInvalid={!!errors.username}
                                        />
                                        <Form.Control.Feedback className="FeedBack" type="invalid">
                                            {errors.username}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control
                                            type="email"
                                            placeholder="Email"
                                            value={values.email}
                                            onChange={handleChange}
                                            name="email"
                                            className="SignUpFormControls"
                                            size="lg"
                                            isInvalid={!!errors.email}
                                        />
                                        <Form.Control.Feedback className="FeedBack" type="invalid">
                                            {errors.email}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Control
                                            className="SignUpFormControls"
                                            size="lg"
                                            type="password"
                                            name="password"
                                            value={values.password}
                                            onChange={handleChange}
                                            placeholder="Password"
                                            isInvalid={!!errors.password}
                                        />
                                        <Form.Control.Feedback className="FeedBack" type="invalid">
                                            {errors.password}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicConfirmPassword">
                                        <Form.Control
                                            className="SignUpFormControls"
                                            size="lg"
                                            name="confirmPassword"
                                            onChange={handleChange}
                                            type="password"
                                            value={values.confirmPassword}
                                            placeholder="Confirm Password"
                                            isInvalid={!!errors.confirmPassword}
                                        /><Form.Control.Feedback className="FeedBack" type="invalid">
                                        {errors.confirmPassword}
                                    </Form.Control.Feedback>
                                    </Form.Group>
                                  <div className={styles.button}>
                                    <Button className={styles.SignUpButton} type="submit" >
                                      Registration
                                    </Button>
                                  </div>
                                </Form>
                            </div>
                        </Container>
                      {error&&<Alert variant={"danger"} onClose={() => setError(false)} show={error}>
                        {error}
                      </Alert>}
                    </div>
                </div>)}
        </Formik>
    );
};

export default withRouter (SignUp);