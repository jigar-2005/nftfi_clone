import React, { useState, useRef } from 'react';
import { Overlay, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './DetailDataAfterHeader.css'

function DetailRightSideOptions() {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    return (
        <>

            <p>
                <span style={{ color: "#CF2E8C", fontWeight: "500" }}>STATUS:</span> <span style={{ color: "white" }}>LISTED</span>
                <span style={{ float: "right" }}>
                    <i class="fa fa-refresh bg-light" style={{ borderRadius: "100%", paddingLeft: "5px", paddingRight: "5px", paddingTop: "5px", paddingBottom: "5px", marginRight: "10px" }}></i>
                    <i class="fa fa-angle-left bg-light" style={{ borderRadius: "100%", paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px" }}></i>
                </span>
            </p>
            <p><span style={{ color: "#CF2E8C", fontWeight: "500" }}>OWNER:</span> <Link to="/lend/assets/details" style={{ color: "white" }}>39E001</Link></p>
            <p><span style={{ color: "#CF2E8C", fontWeight: "500" }}>OPENSEA:</span> <Link to="/lend/assets/details" style={{ color: "white" }}>VIEW ON OPENSEA</Link></p>
            <p style={{ color: "white", fontSize: "20px" }}>Desired terms: 65 wETH over 90 days</p>
            <div className="row">
                <div className="col-12 col-xxl-3 row px-2 m-0" style={{ background: '#383651' }}>
                    <p style={{ fontSize: "12px", color: "white", marginBottom: "-0px" }}>LOAN VALUE</p>
                    <select style={{ height: "30px", background: "#D8D8D8" }}>
                        <option value="select 1">select 1</option>
                        <option value="select 2">select 2</option>
                        <option value="select 3">select 3</option>
                        <option value="select 4">select 4</option>
                    </select>
                </div>
                <div className="col-12 col-xxl-3 row px-2 m-0" style={{ background: '#383651' }}>
                    <p style={{ fontSize: "12px", color: "white", marginBottom: "-0px" }}>LOAN VALUE</p>
                    <select style={{ height: "30px", background: "#D8D8D8" }}>
                        <option value="select 1">select 1</option>
                        <option value="select 2">select 2</option>
                        <option value="select 3">select 3</option>
                        <option value="select 4">select 4</option>
                    </select>
                </div>
                <div className="col-12 col-xxl-3 row px-2 m-0" style={{ background: '#383651' }}>
                    <p style={{ fontSize: "12px", color: "white", marginBottom: "-0px" }}>LOAN VALUE</p>
                    <div className="col-6 px-2 m-0">
                        <input type="text" />
                    </div>
                </div>
                <div className="col-12 col-xxl-3 row px-2 m-0" style={{ background: '#383651' }}>
                    <p style={{ fontSize: "12px", color: "white", marginBottom: "-0px" }}>LOAN VALUE</p>
                    <select style={{ height: "30px", background: "#D8D8D8" }}>
                        <option value="select 1">select 1</option>
                        <option value="select 2">select 2</option>
                        <option value="select 3">select 3</option>
                        <option value="select 4">select 4</option>
                    </select>
                </div>
            </div>
            <button type="button" class="btn btn-dark mt-3" ref={target} onClick={() => setShow(!show)}>
                Click me!
            </button>
            <Overlay target={target.current} show={show} placement="right">
                {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                        NFTfi needs your permission to manage your wETH
                    </Tooltip>
                )}
            </Overlay>
        </>
    );
}

export default DetailRightSideOptions;
