import React, { useEffect, useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.Config';
import './sign.css'

import { useFormik } from 'formik';

import SmallSpinner from '../../Components/Spinner/SmallSpinner';

const SignIn = () => {
    const [signInWithEmailAndPassword, user1, loading1, error1,] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [loginUser] = useAuthState(auth);
    //email signin 
    const initialValues = {
        email: '',
        password: '',

    }

    //if user is login then redirect to home page
    if (loginUser) {
        navigate('/home')
    }

    // { loginUser && navigate('/home') }

    const onSubmit = values => {
        setIsLoading(true)
        signInWithEmailAndPassword(values.email, values.password)
            .then(() => {
                setIsLoading(false)
            })


    }

    const validate = values => {
        let errors = {};


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
        }

        return errors;

    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate



    })


    //google signing 
    const HandleGoogleSignIn = (e) => {
        signInWithGoogle()

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




    return (
        <div className="signinCOn">

            <section>
                <div className="svg">
                    <Link to='/home'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 21" preserveAspectRatio="xMinYMin meet" version="1.1" focusable="false" className="lazy-loaded">
                        <g className="inbug" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
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
                    </svg> </Link>
                </div>

                <div className="formCon">
                    <form onSubmit={formik.handleSubmit}>
                        <h4>Sign in</h4>
                        <p className="stayUpdate">Stay updated on your professional world</p>
                        <div className="form_group">
                            {
                                error1 && <p style={{ color: 'red', textAlign: 'center', paddingTop: '5px', marginBottom: '10px' }}> Wrong Email or Password</p>
                            }
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email or Phone"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}

                                value={formik.values.email}
                            />

                            {
                                formik.touched.email && formik.errors.email ? <p style={{ color: 'red', textAlign: 'left', fontSize: '12px', paddingTop: '5px' }}>{formik.errors.email}</p> : null
                            }
                        </div>

                        <div className="form_group">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                id="password"
                                placeholder="Password"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.password}

                            />

                            <label htmlFor="viewpass" style={{ marginTop: ' 5px' }}>
                                <input type="checkbox" id="viewpass" name="viewpass" onClick={() => setShowPassword(!showPassword)} />
                                {showPassword ? 'Hide' : 'Show'}</label>
                            {
                                formik.touched.password && formik.errors.password ? <p style={{ color: 'red', textAlign: 'left', fontSize: '12px', paddingTop: '5px' }}>{formik.errors.password}</p> : null
                            }


                        </div>

                        <p className="forget"><Link to='/'>Forgot password?</Link>.</p>


                        <button type='submit' className="agreeBtn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {isLoading && <SmallSpinner></SmallSpinner>}
                            SignIn</button>

                        <div className="devider">
                            <div className="line"></div>
                            <h4>or</h4>
                            <div className="line"></div>
                        </div>




                        <button type="button" className="googleBtn" onClick={HandleGoogleSignIn}>
                            <img width="25px"
                                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                                alt="google Btn"
                            />
                            Continue with Google
                        </button>


                        {/* <button type='button' className="AppleBtn" onClick={HandleGoogleSignIn}>
                            <img width="20px"
                                src="https://e7.pngegg.com/pngimages/109/296/png-clipart-apple-logo-apple-heart-logo-thumbnail.png"
                                alt="Apple Btn"
                            />
                            Sign in with Apple
                        </button> */}
                    </form>


                </div>
                <p className="help">
                    New to LinkedIn?
                    <Link to='/signup'>Join now</Link>
                </p>
            </section>

            {/* <footer>
                <div className="copyright">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"

                        viewBox="0 0 56 14"
                        preserveAspectRatio="xMinYMin meet"
                        version="1.1"
                        fill="CurrentColor"
                        focusable="false"
                        className="lazy-loaded"
                    >
                        <g className="inbug" fill-rule="evenodd">
                            <path
                                d="M14,1.25 L14,12.75 C14,13.44 13.44,14 12.75,14 L1.25,14 C0.56,14 0,13.44 0,12.75 L0,1.25 C0,0.56 0.56,0 1.25,0 L12.75,0 C13.44,0 14,0.56 14,1.25"
                                className="bug-text-color"
                                fill="#FFFFFF"
                                transform="translate(42.000000, 0.000000)"
                            ></path>
                            <path
                                d="M56,1.25 L56,12.75 C56,13.44 55.44,14 54.75,14 L43.25,14 C42.56,14 42,13.44 42,12.75 L42,1.25 C42,0.56 42.56,0 43.25,0 L54.75,0 C55.44,0 56,0.56 56,1.25 Z M47,5 L48.85,5 L48.85,6.016 L48.893,6.016 C49.259,5.541 50.018,4.938 51.25,4.938 C53.125,4.938 54,5.808 54,8 L54,12 L52,12 L52,8.75 C52,7.313 51.672,6.875 50.632,6.875 C49.5,6.875 49,7.75 49,9 L49,12 L47,12 L47,5 Z M44,12 L46,12 L46,5 L44,5 L44,12 Z M46.335,3 C46.335,3.737 45.737,4.335 45,4.335 C44.263,4.335 43.665,3.737 43.665,3 C43.665,2.263 44.263,1.665 45,1.665 C45.737,1.665 46.335,2.263 46.335,3 Z"
                                className="background"
                            ></path>
                        </g>
                        <g className="linkedin-text">
                            <path
                                d="M40,12 L38.107,12 L38.107,11.1 L38.077,11.1 C37.847,11.518 37.125,12.062 36.167,12.062 C34.174,12.062 33,10.521 33,8.5 C33,6.479 34.291,4.938 36.2,4.938 C36.971,4.938 37.687,5.332 37.97,5.698 L38,5.698 L38,2 L40,2 L40,12 Z M36.475,6.75 C35.517,6.75 34.875,7.49 34.875,8.5 C34.875,9.51 35.529,10.25 36.475,10.25 C37.422,10.25 38.125,9.609 38.125,8.5 C38.125,7.406 37.433,6.75 36.475,6.75 L36.475,6.75 Z"
                            ></path>
                            <path
                                d="M31.7628,10.8217 C31.0968,11.5887 29.9308,12.0627 28.4998,12.0627 C26.3388,12.0627 24.9998,10.6867 24.9998,8.4477 C24.9998,6.3937 26.4328,4.9377 28.6578,4.9377 C30.6758,4.9377 31.9998,6.3497 31.9998,8.6527 C31.9998,8.8457 31.9708,8.9997 31.9708,8.9997 L26.8228,8.9997 L26.8348,9.1487 C26.9538,9.8197 27.6008,10.5797 28.6358,10.5797 C29.6528,10.5797 30.2068,10.1567 30.4718,9.8587 L31.7628,10.8217 Z M30.2268,7.9047 C30.2268,7.0627 29.5848,6.4297 28.6508,6.4297 C27.6058,6.4297 26.9368,7.0597 26.8728,7.9047 L30.2268,7.9047 Z"
                            ></path>
                            <polygon
                                points="18 2 20 2 20 7.882 22.546 5 25 5 21.9 8.199 24.889 12 22.546 12 20 8.515 20 12 18 12"
                            ></polygon>
                            <path
                                d="M10,5 L11.85,5 L11.85,5.906 L11.893,5.906 C12.283,5.434 13.031,4.938 14.14,4.938 C16.266,4.938 17,6.094 17,8.285 L17,12 L15,12 L15,8.73 C15,7.943 14.821,6.75 13.659,6.75 C12.482,6.75 12,7.844 12,8.73 L12,12 L10,12 L10,5 Z"
                            ></path>
                            <path
                                d="M7,12 L9,12 L9,5 L7,5 L7,12 Z M8,1.75 C8.659,1.75 9.25,2.341 9.25,3 C9.25,3.659 8.659,4.25 8,4.25 C7.34,4.25 6.75,3.659 6.75,3 C6.75,2.341 7.34,1.75 8,1.75 L8,1.75 Z"
                            ></path>
                            <polygon points="0 2 2 2 2 10 6 10 6 12 0 12"></polygon>
                        </g>
                    </svg>
                    <p>&copy</p>
                    <p>2023</p>
                </div>

                <Link to='/'>User Agreement</Link>
                <Link to='/'>Privacy Policy</Link>
                <Link to='/'>Community Guidelines</Link>
                <Link to='/'>Cookie Policy</Link>
                <Link to='/'>Copyright Policy</Link>
                <Link to='/'>Send Feedback</Link>
                <Link to='/'>Languages</Link>
            </footer> */}
        </div>
    );
};

export default SignIn;