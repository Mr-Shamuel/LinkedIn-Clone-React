import React, { useEffect } from 'react';
import './LeftSide.css'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.Config';

const LeftSide = () => {
    //for dynamic user
    const [user] = useAuthState(auth);
    const { displayName, photoURL } = user;
    console.log(user, photoURL)
    useEffect(() => {

        // if (user) {
        //     console.log('myUser', user);
        // }


    }, [user])



    return (
        <div className='leftSide_con'>
            <aside>
                <div className="left_sidebar">
                    <div className="top" >

                        {photoURL ? <img style={{ width: "80px", height: "80px" }} src={photoURL} alt="user img" /> : <img style={{ width: "80px", height: "80px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzhF6PzlSVIjBadF6VjfUIVEUB1ykAkQhHRB0ewaQV7oqC7lE_avQA9LDuG-HNjUhNX6M&usqp=CAU" alt="user img" />}


                    </div>
                    <div className="profile">
                        {displayName ? <Link to='/home'> <h6>{displayName}</h6></Link> : <Link onClick={e => window.location.reload(false)}> <h6>User Profile</h6></Link>}
                        <p>#1 Front End Developer🚀 | React.js developer |🤝 Partner</p>
                    </div>

                    <div className="view">
                        <div className="views tp">
                            <h6>Who's viewed your profile</h6>
                            <Link to='/'>389</Link>
                        </div>
                        <div className="views btm">
                            <h6>Impressions of your posts</h6>
                            <Link to='/'>6,309</Link>
                        </div>
                    </div>

                    <div className="premium">
                        <p>Access exclusive tools & insights</p>
                        <div className="access">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                data-supported-dps="24x24"
                                className="mercado-match"
                                width="20"
                                height="20"
                                focusable="false"
                            >
                                <path
                                    d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
                                    fill="#f8c77e"
                                ></path>
                                <path
                                    d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
                                    fill="#e7a33e"
                                ></path>
                            </svg>

                            <Link to='/'><h6>Get Hired Faster, Try Premium Free</h6></Link>
                        </div>
                        <div className="hr"></div>
                    </div>

                    <div className="saved">
                        <i className="fa-solid fa-bookmark"></i>
                        <h6>My items</h6>
                    </div>
                </div>

                <div className="left_sidebar_Discovery">
                    <div className="top">
                        <div className="items">
                            <Link to='/'>Groups</Link>
                            <Link to='/'>Events</Link>
                            <Link to='/'>Followed Hashtags</Link>
                        </div>
                        <i className="fa-solid fa-plus"></i>
                    </div>
                    <div className="discover">
                        <h6>Discover more</h6>
                    </div>
                </div>
            </aside>

        </div>
    );
};

export default LeftSide;