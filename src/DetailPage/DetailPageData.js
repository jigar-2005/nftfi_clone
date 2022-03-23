import React, { useState, useRef } from 'react';
import { Container, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './DetailPageData.css'
import DetailRightSideOptions from './DetailRightSideOptions';
import DetailLeftSideOptions from './DetailLeftSideOptions';

function DetailPageData() {
    return (
        <>
            <div className='DetailDataAfterHeader pt-5 pb-5' expand="xxl" style={{ background: "#383651" }}>
                <div className="container-xxl">
                    <Container fluid="xxl" className='main_container_detail_data'>
                        <div style={{ background: "#383651" }}>
                            <div className="row">
                                <div className="col-12 col-xxl-4 mb-3">
                                    <DetailLeftSideOptions />
                                </div>
                                <div className="collateral_right col-12 col-xxl-8">
                                    <DetailRightSideOptions />
                                </div>
                            </div>
                            <h5 className='text-white py-3'>OFFERS RECEIVED</h5>
                            <div className="row">
                                <div className="col">
                                    <ul>
                                        <li style={{ listStyleType: "none", color: "white" }}><h6>OFFERED BY</h6></li>
                                        <li style={{ listStyleType: "none" }}><Link to="/lend/assets/details" style={{ textDecoration: "none", color:"white" }}>0aff49</Link></li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <ul>
                                        <li style={{ listStyleType: "none", color: "white" }}><h6>	DURATION</h6></li>
                                        <li style={{ listStyleType: "none" }}><Link to="/lend/assets/details" style={{ textDecoration: "none", color:"white" }}>90 days</Link></li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <ul>
                                        <li style={{ listStyleType: "none", color: "white" }}><h6>LOAN VALUE</h6></li>
                                        <li style={{ listStyleType: "none" }}><Link to="/lend/assets/details" style={{ textDecoration: "none", color:"white" }}>52 wETH</Link></li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <ul>
                                        <li style={{ listStyleType: "none", color: "white" }}><h6>REPAYMENT</h6></li>
                                        <li style={{ listStyleType: "none" }}><Link to="/lend/assets/details" style={{ textDecoration: "none", color:"white" }}>58.473786 wETH</Link></li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <ul>
                                        <li style={{ listStyleType: "none", color: "white" }}><h6>APR</h6></li>
                                        <li style={{ listStyleType: "none" }}><Link to="/lend/assets/details" style={{ textDecoration: "none", color:"white" }}>50 %</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default DetailPageData;
