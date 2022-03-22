import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PageTab(props) {
    return (
        <>
            <div className='MainContainer' expand="xxl" style={{ background: "#16152D" }}>
                <div className="container-xxl">
                    <Container fluid="xxl" className='MainContainerData'>
                        <div class="btn-group w-100" role="group" aria-label="Basic example">
                            {props.page === "lend_assets" ?
                                <Link to="/" type="button" class="btn btn-secondary p-3" style={{ background: "#383651", border: "0" }}><h5>Collateral</h5></Link>
                                :
                                <Link to="/" type="button" class="btn btn-secondary p-3" style={{ background: "#26223E", border: "0" }}><h5>Collateral</h5></Link>
                            }
                            {props.page === "lend_loans" ?
                                <Link to="/lend/loans" type="button" class="btn btn-secondary p-3 mx-2" style={{ background: "#383651", border: "0" }}><h5>Loans</h5></Link>
                                :
                                <Link to="/lend/loans" type="button" class="btn btn-secondary p-3 mx-2" style={{ background: "#26223E", border: "0" }}><h5>Loans</h5></Link>
                            }
                            {props.page === "lend_offers" ?
                                <Link to="/lend/offers" type="button" class="btn btn-secondary p-3" style={{ background: "#383651", border: "0" }}><h5>Offers</h5></Link>
                                :
                                <Link to="/lend/offers" type="button" class="btn btn-secondary p-3" style={{ background: "#26223E", border: "0" }}><h5>Offers</h5></Link>
                            }
                        </div>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default PageTab;
