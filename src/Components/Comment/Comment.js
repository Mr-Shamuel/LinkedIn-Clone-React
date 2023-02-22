import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.Config';
import './Comment.css'

const Comment = ({ id }) => {

    const [text, setText] = useState([]);
    const [showComment, setShowComment] = useState('')

    const [user, loading, error] = useAuthState(auth);
    const { displayName, email, photoURL } = user;


    const handleSubmit = (event) => {
        event.preventDefault();

        axios.put(`https://63f19d065b7cf4107e33fd7d.mockapi.io/Linkedin/${id}`, {
            comment: text,

        })
            .then(response => {
                console.log('User updated successfully');
                setText('');
            })
            .catch(error => {
                console.error('Error updating user', error);
            });
    };


    //getting comment 

    axios.get(`https://63f19d065b7cf4107e33fd7d.mockapi.io/Linkedin/${id}`)
        .then(res => {
            setShowComment(res.data.comment)
        })
    return (
        <div className='commentCon'>
            <div className="comment">
                <img src={photoURL} alt="" />
                {/* <form onSubmit={handleSubmit}> */}
                <form  >
                    <textarea onChange={(e) => setText(e.target.value)} type="text" value={text} placeholder='Add a comment..' />
                    <div className="items">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                            <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                            <path d="M8 10.5A1.5 1.5 0 119.5 12 1.5 1.5 0 018 10.5zm6.5 1.5a1.5 1.5 0 10-1.5-1.5 1.5 1.5 0 001.5 1.5zm7.5 0A10 10 0 1112 2a10 10 0 0110 10zm-2 0a8 8 0 10-8 8 8 8 0 008-8zm-8 4a6 6 0 01-4.24-1.76l-.71.76a7 7 0 009.89 0l-.71-.71A6 6 0 0112 16z"></path>
                        </svg>
                    </div>

                </form>

            </div>
            {
                text.length > 0 && <button onClick={handleSubmit} type="submit" >  Post</button>
            }



            {
                showComment && <div className='shwoCommnet'>

                    <img src={photoURL} alt="" />
                    <div className="content">
                        <h6>  Shamuel Molla   </h6>

                        <p>{showComment}</p>
                    </div>

                </div>
            }



        </div>
    );
};

export default Comment;