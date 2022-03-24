import React, { useState, useRef } from 'react';
import { Container, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LeftSideOptions from './LeftSideOptions';
import PageTab from './PageTab';
import RightSideOptions from './RightSideOptions';
import './MainContainer.css'
import ListViewRightSideOption from './ListViewRightSideOption';

function ListView() {
    return (
        <>
            <div className='MainContainer pt-3 pb-5' expand="xxl" style={{ background: "#383651" }}>
                <div className="container-xxl">
                    <Container fluid="xxl" className='main_container'>
                    <div style={{ background: "#383651" }}>
                            <div className="row">
                                <div className="collateral_left col-12 col-xxl-3">
                                    <LeftSideOptions />
                                </div>
                                <div className="collateral_right col-12 col-xxl-9">
                                    <ListViewRightSideOption />
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default ListView;
