import { ErrorMessage, FastField, Form, Formik } from 'formik';
import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import BaseUrl from '../../config/BaseUrl';
import { Notification } from '../../config/Notification';
import axios from 'axios';
import IconButton from "@material-ui/core/IconButton";

export default function RegisterLayout() {
  const [Msg ,SetMsg]=useState("")

  const [UpdateThumbnail, setUpdateThumbnail] = useState(null);
  const [Selectedprofile, setSelectedprofile] = useState("");
  const [profileimage, setprofileimage] = useState(null);
  const navigate = useNavigate()
  const initialValues = {

    email: '',
    password: '',
    country:'',
    fname:'',
    lname:'',
    city:'',
    state:''

  }
  const onSubmit = async (values) => {
    console.log("onSubmit vlaues", values)
    // setLoad(true);
    try {
      var formdata = new FormData();
      formdata.append("firstname",values.fname);
      formdata.append("lastname",values.lname);
      formdata.append("contactno", );
      formdata.append("email", values.email);
      formdata.append("password",values.password);
      formdata.append("country", "pakistan");
      formdata.append("state", values.state);
      formdata.append("city", values.city);
      formdata.append("profile", profileimage);
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

    lname: Yup.string()
    .required('Last Name is Required!'),
    
    fname: Yup.string()
    .required('First Name is Required!'),
    country: Yup.string()
    .required('Country is Required!'),
    city: Yup.string()
    .required('City is Required!'),
    state: Yup.string()
    .required('State is Required!'),

  })


  const handleInputFileChange = (event, func) => {
    var file = event.target.files[0];
    var reader = new FileReader();
    // console.log(file);
    const filesize = file.size;
    const filesizeround = Math.round(filesize / 2048);
    if (filesizeround > 2048) {
      // setupdateProfileImage(null)
      // setselectProfileImage(null)

      Notification(
        "error",
        "plz select your image less then and equals to 2mb"
      );
    } else {
      var url = reader.readAsDataURL(file);

      reader.onloadend = function (e) {
        setSelectedprofile(reader.result);
        setUpdateThumbnail(file);
      };

      func(event.target.files[0]);
    }
  };
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
            <h2 className="text-center mb-0">Register</h2>
          </div>
          <div className="login-body">
          <Formik   
              onSubmit={onSubmit}
                validationSchema={validationSchema}
                initialValues={initialValues}
                >
            <Form  className="form-wrap" >
              <div className="row">
                <div className="col-md-6 text-start">
                  <div className="form-group">
                    <label htmlFor="email">First Name</label>
                    <FastField id="fname" name="fname" type="text" placeholder="First Name*" required />
                    <ErrorMessage name='fname' component={"div"} className="text-danger"/>

                  </div>
                </div>
                <div className="col-md-6 text-start">
                  <div className="form-group">
                    <label htmlFor="email">Last Name</label>
                    <FastField id="lname" name="lname" type="text" placeholder="First Name*" required />
                    <ErrorMessage name='lname' component={"div"} className="text-danger"/>

                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <FastField id="email" name="email" type="email" placeholder="Email Address*" required />
                    <ErrorMessage name='email' component={"div"} className="text-danger"/>

                  </div>
                </div>
                <div className="col-lg-6 text-start">
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <FastField id="password" name="password" type="password" placeholder="Password" />
                    <ErrorMessage name='password' component={"div"} className="text-danger"/>

                  </div>
                </div>
                <div className="col-lg-6 text-start">
                  <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <FastField id="country" name="country" type="country" placeholder="Enter country" />
                    <ErrorMessage name='country' component={"div"} className="text-danger"/>

                  </div>
                </div>

                <div className="col-lg-6 text-start">
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <FastField id="city" name="city" type="text" placeholder="Enter Your City" />
                    <ErrorMessage name='city' component={"div"} className="text-danger"/>

                  </div>
                </div>
                <div className="col-lg-6 text-start">
                  <div className="form-group">
                    <label htmlFor="state">state</label>
                    <FastField id="state" name="state" type="state" placeholder="Enter country" />
                    <ErrorMessage name='state' component={"div"} className="text-danger"/>

                  </div>
                </div>
                <div className="col-md-6 justify-content-center">
                        <div className="upload_photo_main justify-content-center">
                          <label
                            htmlFor=""
                            className="font-18"
                            style={{ marginLeft: "20px" }}
                          >
                          
                          </label>
                          <input
                            onChange={(e) =>
                              handleInputFileChange(e, setprofileimage)
                            }
                            accept="image/*"
                            className={"d-none"}
                            name="image"

                            id="icon-button-file"
                            type="file"
                          />
                          <label htmlFor="icon-button-file">
                            <IconButton
                              color="#414141"
                              aria-label="upload picture"
                              component="span"
                              className="upload_photo_main"
                            >
                              <img
                                src={
                                  Selectedprofile
                                    ? Selectedprofile
                                    : "assets/img/dummy-profile-pic.png"
                                }
                                style={{
                                  minWidth: "100px",
                                  maxWidth: "100px",
                                  borderRadius: "600px",
                                }}

                                alt="resturent"
                                className="upload_photo_main img-fluid"
                              />
                            </IconButton>
                          </label>
                        </div>
                        {!profileimage?<div className='text-danger'>user image must be given</div>:null}
                      </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <button className="btn style1 w-100 d-block">Register</button>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="or-text">
                    <p>Or Register With</p>
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
                  <p className="mb-0">Already Have an Account? <a className="link style2" href="login.html">Login</a></p>
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
