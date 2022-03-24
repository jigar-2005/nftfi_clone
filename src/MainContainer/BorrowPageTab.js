import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BorrowPageTab(props) {
    return (
        <>
            <div className='MainContainer' expand="xxl" style={{ background: "#16152D" }}>
                <div className="container-xxl">
                    <Container fluid="xxl" className='MainContainerData'>
                        <div class="btn-group w-100" role="group" aria-label="Basic example">
                            {props.page === "borrow_assets" ?
                                <Link to="/borrow/assets" type="button" class="btn btn-secondary p-3" style={{ background: "#383651", border: "0" }}><h5>Assets</h5></Link>
                                :
                                <Link to="/borrow/assets" type="button" class="btn btn-secondary p-3" style={{ background: "#26223E", border: "0" }}><h5>Assets</h5></Link>
                            }
                            {props.page === "borrow_loans" ?
                                <Link to="/borrow/loans" type="button" class="btn btn-secondary p-3 mx-2" style={{ background: "#383651", border: "0" }}><h5>Loans</h5></Link>
                                :
                                <Link to="/borrow/loans" type="button" class="btn btn-secondary p-3 mx-2" style={{ background: "#26223E", border: "0" }}><h5>Loans</h5></Link>
                            }
                            {props.page === "borrow_offers" ?
                                <Link to="/borrow/offers" type="button" class="btn btn-secondary p-3" style={{ background: "#383651", border: "0" }}><h5>Offers</h5></Link>
                                :
                                <Link to="/borrow/offers" type="button" class="btn btn-secondary p-3" style={{ background: "#26223E", border: "0" }}><h5>Offers</h5></Link>
                            }
                        </div>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default BorrowPageTab;
