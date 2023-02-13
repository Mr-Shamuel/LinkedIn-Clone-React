import React from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import LeftSide from '../LeftSide/LeftSide';
import MainSide from '../MainSide/MainSide';
import RightSide from '../RightSide/RightSide';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <LeftSide></LeftSide>
                <MainSide></MainSide>
                <RightSide></RightSide>

            </div>
        </div>
    );
};

export default Home;