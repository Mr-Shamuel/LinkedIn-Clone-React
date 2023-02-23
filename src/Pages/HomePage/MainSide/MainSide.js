import React, { useEffect, useState } from 'react';
import './MainSide.css';
import Modal from '../../../Components/Modal/Modal';
import '../../../Components/Modal/Modal.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Liked from '../../../Components/Liked/Liked';
import Comment from '../../../Components/Comment/Comment';
import auth from '../../../Firebase/firebase.Config';
import { useAuthState } from 'react-firebase-hooks/auth';

import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';
// import 'react-toastify/dist/ReactToastify.css';
const MainSide = () => {

    const [modal, setModal] = useState(false);
    const [posts, setPosts] = useState([]);
    //for dynamic user
    const [user,] = useAuthState(auth);
    const { displayName, photoURL } = user;

    // delete 
    const [showBtn, setShowBtn] = useState(false)
    const [openBtn, setOpenBtn] = useState(null)
    const [del, setDel] = useState(false)
    // comment 

    const [comment, setComment] = useState(false)
    const [openComment, setOpenComment] = useState(null);


    const navigate = useNavigate()
    //getting post 
    const gettigPosts = () => {
        axios.get('https://63f19d065b7cf4107e33fd7d.mockapi.io/Linkedin')
            .then(res => setPosts(res.data))
    }

    const toggleModal = () => {
        navigate('/home')

        setModal(!modal)
    }

    useEffect(() => {

        gettigPosts();
    }, [modal, posts, showBtn, del])


    //delete posts 


    const handlePost = (id) => {
        setOpenBtn(id);
        setShowBtn(!showBtn)

    }
    const handleDeletePost = (id) => {




        setDel(true)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`https://63f19d065b7cf4107e33fd7d.mockapi.io/Linkedin/${id}`)
                    .then(() => {
                        Swal.fire(
                            'Deleted!',
                            'Your post has been deleted.',
                            'success'
                        )
                    }
                    )




            }
        })
    }

    // comment 



    const handleComment = (id) => {
        setOpenComment(id);
        setComment(!comment);
        console.log(comment)
    };



    return (
        <div className='MainSide_con'>
            <main>
                <div className="post">
                    <div className="search">

                        <img
                            src={photoURL}
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


                {modal && <Modal toggleModal={toggleModal} />}





                {
                    posts.map(post => {

                        const { id, desc, post_img, privacy } = post;
                        console.log("post", id)
                        return (
                            <div className="newsfeedCon" key={id}>
                                <div className="newsfeed">
                                    <div className="header">
                                        <div className="profile">
                                            <img style={{ width: '50px', height: '50px', borderRadius: '50%' }} src={photoURL} loading="lazy" alt="Shamuel Molla" id="ember2440" className="presence-entity__image  ivm-view-attr__img--centered EntityPhoto-circle-3 update-components-actor__avatar-image EntityPhoto-circle-3 lazy-image ember-view" />
                                            <h6>

                                                {displayName}
                                                <span> #1 Front End Developer🚀
                                                </span>
                                                {privacy === 'Anyone' ? <svg style={{ width: '12px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" focusable="false">
                                                    <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
                                                </svg>
                                                    :
                                                    <svg style={{ width: '12px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false"><path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path></svg>


                                                }
                                            </h6>
                                        </div>

                                        {/* delete button  */}

                                        <div>

                                            <svg className='postDeleteBtn' onClick={(e) => { handlePost(id) }}
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                data-supported-dps="24x24"
                                                fill="currentColor"
                                                width="24"
                                                height="24"
                                                focusable="false"
                                            >
                                                <path
                                                    d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"
                                                ></path>
                                            </svg>
                                            <br />

                                            {
                                                openBtn === id && showBtn && <button className='deleteBtn' onClick={() => { handleDeletePost(id) }}>Delete Post</button>
                                            }

                                        </div>

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
                                                <Liked id={id} ></Liked>

                                            </div>
                                            <div className="items" onClick={() => handleComment(id)}>
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


                                        {openComment === id && comment && <Comment id={id}></Comment>}

                                    </div>


                                </div>
                            </div>
                        );
                    })
                }
            </main>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />

        </div>
    );
};

export default MainSide;