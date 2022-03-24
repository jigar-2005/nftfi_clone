import { Link } from 'react-router-dom';

function RightSideOptions() {
    return (
        <>
            <div style={{ background: "#221E37", width: "100%", height: "70px" }}>
                <h6 className='text-light p-2'>Applied Filters
                    <button type="button" class="btn btn-outline-light px-3 mx-1" style={{ background: "#16152C", float: "right", fontSize: "12px", color: "white" }}>close <i class="fa fa-close"></i></button>
                    <button type="button" class="btn btn-outline-light px-3 mx-1" style={{ background: "#221E37", float: "right", fontSize: "12px", color: "white" }}>save <i class="fa fa-download"></i></button>
                </h6>
            </div>
            <div style={{ background: "#221E37", width: "100%", height: "55px", marginTop: "10px" }}>
                <h6 className='text-light p-2'>Search Results
                    <span style={{ float: "right", border: "1px solid #16152C" }}>
                        <Link to="/list_view" type="button" class="btn px-2" style={{ background: "#16152C", fontSize: "12px", color: "white" }}>list view</Link>
                        <Link to="/" type="button" class="btn px-2" style={{ background: "#221E37", fontSize: "12px", color: "white" }}>card view</Link>
                    </span>
                </h6>
            </div>
            <div className="row">
                <div className="col-6 col-md-3 p-2">
                    <Link to="/lend/assets/details" style={{ textDecoration: "none" }}><div class="card">
                        <img src="https://lh3.googleusercontent.com/-pqfdUtFzviCI7XrGBms5pWZ5VO1EBPHTomXHGT5z9QvkSFiV5RxCnPmDKv9hcP3zeptB_9Dt9k4z-zXtVph66tmGL_sy9apJrHrl9E" alt="#" style={{ width: "100%", height: "200px" }} />
                        <div class="card-body text-center" style={{ background: "#221E37" }}>
                            <p style={{ fontSize: "12px", color: "#CF2E8C" }}>Capsule</p>
                            <h6 style={{ marginTop: "-10px", color: "white" }}>082453</h6>
                        </div>
                    </div></Link>
                </div>
                <div className="col-6 col-md-3 p-2">
                    <Link to="/lend/assets/details" style={{ textDecoration: "none" }}><div class="card">
                        <img src="https://lh3.googleusercontent.com/-pqfdUtFzviCI7XrGBms5pWZ5VO1EBPHTomXHGT5z9QvkSFiV5RxCnPmDKv9hcP3zeptB_9Dt9k4z-zXtVph66tmGL_sy9apJrHrl9E" alt="#" style={{ width: "100%", height: "200px" }} />
                        <div class="card-body text-center" style={{ background: "#221E37" }}>
                            <p style={{ fontSize: "12px", color: "#CF2E8C" }}>Capsule</p>
                            <h6 style={{ marginTop: "-10px", color: "white" }}>082453</h6>
                        </div>
                    </div></Link>
                </div>
                <div className="col-6 col-md-3 p-2">
                    <Link to="/lend/assets/details" style={{ textDecoration: "none" }}><div class="card">
                        <img src="https://lh3.googleusercontent.com/-pqfdUtFzviCI7XrGBms5pWZ5VO1EBPHTomXHGT5z9QvkSFiV5RxCnPmDKv9hcP3zeptB_9Dt9k4z-zXtVph66tmGL_sy9apJrHrl9E" alt="#" style={{ width: "100%", height: "200px" }} />
                        <div class="card-body text-center" style={{ background: "#221E37" }}>
                            <p style={{ fontSize: "12px", color: "#CF2E8C" }}>Capsule</p>
                            <h6 style={{ marginTop: "-10px", color: "white" }}>082453</h6>
                        </div>
                    </div></Link>
                </div>
                <div className="col-6 col-md-3 p-2">
                    <Link to="/lend/assets/details" style={{ textDecoration: "none" }}><div class="card">
                        <img src="https://lh3.googleusercontent.com/-pqfdUtFzviCI7XrGBms5pWZ5VO1EBPHTomXHGT5z9QvkSFiV5RxCnPmDKv9hcP3zeptB_9Dt9k4z-zXtVph66tmGL_sy9apJrHrl9E" alt="#" style={{ width: "100%", height: "200px" }} />
                        <div class="card-body text-center" style={{ background: "#221E37" }}>
                            <p style={{ fontSize: "12px", color: "#CF2E8C" }}>Capsule</p>
                            <h6 style={{ marginTop: "-10px", color: "white" }}>082453</h6>
                        </div>
                    </div></Link>
                </div>
                <div className="col-6 col-md-3 p-2">
                    <Link to="/lend/assets/details" style={{ textDecoration: "none" }}><div class="card">
                        <img src="https://lh3.googleusercontent.com/-pqfdUtFzviCI7XrGBms5pWZ5VO1EBPHTomXHGT5z9QvkSFiV5RxCnPmDKv9hcP3zeptB_9Dt9k4z-zXtVph66tmGL_sy9apJrHrl9E" alt="#" style={{ width: "100%", height: "200px" }} />
                        <div class="card-body text-center" style={{ background: "#221E37" }}>
                            <p style={{ fontSize: "12px", color: "#CF2E8C" }}>Capsule</p>
                            <h6 style={{ marginTop: "-10px", color: "white" }}>082453</h6>
                        </div>
                    </div></Link>
                </div>
                <div className="col-6 col-md-3 p-2">
                    <Link to="/lend/assets/details" style={{ textDecoration: "none" }}><div class="card">
                        <img src="https://lh3.googleusercontent.com/-pqfdUtFzviCI7XrGBms5pWZ5VO1EBPHTomXHGT5z9QvkSFiV5RxCnPmDKv9hcP3zeptB_9Dt9k4z-zXtVph66tmGL_sy9apJrHrl9E" alt="#" style={{ width: "100%", height: "200px" }} />
                        <div class="card-body text-center" style={{ background: "#221E37" }}>
                            <p style={{ fontSize: "12px", color: "#CF2E8C" }}>Capsule</p>
                            <h6 style={{ marginTop: "-10px", color: "white" }}>082453</h6>
                        </div>
                    </div></Link>
                </div>
                <div className="col-6 col-md-3 p-2">
                    <Link to="/lend/assets/details" style={{ textDecoration: "none" }}><div class="card">
                        <img src="https://lh3.googleusercontent.com/-pqfdUtFzviCI7XrGBms5pWZ5VO1EBPHTomXHGT5z9QvkSFiV5RxCnPmDKv9hcP3zeptB_9Dt9k4z-zXtVph66tmGL_sy9apJrHrl9E" alt="#" style={{ width: "100%", height: "200px" }} />
                        <div class="card-body text-center" style={{ background: "#221E37" }}>
                            <p style={{ fontSize: "12px", color: "#CF2E8C" }}>Capsule</p>
                            <h6 style={{ marginTop: "-10px", color: "white" }}>082453</h6>
                        </div>
                    </div></Link>
                </div>
                <div className="col-6 col-md-3 p-2">
                    <Link to="/lend/assets/details" style={{ textDecoration: "none" }}><div class="card">
                        <img src="https://lh3.googleusercontent.com/-pqfdUtFzviCI7XrGBms5pWZ5VO1EBPHTomXHGT5z9QvkSFiV5RxCnPmDKv9hcP3zeptB_9Dt9k4z-zXtVph66tmGL_sy9apJrHrl9E" alt="#" style={{ width: "100%", height: "200px" }} />
                        <div class="card-body text-center" style={{ background: "#221E37" }}>
                            <p style={{ fontSize: "12px", color: "#CF2E8C" }}>Capsule</p>
                            <h6 style={{ marginTop: "-10px", color: "white" }}>082453</h6>
                        </div>
                    </div></Link>
                </div>
                <div className="col-6 col-md-3 p-2">
                    <Link to="/lend/assets/details" style={{ textDecoration: "none" }}><div class="card">
                        <img src="https://lh3.googleusercontent.com/-pqfdUtFzviCI7XrGBms5pWZ5VO1EBPHTomXHGT5z9QvkSFiV5RxCnPmDKv9hcP3zeptB_9Dt9k4z-zXtVph66tmGL_sy9apJrHrl9E" alt="#" style={{ width: "100%", height: "200px" }} />
                        <div class="card-body text-center" style={{ background: "#221E37" }}>
                            <p style={{ fontSize: "12px", color: "#CF2E8C" }}>Capsule</p>
                            <h6 style={{ marginTop: "-10px", color: "white" }}>082453</h6>
                        </div>
                    </div></Link>
                </div>
                <div className="col-6 col-md-3 p-2">
                    <Link to="/lend/assets/details" style={{ textDecoration: "none" }}><div class="card">
                        <img src="https://lh3.googleusercontent.com/-pqfdUtFzviCI7XrGBms5pWZ5VO1EBPHTomXHGT5z9QvkSFiV5RxCnPmDKv9hcP3zeptB_9Dt9k4z-zXtVph66tmGL_sy9apJrHrl9E" alt="#" style={{ width: "100%", height: "200px" }} />
                        <div class="card-body text-center" style={{ background: "#221E37" }}>
                            <p style={{ fontSize: "12px", color: "#CF2E8C" }}>Capsule</p>
                            <h6 style={{ marginTop: "-10px", color: "white" }}>082453</h6>
                        </div>
                    </div></Link>
                </div>
                <div className="col-6 col-md-3 p-2">
                    <Link to="/lend/assets/details" style={{ textDecoration: "none" }}><div class="card">
                        <img src="https://lh3.googleusercontent.com/-pqfdUtFzviCI7XrGBms5pWZ5VO1EBPHTomXHGT5z9QvkSFiV5RxCnPmDKv9hcP3zeptB_9Dt9k4z-zXtVph66tmGL_sy9apJrHrl9E" alt="#" style={{ width: "100%", height: "200px" }} />
                        <div class="card-body text-center" style={{ background: "#221E37" }}>
                            <p style={{ fontSize: "12px", color: "#CF2E8C" }}>Capsule</p>
                            <h6 style={{ marginTop: "-10px", color: "white" }}>082453</h6>
                        </div>
                    </div></Link>
                </div>
                <div className="col-6 col-md-3 p-2">
                    <Link to="/lend/assets/details" style={{ textDecoration: "none" }}><div class="card">
                        <img src="https://lh3.googleusercontent.com/-pqfdUtFzviCI7XrGBms5pWZ5VO1EBPHTomXHGT5z9QvkSFiV5RxCnPmDKv9hcP3zeptB_9Dt9k4z-zXtVph66tmGL_sy9apJrHrl9E" alt="#" style={{ width: "100%", height: "200px" }} />
                        <div class="card-body text-center" style={{ background: "#221E37" }}>
                            <p style={{ fontSize: "12px", color: "#CF2E8C" }}>Capsule</p>
                            <h6 style={{ marginTop: "-10px", color: "white" }}>082453</h6>
                        </div>
                    </div></Link>
                </div>
            </div>
        </>
    );
}

export default RightSideOptions;
