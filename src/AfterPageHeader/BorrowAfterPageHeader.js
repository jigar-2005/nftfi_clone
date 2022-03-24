import '../Header/Header.css'
import { Container } from 'react-bootstrap';
import PageTab from '../MainContainer/PageTab';
import './AfterPageHeader.css'
import BorrowPageTab from '../MainContainer/BorrowPageTab';

function BorrowAfterPageHeader(props) {
    return (
        <>
            <div className='AfterPageHeader pt-3' expand="xxl" style={{ background: "#16152D" }}>
                <div className="container-xxl">
                    <Container fluid="xxl" className='main_container_style'>
                    <h2 className='page_title pt-4' style={{ color: "#CF2E8C", textShadow: "4px 4px 0 rgb(207 46 140 / 25%)", fontSize: "65px" }}>Borrow</h2>
                        <div class="sub-heading" style={{ fontWeight: "500", color: "white", fontSize: "25px" }}>Put your NFT assets up as collateral for a loan.</div>
                        <br /><br />
                        <br /><br />
                        <BorrowPageTab  page={props.page} />
                    </Container>
                </div>
            </div>
        </>
    );
}

export default BorrowAfterPageHeader;
