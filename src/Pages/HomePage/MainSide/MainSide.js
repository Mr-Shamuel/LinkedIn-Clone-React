import React, { useEffect, useState } from 'react';
import './MainSide.css';
import Modal from '../../../Components/Modal/Modal';
import '../../../Components/Modal/Modal.css'
import axios from 'axios';
const MainSide = () => {

    const [modal, setModal] = useState(false);
    const [posts, setPosts] = useState([]);



    //getting post 
    const gettigPosts = () => {
        axios.get('https://63ac4337da81ba97617eebed.mockapi.io/LinkedIn')
            .then(res => setPosts(res.data))
    }

    // useEffect(() => {

    //     gettigPosts();
    // }) //here will rerander because no dependencies given



    const toggleModal = () => {

        setModal(!modal)
    }

    useEffect(() => {

        gettigPosts();
    }, [modal])


    return (
        <div className='MainSide_con'>
            <main>
                <div className="post">
                    <div className="search">
                        <img
                            src="https://media.licdn.com/dms/image/C4D03AQE-NHNMs2SOQA/profile-displayphoto-shrink_100_100/0/1655985618559?e=1681344000&amp;v=beta&amp;t=dWi-H9ZTCvGUMVHvT1nBQ8NEJLk3r-UsZ0j-FfvDfPE"
                            alt="Visit profile for Shamuel Molla"
                            id="ember1331"
                            className="EntityPhoto-circle-3 ember-view"

                        />

                        <input
                            className='start_a_post'
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Start a post"
                            onClick={toggleModal}
                        />


                        {/* <input
                            className='start_a_post'
                            type="button"

                            name="search"
                            id="search"
                            placeholder="Start a post"
                            value="Start a post"
                            onClick={toggleModal}
                        /> */}
                    </div>
                    <div className="media">
                        <div className="items" onClick={toggleModal}>
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
                                    d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"
                                ></path>
                            </svg>
                            <h6>Photo</h6>

                        </div>
                        <div className="items" onClick={toggleModal}>
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
                                    d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"
                                ></path>
                            </svg>
                            <h6>Video</h6>
                        </div>
                        <div className="items" onClick={toggleModal}>
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
                            <h6>Job</h6>
                        </div>
                        <div className="items" onClick={toggleModal}>
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
                                    d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"
                                ></path>
                            </svg>
                            <h6>Write article</h6>
                        </div>
                    </div>
                </div>

                {/* {modal && <Modal toggleModal={toggleModal} />} */}
                {modal && <Modal toggleModal={toggleModal} />}



                {/* <!-- newsfeed start here *************** --> */}
                {/* <div className="newsfeedCon">
                    <div className="newsfeed">
                        <div className="header">
                            <div className="profile">
                                <img
                                    src="https://media.licdn.com/dms/image/C4E0BAQFYYvw5asgdjQ/company-logo_100_100/0/1570240591021?e=1683763200&v=beta&t=PdlFHIx6NarWFfTYE1xXWrEOSq9OdBJtzmbwd-Cpt0I"
                                    alt=""
                                />
                                <h6>
                                    Project Management Institute
                                    <span> Promoted</span>
                                </h6>
                            </div>
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
                                    d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"
                                ></path>
                            </svg>


                        </div>
                        <div className="box">
                            <p>
                                Do you have an innovative practice ?
                            </p>
                            <img
                                src="https://media.licdn.com/dms/image/C4E22AQGkQIZgryL_mg/feedshare-shrink_800/0/1675605639925?e=1678320000&v=beta&t=YschkzLd4Gj6vTzKD8L04pv9HJiS0x9RPc4Tg8LNjNU"
                                alt=""
                            />

                            <div className="media">
                                <div className="items">
                                    <i className="fa-regular fa-thumbs-up fa-lg"></i>
                                    <h6>Like</h6>
                                </div>
                                <div className="items">
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
                                            d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"
                                        ></path>
                                    </svg>
                                    <h6>Comment</h6>
                                </div>
                                <div className="items">
                                    <i className="fa-solid fa-repeat fa-lg"></i>

                                    <h6>Repost</h6>
                                </div>
                                <div className="items">
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
                                            d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"
                                        ></path>
                                    </svg>
                                    <h6>Send</h6>
                                </div>
                            </div>
                        </div>


                    </div>
                </div> */}

                {
                    posts.map(post => {

                        const { id, desc, post_img } = post;

                        return (
                            <div className="newsfeedCon" key={id}>
                                <div className="newsfeed">
                                    <div className="header">
                                        <div className="profile">
                                            <img style={{ width: '50px', height: '50px', borderRadius: '50%' }} src="https://media.licdn.com/dms/image/C4D03AQE-NHNMs2SOQA/profile-displayphoto-shrink_100_100/0/1655985618559?e=1681948800&amp;v=beta&amp;t=aBNl79AGLra-LwLOujv_ThaAz5tDEqBJbuBan_M8hYI" loading="lazy" alt="Shamuel Molla" id="ember2440" className="presence-entity__image  ivm-view-attr__img--centered EntityPhoto-circle-3 update-components-actor__avatar-image EntityPhoto-circle-3 lazy-image ember-view" />
                                            <h6>
                                                Shamuel Molla
                                                <span> #1 Front End Developer🚀
                                                </span>
                                            </h6>
                                        </div>
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
                                                d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"
                                            ></path>
                                        </svg>


                                    </div>
                                    <div className="box">
                                        <p>
                                            {desc}
                                        </p>
                                        <img
                                            src={post_img}
                                            alt=""
                                        />

                                        <div className="media">
                                            <div className="items">
                                                <i className="fa-regular fa-thumbs-up fa-lg"></i>
                                                <h6>Like</h6>
                                            </div>
                                            <div className="items">
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
                                                        d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"
                                                    ></path>
                                                </svg>
                                                <h6>Comment</h6>
                                            </div>
                                            <div className="items">
                                                <i className="fa-solid fa-repeat fa-lg"></i>

                                                <h6>Repost</h6>
                                            </div>
                                            <div className="items">
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
                                                        d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"
                                                    ></path>
                                                </svg>
                                                <h6>Send</h6>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        );
                    })
                }
            </main>

        </div>
    );
};

export default MainSide;