import axios from 'axios';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import BaseUrl from '../../config/BaseUrl';
import { Notification } from '../../config/Notification';
export default function LoginLayout() {
  const navigate = useNavigate()
  const initialValues = {

    email: '',
    password: '',

  }
  const onSubmit = async (values) => {
    console.log("onSubmit vlaues", values)
    // setLoad(true);
    try {
      var formdata = new FormData();
      formdata.append("email", values.email);
      formdata.append("password", values.password);
      const response = await axios.post(`${BaseUrl.baseUrl}/login`, formdata)
      const { data } = response
      const { message, status, token } = data

      console.log(message, status ,token,data)
      if (status === true) {
        localStorage.setItem('token', token);
        Notification('success', message)

      navigate("/")
        // setShow(false);
        //       Total("")
        // token.id("")
        // PaymentMethodType("")
        // Tab("")
        // uid("")
        // sharepointType("")
      } else if (status === false) {

        // setShow(false);

        Notification('error', message)

      }



    } catch (error) {
      // handleClose()

      //   setLoad(false)
      console.log(error)
      Notification('error', error.message)

    }
  }
  const validationSchema = Yup.object({

    password: Yup.string()
      .min(8, 'password must be minimum 8!')
      .max(15, 'password must be maximum 15!')
      .required('password is Required!'),

    email: Yup.string().email('Invalid email format').required('Email is Required!'),



  })
  return (
    <>
<section className="login-wrap pt-100 pb-100">
  <img src="assets/img/shape-1.png" alt="Image" className="login-shape-1" />
  <img src="assets/img/shape-2.png" alt="Image" className="login-shape-2" />
  <div className="container">
    <div className="row">
      <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-8 offset-md-2">
    
        <div className="login-form">
          <div className="login-header bg-green">
            <h2 className="text-center mb-0">Login</h2>
          </div>
          <div className="login-body">
            <Formik   
              onSubmit={onSubmit}
                validationSchema={validationSchema}
                initialValues={initialValues}
                >

            <Form className="form-wrap" action="#">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="email">Username/Email/Phone</label>
                    <FastField id="email" name="email" type="email" placeholder="Email Address*" required />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <FastField id="password" name="password" type="password" placeholder="Password" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form_group mb-20">
                    <input type="checkbox" id="test_1" />
                    <label htmlFor="test_1">Remember Me</label>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 text-md-end mb-20">
                  <a href="forgot-pwd.html" className="link style2">Forgot Password?</a>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <button type='submit' className="btn style1 w-100 d-block">Log In </button>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="or-text">
                    <p>Or Login With</p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <ul className="social-profile style3 text-center mt-0 list-style">
                      <li><a target="_blank" href="https://instagram.com/"><i className="lab la-instagram" /></a></li>
                      <li><a target="_blank" href="https://twitter.com/"><i className="lab la-twitter" /></a></li>
                      <li><a target="_blank" href="https://facebook.com/"><i className="lab la-facebook-f" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-12 text-center">
                  <p className="mb-0">Don’t Have an Account? <a className="link style2" href="register.html">Create One</a></p>
                </div>
              </div>
            </Form>
            </Formik>
          </div>
        </div>
      
      </div>
    </div>
  </div>
</section>

    </>
  )
}
