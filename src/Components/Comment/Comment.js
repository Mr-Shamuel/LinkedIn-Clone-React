import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.Config';
import './Comment.css'

const Comment = ({ id }) => {
    const [user] = useAuthState(auth);
    const { displayName, photoURL } = user;
    const [text, setText] = useState('');
    const [showComment, setShowComment] = useState([])
    const [updateComment, setUpdateComment] = useState(false)

    const [comments, setComments] = useState([])
    const handleSubmit = (e) => {

        if (text.length > 0) {

            const updatedComments = [...comments, text];
            setComments(updatedComments);



            axios.put(`https://63f19d065b7cf4107e33fd7d.mockapi.io/Linkedin/${id}`, {

                comments: updatedComments
            })
                .then((res) => {



                    setText('');
                    setUpdateComment(!updateComment)


                })
                .catch(error => {
                    console.error('Error updating user', error);
                });
        }


        e.preventDefault();
    };


    // getting comment 

    useEffect(() => {
        axios.get(`https://63f19d065b7cf4107e33fd7d.mockapi.io/Linkedin/${id}`)
            .then(res => {
                setShowComment(res.data.comments)
            })
    }, [updateComment])


    return (
        <div className='commentCon'>
            <div className="comment">
                <img src={photoURL} alt="" />

                <form  >
                    <textarea onChange={(e) => setText(e.target.value)} type="text" value={text} style={{ resize: 'none' }} placeholder='Add a comment..' />
                    <div className="items">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                            <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                            <path d="M8 10.5A1.5 1.5 0 119.5 12 1.5 1.5 0 018 10.5zm6.5 1.5a1.5 1.5 0 10-1.5-1.5 1.5 1.5 0 001.5 1.5zm7.5 0A10 10 0 1112 2a10 10 0 0110 10zm-2 0a8 8 0 10-8 8 8 8 0 008-8zm-8 4a6 6 0 01-4.24-1.76l-.71.76a7 7 0 009.89 0l-.71-.71A6 6 0 0112 16z"></path>
                        </svg>
                    </div>

                    <div>

                    </div>
                </form>

            </div>

            {text.length > 0 && <button type="submit" onClick={handleSubmit}> Post</button>}









            {
                showComment?.map(x => (<div className='shwoCommnet'>

                    <img src={photoURL} alt="" />
                    <div className="content">
                        <h6>  {displayName}  </h6>

                        <p>{x}</p>
                    </div>

                </div>)
                )
            }




        </div>
    );
};

export default Comment;