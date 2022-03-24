import React, { useState, useRef } from 'react';
import { Overlay, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './DetailDataAfterHeader.css'

function BorrowDetailRightSideOptions() {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    return (
        <>

            <p>
                <span style={{ color: "#7D5FD7", fontWeight: "500" }}>STATUS:</span> <span style={{ color: "white" }}>LISTED</span>
                <span style={{ float: "right" }}>
                    <i class="fa fa-refresh bg-light" style={{ borderRadius: "100%", paddingLeft: "5px", paddingRight: "5px", paddingTop: "5px", paddingBottom: "5px", marginRight: "10px" }}></i>
                    <i class="fa fa-angle-left bg-light" style={{ borderRadius: "100%", paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px" }}></i>
                </span>
            </p>
            <p><span style={{ color: "#7D5FD7", fontWeight: "500" }}>OWNER:</span> <Link to="/lend/assets/details" style={{ color: "white" }}>39E001</Link></p>
            <p><span style={{ color: "#7D5FD7", fontWeight: "500" }}>OPENSEA:</span> <Link to="/lend/assets/details" style={{ color: "white" }}>VIEW ON OPENSEA</Link></p>
            <p style={{ color: "white", fontSize: "20px", lineHeight: "20px" }}>Desired terms: 65 wETH over 90 days Desired terms: 65 wETH over 90 days Desired terms: 65 wETH over 90 days Desired terms: 65 wETH over 90 days Desired terms: 65 wETH over 90 days Desired terms: 65 wETH over 90 days Desired terms: 65 wETH over 90 days Desired terms: 65 wETH over 90 days Desired terms: 65 wETH over 90 days Desired terms: 65 wETH over 90 days Desired terms: 65 wETH over 90 days Desired terms: 65 wETH over 90 days </p>
            <div className="getting_permission">
                <p style={{ color: "white", fontSize: "20px" }}>Set Desktop</p>
                <div>
                    <label></label>
                    <div style={{ display: "inline", marginRight:"10px", color:"white" }}><input type='radio' name='setDisplay' />Yes</div>
                    <label></label>
                    <div style={{ display: "inline", marginLeft:"10px", color:"white" }}><input type='radio' name='setDisplay' />No</div>
                </div>
            </div>
            <h6 className='text-white mt-2'>I need help for</h6>
            <button type="button" class="btn btn-dark mt-3" ref={target} onClick={() => setShow(!show)}>
                Let us Collateral
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

export default BorrowDetailRightSideOptions;
