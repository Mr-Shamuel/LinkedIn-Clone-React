
import React, { useState } from 'react';
import axios from 'axios';
import './PrivacyModal.css'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const PrivacyModal = ({ handlePrivecy, id }) => {

    const [privacy, setPrivacy] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (e) => {

        axios.put(`https://63f19d065b7cf4107e33fd7d.mockapi.io/Linkedin/${id}`, {
            privacy: privacy,

        })
            .then(() => {

                navigate('/home')


                handlePrivecy()


            })
            .catch(error => {
                console.error('Error updating user', error);
            })




        e.preventDefault();
    }

    return (
        <div className='privacyCon modalCon'>
            {(<div className="modal">
                <div className="overlay" onClick={handlePrivecy}></div>
                <div className="modal-content">
                    <div className="modal_header">
                        <h6>Change Privacy </h6>

                        <div className='close-modal' onClick={handlePrivecy}> <svg style={{ width: '18px', height: '18px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" focusable="false">
                            <path d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z"></path>
                        </svg></div>
                    </div>

                    <form onSubmit={handleSubmit}>




                        <div className="form_group">
                            <label  ><i className="fa-sharp fa-solid fa-earth-americas"></i> Anyone </label>

                            <input type="radio" name="privacy" value="Anyone" onChange={(e) => setPrivacy(e.target.value)} />


                        </div>
                        <div className="form_group">
                            <label  ><i className="fa-sharp fa-solid fa-user-group"></i> Friends  </label>
                            <input type="radio" name="privacy" value="Friends" onChange={(e) => setPrivacy(e.target.value)} />


                        </div>


                        {/* <button type="submit">Save</button> */}

                        {privacy ? <button type="submit"><i className="fa-sharp fa-solid fa-floppy-disk"></i> Save</button>
                            : <button disabled style={{ backgroundColor: 'rgb(191, 194, 191)', color: 'black', border: '1px solid grey', cursor: 'not-allowed' }} type="submit"><i className="fa-sharp fa-solid fa-floppy-disk"></i> Save</button>
                        }

                    </form>







                </div>


            </div>)}





        </div>
    );
};

export default PrivacyModal;