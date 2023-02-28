import React, { useEffect, useState } from 'react';
import './signup.css';
import { useSignInWithGoogle, useCreateUserWithEmailAndPassword, useUpdateProfile, useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.Config';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner'
import { useFormik } from 'formik';
import SmallSpinner from '../../Components/Spinner/SmallSpinner';


const SignUp = () => {
    const [signInWithGoogle, user1] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, user, loading2, error2,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [showPassword, setShowPassword] = useState(false);
    const [Imagefiles, setImageFiles] = useState("");
    const [isdisabled, setIsDisabled] = useState(false)
    //update profile
    const [updateProfile] = useUpdateProfile(auth);
    const [isLoading, setIsLoading] = useState(false);
    const [loginUser] = useAuthState(auth);

    const navigate = useNavigate();
    if (loginUser) {
        navigate('/home')
    }



    // google signin 
    const handleGoogleSignIn = (e) => {

        signInWithGoogle()
            .then((res) => {
                // if success then  data will post to server (mock api)
                console.log(res)
                const name = res.user.displayName;
                const usersData = {
                    name,
                    email: res.user.email,
                    photoURL: res.user.photoURL
                }

                axios.post('https://63f19d065b7cf4107e33fd7d.mockapi.io/Users', usersData)
                    .then((result) => {
                        console.log("success")
                    })

            })

        e.preventDefault()
    }


    // redirect or location
    let location = useLocation();
    let from = location?.state?.pathname || '/home';

    useEffect(() => {
        if (user1 || user) {
            navigate(from, { replace: true });
        }
    }, [user1, user]);




    const initialValues = {
        name: '',
        email: '',
        password: '',
        photoURL: null

    }

    const onSubmit = values => {

        setIsLoading(true)
        setIsDisabled(true)



        // images 
        const formData = new FormData();
        formData.append("file", Imagefiles);
        formData.append("upload_preset", 'a1isxeb2');
        axios.post('https://api.cloudinary.com/v1_1/dx5tmn3oc/image/upload', formData)
            .then((res) => {

                createUserWithEmailAndPassword(values.email, values.password)
                    .then(() => {
                        updateProfile({ displayName: values.name, photoURL: res.data.secure_url })


                        const usersData = {
                            name: values.name,
                            email: values.email,
                            password: values.password,
                            photoURL: res.data.secure_url

                        }

                        //posting data to server 
                        axios.post('https://63f19d065b7cf4107e33fd7d.mockapi.io/Users', usersData)

                            .then((response) => {

                                setIsLoading(false)
                            });
                    })

            })


    }



    const validate = values => {
        let errors = {};

        //name
        if (!values.name) {
            errors.name = "Required";
        } else if (values.name.length < 2) {
            errors.name = "Name is too Short"
        } else if (values.name.length > 20) {
            errors.name = "Name is too Long"
        }
        //email
        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        //password 
        if (!values.password) {
            errors.password = "Required";
        } else if (values.password.length < 6) {
            errors.password = "Password is too Short"
        } else if (values.password.length > 20) {
            errors.password = "Password is too Long"
        }
        else if (! /(?=.*[0-9])/.test(values.password)) {
            errors.password = "Password must contain at least one digit"
        }
        else if (! /[a-zA-Z]/.test(values.password)) {
            errors.password = "Password must contain uppercase or lowercase letter"
        }
        //photo


        return errors;
    }
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate



    })


    //spinner 





    return (
        <div className='signUpCon'>


            <section>
                <div className="svg">


                    {/* <Link to='/home'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 21" preserveAspectRatio="xMinYMin meet" version="1.1" focusable="false" className="lazy-loaded">
                        <g className="inbug" stroke="none" strokeidth="1" fill="none" fill-rule="evenodd">
                            <path d="M19.479,0 L1.583,0 C0.727,0 0,0.677 0,1.511 L0,19.488 C0,20.323 0.477,21 1.333,21 L19.229,21 C20.086,21 21,20.323 21,19.488 L21,1.511 C21,0.677 20.336,0 19.479,0" className="bug-text-color" transform="translate(63.000000, 0.000000)"></path>
                            <path d="M82.479,0 L64.583,0 C63.727,0 63,0.677 63,1.511 L63,19.488 C63,20.323 63.477,21 64.333,21 L82.229,21 C83.086,21 84,20.323 84,19.488 L84,1.511 C84,0.677 83.336,0 82.479,0 Z M71,8 L73.827,8 L73.827,9.441 L73.858,9.441 C74.289,8.664 75.562,7.875 77.136,7.875 C80.157,7.875 81,9.479 81,12.45 L81,18 L78,18 L78,12.997 C78,11.667 77.469,10.5 76.227,10.5 C74.719,10.5 74,11.521 74,13.197 L74,18 L71,18 L71,8 Z M66,18 L69,18 L69,8 L66,8 L66,18 Z M69.375,4.5 C69.375,5.536 68.536,6.375 67.5,6.375 C66.464,6.375 65.625,5.536 65.625,4.5 C65.625,3.464 66.464,2.625 67.5,2.625 C68.536,2.625 69.375,3.464 69.375,4.5 Z" className="background" fill="#0a66c2"></path>
                        </g>
                        <g className="linkedin-text">
                            <path d="M60,18 L57.2,18 L57.2,16.809 L57.17,16.809 C56.547,17.531 55.465,18.125 53.631,18.125 C51.131,18.125 48.978,16.244 48.978,13.011 C48.978,9.931 51.1,7.875 53.725,7.875 C55.35,7.875 56.359,8.453 56.97,9.191 L57,9.191 L57,3 L60,3 L60,18 Z M54.479,10.125 C52.764,10.125 51.8,11.348 51.8,12.974 C51.8,14.601 52.764,15.875 54.479,15.875 C56.196,15.875 57.2,14.634 57.2,12.974 C57.2,11.268 56.196,10.125 54.479,10.125 L54.479,10.125 Z" fill="#0a66c2"></path>
                            <path d="M47.6611,16.3889 C46.9531,17.3059 45.4951,18.1249 43.1411,18.1249 C40.0001,18.1249 38.0001,16.0459 38.0001,12.7779 C38.0001,9.8749 39.8121,7.8749 43.2291,7.8749 C46.1801,7.8749 48.0001,9.8129 48.0001,13.2219 C48.0001,13.5629 47.9451,13.8999 47.9451,13.8999 L40.8311,13.8999 L40.8481,14.2089 C41.0451,15.0709 41.6961,16.1249 43.1901,16.1249 C44.4941,16.1249 45.3881,15.4239 45.7921,14.8749 L47.6611,16.3889 Z M45.1131,11.9999 C45.1331,10.9449 44.3591,9.8749 43.1391,9.8749 C41.6871,9.8749 40.9121,11.0089 40.8311,11.9999 L45.1131,11.9999 Z" fill="#0a66c2"></path>
                            <polygon fill="#0a66c2" points="38 8 34.5 8 31 12 31 3 28 3 28 18 31 18 31 13 34.699 18 38.241 18 34 12.533"></polygon>
                            <path d="M16,8 L18.827,8 L18.827,9.441 L18.858,9.441 C19.289,8.664 20.562,7.875 22.136,7.875 C25.157,7.875 26,9.792 26,12.45 L26,18 L23,18 L23,12.997 C23,11.525 22.469,10.5 21.227,10.5 C19.719,10.5 19,11.694 19,13.197 L19,18 L16,18 L16,8 Z" fill="#0a66c2"></path>
                            <path d="M11,18 L14,18 L14,8 L11,8 L11,18 Z M12.501,6.3 C13.495,6.3 14.3,5.494 14.3,4.5 C14.3,3.506 13.495,2.7 12.501,2.7 C11.508,2.7 10.7,3.506 10.7,4.5 C10.7,5.494 11.508,6.3 12.501,6.3 Z" fill="#0a66c2"></path>
                            <polygon fill="#0a66c2" points="3 3 0 3 0 18 9 18 9 15 3 15"></polygon>
                        </g>
                    </svg> </Link> */}
                </div>
                <h2>Make the most of your professional life</h2>

                <form onSubmit={formik.handleSubmit}>
                    <div className="form_group">
                        <label htmlFor='name'>Name</label>
                        <input onBlur={formik.handleBlur} type="name" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} />
                        {
                            formik.touched.name && formik.errors.name ? <p style={{ color: 'red', textAlign: 'left', paddingTop: '5px' }}>{formik.errors.name}</p> : null
                        }
                    </div>
                    <div className="form_group">
                        <label htmlFor='email'>Email</label>
                        <input onBlur={formik.handleBlur} type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} />
                        {
                            formik.touched.email && formik.errors.email ? <p style={{ color: 'red', textAlign: 'left', paddingTop: '5px' }}>{formik.errors.email}</p> : null
                        }
                    </div>

                    <div className="form_group">

                        <label htmlFor='password'>Password (6 or more characters)</label>
                        <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type={showPassword ? 'text' : 'password'} name="password" id="password" />



                        <label htmlFor="viewpass" style={{ marginTop: ' 5px' }}>
                            <input type="checkbox" id="viewpass" name="viewpass" onClick={() => setShowPassword(!showPassword)} />
                            {showPassword ? 'Hide' : 'Show'}</label>
                        {
                            formik.touched.password && formik.errors.password ? <p style={{ color: 'red', textAlign: 'left' }}>{formik.errors.password}</p> : null
                        }
                    </div>

                    <div className="form_group">
                        <label htmlFor='photoURL'>Add Photo</label>

                        <input type="file" onChange={(e) => setImageFiles(e.target.files[0])} />

                    </div>

                    <p>
                        By clicking Agree & Join, you agree to the LinkedIn
                        <Link to='/'>User Agreement</Link>,<Link to='/'>Privacy Policy</Link>, and
                        <Link to='/'>Cookie Policy</Link>.
                    </p>



                    {/* {
                        isdisabled ? <button disabled type='submit' style={{ cursor: 'not-allowed', backgroundColor: 'grey', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="agreeBtn"> {<SmallSpinner></SmallSpinner>} Agree & Join</button>
                            : <button type='submit' className="agreeBtn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}> {isLoading && <SmallSpinner></SmallSpinner>} Agree & Join</button>

                    } */}

                    {
                        Imagefiles.length === 0 ? <button disabled type='submit' style={{ cursor: 'not-allowed', backgroundColor: 'grey', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="agreeBtn">   Agree & Join</button>
                            : <button type='submit' className="agreeBtn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}> {isLoading && <SmallSpinner></SmallSpinner>} Agree & Join</button>

                    }





                    {
                        error2 && <p style={{ color: 'red', textAlign: 'center', paddingTop: '5px' }}> This account is already exists</p>
                    }




                    <div className="devider">
                        <div className="line"></div>
                        <h4>or</h4>
                        <div className="line"></div>
                    </div>

                    <div className="google"  >
                        <button className="googleBtn" onClick={handleGoogleSignIn}>
                            <img width="25px"
                                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                                alt="google Btn"
                            />
                            Continue with Google
                        </button>
                    </div>

                    <p className="alreadySign">
                        Already on LinkedIn?
                        <Link to='/signin'> Sign in</Link>
                    </p>

                </form>



                <p className="help">
                    Looking to create a page for a business? <Link to='/'>Get help</Link>
                </p>
            </section>





        </div>
    );
};

export default SignUp;