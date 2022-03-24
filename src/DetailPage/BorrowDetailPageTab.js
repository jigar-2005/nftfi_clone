import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BorrowDetailPageData(props) {
    return (
        <>
            <div className='DetailDataAfterHeader' expand="xxl" style={{ background: "#16152D" }}>
                <div className="container-xxl">
                    <Container fluid="xxl">
                        <div class="btn-group w-100" role="group" aria-label="Basic example">
                            {props.page === "borrow_assets_details" ?
                                <Link to="/borrow/assets/details" type="button" class="btn btn-secondary p-3" style={{ background: "#383651", border: "0" }}><h5>Details</h5></Link>
                                :
                                <Link to="/borrow/assets/details" type="button" class="btn btn-secondary p-3" style={{ background: "#26223E", border: "0" }}><h5>Details</h5></Link>
                            }
                            {props.page === "borrow_loans_details" ?
                                <Link to="/borrow/assets/details/loans" type="button" class="btn btn-secondary p-3 mx-2" style={{ background: "#383651", border: "0" }}><h5>Loans</h5></Link>
                                :
                                <Link to="/borrow/assets/details/loans" type="button" class="btn btn-secondary p-3 mx-2" style={{ background: "#26223E", border: "0" }}><h5>Loans</h5></Link>
                            }
                            <Link type="button" class="btn btn-secondary p-3 extra_tab" style={{ background: "#16152D", border: "0" }}><h5></h5></Link>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default BorrowDetailPageData;
