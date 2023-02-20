import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Liked.css'
const Liked = ({ id }) => {
    const [like, setLike] = useState(true);

    const [isLike, setIsLike] = useState('');
    // updating liked functionality to server 
    const handleLike = (e) => {
        e.preventDefault()


        axios.put(`https://63f19d065b7cf4107e33fd7d.mockapi.io/Linkedin/${id}`, {
            like: like,

        })
            .then(response => {
                console.log('like successfully');
                setLike(!like);

            })
            .catch(error => {
                console.error('Error updating user', error);
            })
    }




    // getting likes value form server 

    // useEffect(() => {

    //     axios.get(`https://63f19d065b7cf4107e33fd7d.mockapi.io/Linkedin`)
    //         .then(res => {
    //             const [likes] = [...res.data] //destetuctring
    //             console.log(likes.like)
    //             setIsLike(likes.like)

    //         })
    // }, [])

    console.log(like, isLike)

    return (
        <div className='socialCon'>
            <div className="likeBtn" onClick={handleLike}>
                <div style={{ marginRight: '10px' }}  > {like ? <i className="fa-regular fa-thumbs-up fa-lg"></i> : < img width='20' src="https://static.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt" alt="" />}</div>
                <h6 style={like ? { color: 'black' } : { color: '#0a66c2' }}>Like</h6>
            </div>

        </div>
    );
};

export default Liked;