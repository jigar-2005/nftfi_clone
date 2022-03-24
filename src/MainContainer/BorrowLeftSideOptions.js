import React, { useState, useRef } from 'react';
import { Container, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PageTab from './PageTab';

function BorrowLeftSideOptions() {
    return (
        <>
            <Accordion defaultActiveKey="1">
                <Accordion.Item variant="dark" eventKey="0" style={{ background: "#221E37", color: "white" }}>
                    <Accordion.Header>Saved Searches [0]</Accordion.Header>
                    <Accordion.Body>
                        Saved Searches [0]
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" style={{ background: "#221E37", color: "white" }}>
                    <Accordion.Header>Project</Accordion.Header>
                    <Accordion.Body className='p-0'>
                        <input type="text" className='px-2 mx-2 mt-2' placeholder='Filter' style={{ width: "95%" }} />
                        <ul class="list-group">
                            <li class="list-group-item" style={{ background: "transparent", color: "white", border: "none" }}>
                                <div className="row">
                                    <div className="col-1">
                                        <input type="checkbox" style={{ zoom: "1.75", marginTop: "1.5px" }} />
                                    </div>
                                    <div className="col-2 px-4">
                                        <img src="https://img.freepik.com/free-vector/royal-watercolor-valentine-red-background_1340-4006.jpg?size=338&ext=jpg" alt="#" style={{ width: "25px", height: "25px", borderRadius: "100%" }} />
                                    </div>
                                    <div className="col-8">
                                        Art Blocks
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item" style={{ background: "transparent", color: "white", border: "none" }}>
                                <div className="row">
                                    <div className="col-1">
                                        <input type="checkbox" style={{ zoom: "1.75", marginTop: "1.5px" }} />
                                    </div>
                                    <div className="col-2 px-4">
                                        <img src="https://img.freepik.com/free-vector/royal-watercolor-valentine-red-background_1340-4006.jpg?size=338&ext=jpg" alt="#" style={{ width: "25px", height: "25px", borderRadius: "100%" }} />
                                    </div>
                                    <div className="col-8">
                                        Art Blocks
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item" style={{ background: "transparent", color: "white", border: "none" }}>
                                <div className="row">
                                    <div className="col-1">
                                        <input type="checkbox" style={{ zoom: "1.75", marginTop: "1.5px" }} />
                                    </div>
                                    <div className="col-2 px-4">
                                        <img src="https://img.freepik.com/free-vector/royal-watercolor-valentine-red-background_1340-4006.jpg?size=338&ext=jpg" alt="#" style={{ width: "25px", height: "25px", borderRadius: "100%" }} />
                                    </div>
                                    <div className="col-8">
                                        Art Blocks
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item" style={{ background: "transparent", color: "white", border: "none" }}>
                                <div className="row">
                                    <div className="col-1">
                                        <input type="checkbox" style={{ zoom: "1.75", marginTop: "1.5px" }} />
                                    </div>
                                    <div className="col-2 px-4">
                                        <img src="https://img.freepik.com/free-vector/royal-watercolor-valentine-red-background_1340-4006.jpg?size=338&ext=jpg" alt="#" style={{ width: "25px", height: "25px", borderRadius: "100%" }} />
                                    </div>
                                    <div className="col-8">
                                        Art Blocks
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item" style={{ background: "transparent", color: "white", border: "none" }}>
                                <div className="row">
                                    <div className="col-1">
                                        <input type="checkbox" style={{ zoom: "1.75", marginTop: "1.5px" }} />
                                    </div>
                                    <div className="col-2 px-4">
                                        <img src="https://img.freepik.com/free-vector/royal-watercolor-valentine-red-background_1340-4006.jpg?size=338&ext=jpg" alt="#" style={{ width: "25px", height: "25px", borderRadius: "100%" }} />
                                    </div>
                                    <div className="col-8">
                                        Art Blocks
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item" style={{ background: "transparent", color: "white", border: "none" }}>
                                <div className="row">
                                    <div className="col-1">
                                        <input type="checkbox" style={{ zoom: "1.75", marginTop: "1.5px" }} />
                                    </div>
                                    <div className="col-2 px-4">
                                        <img src="https://img.freepik.com/free-vector/royal-watercolor-valentine-red-background_1340-4006.jpg?size=338&ext=jpg" alt="#" style={{ width: "25px", height: "25px", borderRadius: "100%" }} />
                                    </div>
                                    <div className="col-8">
                                        Art Blocks
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item" style={{ background: "transparent", color: "white", border: "none" }}>
                                <div className="row">
                                    <div className="col-1">
                                        <input type="checkbox" style={{ zoom: "1.75", marginTop: "1.5px" }} />
                                    </div>
                                    <div className="col-2 px-4">
                                        <img src="https://img.freepik.com/free-vector/royal-watercolor-valentine-red-background_1340-4006.jpg?size=338&ext=jpg" alt="#" style={{ width: "25px", height: "25px", borderRadius: "100%" }} />
                                    </div>
                                    <div className="col-8">
                                        Art Blocks
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item" style={{ background: "transparent", color: "white", border: "none" }}>
                                <div className="row">
                                    <div className="col-1">
                                        <input type="checkbox" style={{ zoom: "1.75", marginTop: "1.5px" }} />
                                    </div>
                                    <div className="col-2 px-4">
                                        <img src="https://img.freepik.com/free-vector/royal-watercolor-valentine-red-background_1340-4006.jpg?size=338&ext=jpg" alt="#" style={{ width: "25px", height: "25px", borderRadius: "100%" }} />
                                    </div>
                                    <div className="col-8">
                                        Art Blocks
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item" style={{ background: "transparent", color: "white", border: "none" }}>
                                <div className="row">
                                    <div className="col-1">
                                        <input type="checkbox" style={{ zoom: "1.75", marginTop: "1.5px" }} />
                                    </div>
                                    <div className="col-2 px-4">
                                        <img src="https://img.freepik.com/free-vector/royal-watercolor-valentine-red-background_1340-4006.jpg?size=338&ext=jpg" alt="#" style={{ width: "25px", height: "25px", borderRadius: "100%" }} />
                                    </div>
                                    <div className="col-8">
                                        Art Blocks
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item" style={{ background: "transparent", color: "white", border: "none" }}>
                                <div className="row">
                                    <div className="col-1">
                                        <input type="checkbox" style={{ zoom: "1.75", marginTop: "1.5px" }} />
                                    </div>
                                    <div className="col-2 px-4">
                                        <img src="https://img.freepik.com/free-vector/royal-watercolor-valentine-red-background_1340-4006.jpg?size=338&ext=jpg" alt="#" style={{ width: "25px", height: "25px", borderRadius: "100%" }} />
                                    </div>
                                    <div className="col-8">
                                        Art Blocks
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
}

export default BorrowLeftSideOptions;
