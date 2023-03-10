
import axios from 'axios';
import { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/firebase.Config';
import './Modal.css'
import CropImg from '../../Components/Cropping Images/CropImg'

const Modal = ({ toggleModal }) => {
    const [post, setPost] = useState('');
    // const [Imagefiles, setImageFiles] = useState("");
    const [select, setSelect] = useState("Anyone");
    const [isLoading, setIsLoading] = useState(false)
    const [isdisabled, setIsDisabled] = useState(false)
    //for dynamic user
    const [user,] = useAuthState(auth);
    const { displayName, photoURL } = user;

    const [Imagefiles, setImageFiles] = useState("");


    const inputRef = useRef(null);
    // const inputRef = useRef();


    //uploading text and image
    const handleSubmit = (e) => {

        //spinner
        setIsLoading(true)
        setIsDisabled(true)
        // text 

        if (post.length > 0 && Imagefiles.length === 0) {
            axios.post('https://63f19d065b7cf4107e33fd7d.mockapi.io/Linkedin', {
                //making object
                desc: post,
                post_img: " ",
                privacy: select


            })
                .then((response) => {
                    toggleModal();
                });
        }



        // images 
        const formData = new FormData();
        formData.append("file", Imagefiles);
        formData.append("upload_preset", 'a1isxeb2');





        //first uploading iamge .After upload then the post decription will upload to the server.
        axios.post('https://api.cloudinary.com/v1_1/dx5tmn3oc/image/upload', formData)
            .then((res) => {
                // console.log('Image upload successful:', res.data.secure_url);

                if (post.length !== 0) {
                    const postData = { //making object
                        desc: post,
                        post_img: res.data.secure_url,
                        privacy: select

                    }

                    //sending post description to the server
                    axios.post('https://63f19d065b7cf4107e33fd7d.mockapi.io/Linkedin', postData)
                        .then((response) => {

                            toggleModal();
                        });

                } else {

                    const postData = { //making object
                        desc: "",
                        post_img: res.data.secure_url,
                        privacy: select

                    }

                    //sending post description to the server
                    axios.post('https://63f19d065b7cf4107e33fd7d.mockapi.io/Linkedin', postData)
                        .then((response) => {
                            console.log(response.data)
                            toggleModal();
                        });
                }

            })
            .catch((error) => {
                console.error('Image upload failed:', error);
            });



        e.preventDefault();
    }


    return (
        <div className='modalCon'>
            {(<div className="modal">
                <div className="overlay" onClick={toggleModal}></div>
                <div className="modal-content">
                    <div className="modal_header">
                        <h6>Create a post</h6>

                        <div className='close-modal' onClick={toggleModal}> <svg style={{ width: '18px', height: '18px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" focusable="false">
                            <path d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z"></path>
                        </svg></div>
                    </div>
                    <div className="modal_main">
                        <div className="profile">
                            <img src={photoURL} id="ember1216" className="EntityPhoto-circle-2 lazy-image ember-view" alt='modal-img' />
                            <div className="visiblity">
                                <h6 className='name'>{displayName}</h6>




                                <div className='anyone'>
                                    <select style={{ border: 'none' }} value={select} onChange={(e) => setSelect(e.target.value)}>
                                        <option  >Anyone</option>
                                        <option  >Friends</option>


                                    </select>
                                </div>


                            </div>
                        </div>

                        <div className="editor_con">
                            <form onSubmit={handleSubmit}>
                                <textarea onChange={(e) => setPost(e.target.value)} type="text" value={post} style={{ resize: 'none' }} placeholder=' What you want to talk about?' />


                                <footer>
                                    <div className="hashTag">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                                            <path d="M8 10.5A1.5 1.5 0 119.5 12 1.5 1.5 0 018 10.5zm6.5 1.5a1.5 1.5 0 10-1.5-1.5 1.5 1.5 0 001.5 1.5zm7.5 0A10 10 0 1112 2a10 10 0 0110 10zm-2 0a8 8 0 10-8 8 8 8 0 008-8zm-8 4a6 6 0 01-4.24-1.76l-.71.76a7 7 0 009.89 0l-.71-.71A6 6 0 0112 16z"></path>
                                        </svg>



                                        <Link to='/home'>
                                            <h6>Add hashtag</h6>

                                        </Link>



                                    </div>


                                    {/* here i am hiding the image crop components  */}

                                    <div className="cropImgCon"  >

                                        <CropImg setImageFiles={setImageFiles} inputRef={inputRef}   ></CropImg>

                                    </div>


                                    <div className="selectMedia">
                                        <div className="left">
                                            <div onClick={(e) => (inputRef.current.click())} className="input_icon x1" >
                                                <span className="icon__text">
                                                    Add a photo
                                                </span>



                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                                                    <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                                                </svg>
                                                {/* <input type="file" onChange={(e) => setImageFiles(e.target.files[0])} ref={inputRef} hidden /> */}


                                                {Imagefiles.name && <p className='imageAvailable'>{Imagefiles.name}</p>}


                                            </div>
                                            <div onClick={(e) => (inputRef.current.click())} className="input_icon x2">

                                                <span className="icon__text">
                                                    Add a video
                                                </span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                                                    <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
                                                </svg>



                                            </div>
                                            <div onClick={(e) => (inputRef.current.click())} className="input_icon">
                                                <span className="icon__text">
                                                    Add a document
                                                </span>

                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                                                    <path d="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z"></path>
                                                </svg>


                                            </div>
                                            <div className="input_icon">
                                                <span className="icon__text">
                                                    Add to your post
                                                </span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                                                    <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
                                                </svg>


                                            </div>

                                            <div className="input_iconComment">

                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
                                                    <path d="M5 8h5v1H5zm11-.5v.08a6 6 0 01-2.75 5L8 16v-3H5.5A5.51 5.51 0 010 7.5 5.62 5.62 0 015.74 2h4.76A5.5 5.5 0 0116 7.5zm-2 0A3.5 3.5 0 0010.5 4H5.74A3.62 3.62 0 002 7.5 3.53 3.53 0 005.5 11H10v1.33l2.17-1.39A4 4 0 0014 7.58zM5 7h6V6H5z"></path>
                                                </svg>

                                                <h6>Anyone</h6>



                                            </div>


                                        </div>
                                        <div className="right">
                                            <div className="input_icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                                                    <g>
                                                        <path d="M2 12A10 10 0 1012 2 10 10 0 002 12zm2 0a8 8 0 118 8 8 8 0 01-8-8z"></path>
                                                        <path d="M15.1 12.63L13 11.42V7a1 1 0 00-2 0v5a1 1 0 00.51.85l2.59 1.52a1 1 0 101-1.74z"></path>
                                                    </g>
                                                </svg>




                                                {/* <input type="submit" value="Post" /> */}

                                                {
                                                    (Imagefiles.length !== 0 || post.length !== 0) ?

                                                        isdisabled ?
                                                            <button disabled style={{ cursor: 'not-allowed' }} type="submit" >{isdisabled && isLoading && <div className="spinner"   ></div>}  Post</button> :
                                                            <button type="submit" >{isdisabled && isLoading && <div className="spinner" ></div>}  Post</button>

                                                        :
                                                        <button disabled type="submit" value="Post" style={{ color: "grey", background: '#e2e2e2', cursor: 'not-allowed' }}>Post</button>



                                                }


                                            </div>

                                        </div>

                                    </div>
                                </footer>

                            </form>


                        </div>




                    </div>





                </div>


            </div>)}





        </div>
    );
};

export default Modal;