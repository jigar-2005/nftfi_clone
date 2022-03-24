import './Header.css'
import React, { useState, useRef } from 'react';
import { Navbar, Container, NavDropdown, Nav, Button, Popover, Overlay } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
    const showNotificationAlert = (event) => {
        setShow(!show);
        setTarget(event.target);
    };
    const hideNotificationAlert = (event) => {
        setShow(!show);
        setTarget(event.target);
    };
    return (
        <>
            <Navbar className='header_navbar fixed-top pt-xxl-4' expand="xxl" style={{ background: "#383651" }}>
                <div className="container-xxl">
                    <Container fluid="xxl" className='header_navbar_container'>
                        <Link to="/" style={{ textDecoration: "none" }}><Navbar.Brand><img className='header_logo' src="https://static.wixstatic.com/media/0de4af_654a7e5b0f1e4d6eb734366045d7c8d1~mv2.png" alt="" height="80px" width="102px" /></Navbar.Brand></Link>
                        <Navbar.Toggle aria-controls="navbarScroll" style={{ float: "right" }} />
                        {/* data nhi datla abhi dalna hai 
                        <div id="header_option_after_xxl_scrn">
                            <Navbar.Collapse id="navbarScroll" navbarScroll style={{ height: "100%", background: "black" }}>madhur</Navbar.Collapse>
                        </div> */}
                        <div id='header_option_before_xxl_scrn' style={{ float: "right" }}>
                            <Nav className="me-auto my-2 my-lg-0">
                                <Link to='/' style={{ textDecoration: "none", paddingLeft: "235px" }}>
                                    <div className="lend_dropdown">
                                        <button className="lend_dropdown_btn" style={{ fontWeight: "500" }}>Lend</button>
                                        <div className="lend_dropdown_content text-center">
                                            <Link to='/' className='lend_dropdown_link'>Link 1</Link>
                                            <Link to='/' className='lend_dropdown_link'>Link 2</Link>
                                            <Link to='/' className='lend_dropdown_link'>Link 3</Link>
                                        </div>
                                    </div>
                                </Link>
                                <Link to='/borrow/assets' style={{ textDecoration: "none", paddingLeft: "20px" }}>
                                    <div className="borrow_dropdown">
                                        <button className="borrow_dropdown_btn" style={{ fontWeight: "500" }}>Borrow</button>
                                        <div className="borrow_dropdown_content text-center">
                                            <Link to='/' className='borrow_dropdown_link'>Link 1</Link>
                                            <Link to='/' className='borrow_dropdown_link'>Link 2</Link>
                                            <Link to='/' className='borrow_dropdown_link'>Link 3</Link>
                                        </div>
                                    </div>
                                </Link>
                                <Link to='/' style={{ textDecoration: "none", paddingLeft: "20px" }}>
                                    <div className="about_dropdown">
                                        <button className="about_dropdown_btn" style={{ fontWeight: "500" }}>About</button>
                                        <div className="about_dropdown_content text-center">
                                            <Link to='/' className='about_dropdown_link'>Link 1</Link>
                                            <Link to='/' className='about_dropdown_link'>Link 2</Link>
                                            <Link to='/' className='about_dropdown_link'>Link 3</Link>
                                        </div>
                                    </div>
                                </Link>
                                <Link to='/' className='py-3 px-5' style={{ textDecoration: "none", color: "white" }}>
                                    Account
                                </Link>
                                <Link to='/' className='py-3' style={{ textDecoration: "none", color: "white" }}>
                                    <div ref={ref}>
                                        <div onMouseOver={showNotificationAlert} onMouseOut={hideNotificationAlert}><i className="fa fa-bell"></i></div>
                                        <Overlay show={show} target={target} placement="bottom" container={ref} containerPadding={20}>
                                            <Popover id="popover-contained" style={{ width: "400px" }}>
                                                <Popover.Header as="h3" style={{ color: "black" }}>No new notifications</Popover.Header>
                                                <Popover.Body>
                                                    <button type="button" className="btn btn-outline-danger w-100">Danger</button>
                                                </Popover.Body>
                                            </Popover>
                                        </Overlay>
                                    </div>
                                </Link>
                                <div className='mt-2'>
                                    <p style={{ color: "white", borderRadius: "20px", border: "2px solid white", marginLeft: "20px" }} className="py-1 px-2"><img src="https://app.nftfi.com/images/crypto-icons/weth.png" alt="#" style={{ borderRadius: "100%" }} /> 0.00 <img src="https://app.nftfi.com/images/crypto-icons/dai.png" alt="#" style={{ borderRadius: "100%" }} /> 0.00</p>
                                </div>
                            </Nav>
                        </div>
                    </Container>
                </div>
            </Navbar>
        </>
    );
}

export default Header;
