import { Container } from 'react-bootstrap';

function LoanDetailPage() {
    return (
        <>
            <div className='DetailDataAfterHeader pt-3 pb-5' expand="xxl" style={{ background: "#383651" }}>
                <div className="container-xxl">
                    <Container fluid="xxl" className='main_container_detail_data_after_header'>
                    <div style={{ background: "#383651" }}>
                            <h1 className='text-center text-light mt-5'>No Data</h1>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default LoanDetailPage;
