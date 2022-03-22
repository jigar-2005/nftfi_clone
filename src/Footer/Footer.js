import './Footer.css'
import { Accordion, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function Footer() {
    return (
        <>
            <div className='Footer py-5' expand="xxl" style={{ background: "#202020" }}>
                <div className="container-xxl">
                    <Container fluid="xxl" className='Footer_container'>
                        <div className="row footer_details_before_xxl_scrn">
                            <div className="col-3">
                                <ul className='footer_options'>
                                    <li><h6>Help</h6></li>
                                    <li><Link to="/" className='footer_options_link'>FAQ</Link></li>
                                    <li><Link to="/" className='footer_options_link'>Discord</Link></li>
                                </ul>
                            </div>
                            <div className="col-3">
                                <ul className='footer_options'>
                                    <li><h6>Lend / Borrow</h6></li>
                                    <li><Link to="/" className='footer_options_link'>Collateral</Link></li>
                                    <li><Link to="/" className='footer_options_link'>Loans</Link></li>
                                    <li><Link to="/" className='footer_options_link'>Offers</Link></li>
                                </ul>
                            </div>
                            <div className="col-3">
                                <ul className='footer_options'>
                                    <li><h6>About</h6></li>
                                    <li><Link to="/" className='footer_options_link'>NFTfi Statistics</Link></li>
                                    <li><Link to="/" className='footer_options_link'>Ambassadors</Link></li>
                                </ul>
                            </div>
                            <div className="col-3">
                                <ul className='footer_options'>
                                    <li><h6>Account</h6></li>
                                    <li><Link to="/" className='footer_options_link'>Profile</Link></li>
                                    <li><Link to="/" className='footer_options_link'>Swap ETH / wETH</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="footer_details_after_xxl_scrn">
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Help</Accordion.Header>
                                    <Accordion.Body>
                                        <Link to="/" className='footer_options_link'>FAQ</Link><br />
                                        <Link to="/" className='footer_options_link'>Discord</Link><br />
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Lend/Borrow</Accordion.Header>
                                    <Accordion.Body>
                                        <Link to="/" className='footer_options_link'>Collateral</Link><br />
                                        <Link to="/" className='footer_options_link'>Loans</Link><br />
                                        <Link to="/" className='footer_options_link'>Offers</Link><br />
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>About</Accordion.Header>
                                    <Accordion.Body>
                                        <Link to="/" className='footer_options_link'>NFTfi Statistics</Link><br />
                                        <Link to="/" className='footer_options_link'>Ambassadors</Link><br />
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Account</Accordion.Header>
                                    <Accordion.Body>
                                        <Link to="/" className='footer_options_link'>Profile</Link><br />
                                        <Link to="/" className='footer_options_link'>Swap ETH / wETH</Link><br />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>

                    </Container>
                </div>
            </div>
        </>
    );
}
export default Footer;



