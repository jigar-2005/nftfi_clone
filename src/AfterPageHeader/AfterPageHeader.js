import '../Header/Header.css'
import { Container } from 'react-bootstrap';
import PageTab from '../MainContainer/PageTab';
import './AfterPageHeader.css'

function AfterPageHeader(props) {
    return (
        <>
            <div className='AfterPageHeader pt-3' expand="xxl" style={{ background: "#16152D" }}>
                <div className="container-xxl">
                    <Container fluid="xxl" className='main_container_style'>
                    <h2 className='page_title pt-4' style={{ color: "#CF2E8C", textShadow: "4px 4px 0 rgb(207 46 140 / 25%)", fontSize: "65px" }}>Lead</h2>
                        <div class="sub-heading" style={{ fontWeight: "500", color: "white", fontSize: "25px" }}>Offer loans to other users on their non-fungible tokens.</div>
                        <br /><br />
                        <br /><br />
                        <PageTab page={props.page} />
                    </Container>
                </div>
            </div>
        </>
    );
}

export default AfterPageHeader;
