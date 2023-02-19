import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/firebase.Config';
import './Navbar.css'
const Navbar = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='NavbarCon'>
            <nav>
                <div className="wraper">
                    <div className="left">
                        <div className="logo">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                data-supported-dps="24x24"
                                fill="currentColor"
                                className="mercado-match"
                                focusable="false"
                            >
                                <path
                                    d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
                                ></path>
                            </svg>
                        </div>

                        <div className="input">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                data-supported-dps="24x24"
                                fill="currentColor"
                                className="mercado-match"
                                width="24"
                                height="24"
                                focusable="false"
                            >
                                <path
                                    d="M21.41 18.59l-5.27-5.28A6.83 6.83 0 0017 10a7 7 0 10-7 7 6.83 6.83 0 003.31-.86l5.28 5.27a2 2 0 002.82-2.82zM5 10a5 5 0 115 5 5 5 0 01-5-5z"
                                ></path>
                            </svg>
                            <h6>Search</h6>
                            <input
                                type="search"
                                name="search"
                                id="search"
                                placeholder="Search"
                            />
                        </div>
                    </div>

                    <div className="right">
                        <div className="home">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                data-supported-dps="24x24"
                                fill="currentColor"
                                className="mercado-match"
                                width="24"
                                height="24"
                                focusable="false"
                            >
                                <path
                                    d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"
                                ></path>
                            </svg>
                            <h6>Home</h6>
                        </div>

                        <div className="network">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                data-supported-dps="24x24"
                                fill="currentColor"
                                className="mercado-match"
                                width="24"
                                height="24"
                                focusable="false"
                            >
                                <path
                                    d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"
                                ></path>
                            </svg>
                            <h6>My Network</h6>
                        </div>
                        <div className="jobs">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                data-supported-dps="24x24"
                                fill="currentColor"
                                className="mercado-match"
                                width="24"
                                height="24"
                                focusable="false"
                            >
                                <path
                                    d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"
                                ></path>
                            </svg>
                            <h6>Jobs</h6>
                        </div>

                        <div className="message">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                data-supported-dps="24x24"
                                fill="currentColor"
                                className="mercado-match"
                                width="24"
                                height="24"
                                focusable="false"
                            >
                                <path
                                    d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"
                                ></path>
                            </svg>
                            <h6>Messaging</h6>
                        </div>

                        <div className="notification">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                data-supported-dps="24x24"
                                fill="currentColor"
                                className="mercado-match"
                                width="24"
                                height="24"
                                focusable="false"
                            >
                                <path
                                    d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"
                                ></path>
                            </svg>
                            <h6>Notification</h6>
                        </div>

                        <div className="user">
                            <img
                                width="26"
                                src="https://media.licdn.com/dms/image/C4D03AQE-NHNMs2SOQA/profile-displayphoto-shrink_100_100/0/1655985618559?e=1681344000&amp;v=beta&amp;t=dWi-H9ZTCvGUMVHvT1nBQ8NEJLk3r-UsZ0j-FfvDfPE"
                                height="26"
                                alt="Shamuel Molla"
                                id="ember16"
                                className="global-nav__me-photo ember-view"
                            />
                            <Link to='/'><h6>Me</h6>
                                <i className="fa-solid fa-caret-down" style={{ fontSize: "15px" }}></i></Link>
                        </div>

                        <div className="work">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                data-supported-dps="24x24"
                                fill="currentColor"
                                className="mercado-match"
                                width="24"
                                height="24"
                                focusable="false"
                            >
                                <path
                                    d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"
                                ></path>
                            </svg>
                            <Link to='/' ><h6>Work</h6><i className="fa-solid fa-caret-down" style={{ fontSize: "15px" }}></i></Link>
                        </div>
                        <div className="jobPost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                data-supported-dps="24x24"
                                fill="currentColor"
                                width="24"
                                height="24"
                                focusable="false"
                            >
                                <circle
                                    cx="12"
                                    cy="4"
                                    r="2"

                                    style={{ isolation: "isolate" }}

                                    opacity=".75"
                                ></circle>
                                <path
                                    d="M21 10H3a1 1 0 00-1 1v10a1 1 0 001 1h18a1 1 0 001-1V11a1 1 0 00-1-1zm-5 9H8v-2h8v2zm2-4H6v-2h12v2z"
                                ></path>
                                <g opacity=".6">
                                    <path
                                        d="M9.57 5.75l-2.41 4.83 1.68.84 2.28-4.57a3 3 0 01-1.55-1.1zM14.43 5.75a3 3 0 01-1.55 1.1l2.28 4.57 1.68-.84z"

                                        style={{ isolation: "isolate" }}
                                        opacity=".55"
                                    ></path>
                                </g>
                            </svg>
                            <h6>Post a job</h6>
                        </div>

                        {
                            user ? <Link onClick={() => signOut(auth)} >SignOut</Link>
                                : <Link to='/signin'  >Sign In</Link>
                        }
                    </div>
                </div>
            </nav >

        </div >
    );
};

export default Navbar;