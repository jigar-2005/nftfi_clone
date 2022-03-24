import React, { useState, useRef } from 'react';
import { Container, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './DetailPageData.css'
import DetailRightSideOptions from './DetailRightSideOptions';
import DetailLeftSideOptions from './DetailLeftSideOptions';
import BorrowLeftSideOptions from '../MainContainer/BorrowLeftSideOptions';
import BorrowDetailRightSideOptions from './BorrowRightSideOptions';
import BorrowDetailLeftSideOptions from './BorrowDetailLeftSideOptions';

function BorrowDetailPageData() {
    return (
        <>
            <div className='DetailDataAfterHeader pt-5 pb-5' expand="xxl" style={{ background: "#383651" }}>
                <div className="container-xxl">
                    <Container fluid="xxl" className='main_container_detail_data'>
                        <div style={{ background: "#383651" }}>
                            <div className="row">
                                <div className="col-12 col-xxl-4 mb-3">
                                    <BorrowDetailLeftSideOptions />
                                </div>
                                <div className="collateral_right col-12 col-xxl-8">
                                    <BorrowDetailRightSideOptions />
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default BorrowDetailPageData;
