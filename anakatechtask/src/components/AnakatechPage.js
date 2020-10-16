import React, { useState } from 'react';
import './AnakatechPage.css';
import Modal from '../UI/Models/Modal';
import polygon from '../images/Polygon.png';
import woman from '../images/avatar-woman.png';
import man from '../images/avatar-man.png';
import icon1 from '../images/icons-globe.png';
import icon2 from '../images/icons-html.png';
import icon3 from '../images/icons-js.png';
import icon4 from '../images/icons-css.png';
import icon5 from '../images/icons-wordpress.png';

const AnakatechPage = () => {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const renderModal = () => {
        return (
            <Modal show={show}
                handleClose={handleClose}
                modalTitle={'Submit Successful'}
            >
                <a>Thank you for submitting your email !</a>
            </Modal>
        )
    }

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
     };

    return (
        <>
            <div className="main">
                <div className="hero">

                </div>

                <div className="layout">
                    <div className="submitContainer">
                        <h1>Lorem ipsum dolor sit amet</h1>
                        <input placeholder="EMAIL" />
                        <button type="submit" onClick={handleShow}>Lorem ipsum dolor sit amet</button>
                    </div>
                    <h1 className="firsth1">Lorem ipsum dolor sit amet</h1>

                    <div className="stepsContainer">
                        <div className="firstStep" style={{ display: 'flex', flexDirection: 'row' }}>
                            <h1 style={{ fontSize: '90px' }}>1</h1>
                            <div>
                                <h1>Lorem ipsum dolor</h1>
                                <span>Lorem ipsum dolor sit amet, consectetur</span>
                            </div>

                        </div>

                        <div className="polygon">
                            <img src={polygon}></img>
                        </div>

                        <div className="secondStep" style={{ display: 'flex', flexDirection: 'row' }}>

                            <h1 style={{ fontSize: '90px', }}>2</h1>
                            <div>
                                <h1>Lorem ipsum dolor</h1>
                                <span>Lorem ipsum dolor sit amet, consectetur</span>
                            </div>
                        </div>
                        <div className="polygon">
                            <img src={polygon}></img>
                        </div>


                        <div className="thirdStep" style={{ display: 'flex', flexDirection: 'row' }}>
                            <h1 style={{ fontSize: '90px' }}>3</h1>
                            <div>
                                <h1>Lorem ipsum dolor</h1>
                                <span>Lorem ipsum dolor sit amet, consectetur</span>
                            </div>
                        </div>
                    </div>

                        <h1 className="secondh1"> Curabitur ut facilisis arcu </h1>
                    
                    <div className="avatarContainer">
                        <div className="avatar">
                            <img src={woman} />
                            <div>
                                <h1>Lorem ipsum dolor</h1>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat quam sem, id facilisis odio tempus eu.</span>
                            </div>
                        </div>

                        <div className="avatar">
                            <img src={man} />
                            <div>
                                <h1>Lorem ipsum dolor</h1>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat quam sem, id facilisis odio tempus eu.</span>
                            </div>
                        </div>
                    </div>

                    <button onClick={scrollTop} className="orangeButton">Lorem ipsum dolor sit amet</button>

                    <div className="icons">
                        <a><img src={icon1} /></a>
                        <a><img src={icon2} /></a>
                        <a><img src={icon3} /></a>
                        <a><img src={icon4} /></a>
                        <a><img src={icon5} /></a>
                    </div>

                </div>

                {renderModal()}
            </div>
            <div className="footer">
                <div className="links">
                    <a style={{ color: 'black' }} href="">Lorem ipsum</a>
                    <a style={{ color: 'black' }} href="">Lorem ipsum</a>
                    <a style={{ color: 'black' }} href="">Lorem ipsum</a>
                </div>

                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc consequat quam sem, id facilisis odio tempus eu. Curabitur
                    ut facilisis arcu,sed vehicula risus. Ut faucibus ut sapien at
                    dictum. Ut ut elementum sem. Proin vulputate purus mauris.
                     </span>
            </div>
        </>
    )
}
export default AnakatechPage;