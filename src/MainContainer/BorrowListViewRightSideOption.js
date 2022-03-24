import { Link } from 'react-router-dom';
import BorrowRightSideOptions from './BorrowRightSideOptions';
import './ListView.css'
import RightSideOptions from './RightSideOptions';

function BorrowListViewRightSideOption() {
    return (
        <>
            <div className="list_view_before_xxl_scrn">
                <div style={{ background: "#221E37", width: "100%", height: "70px" }}>
                    <h6 className='text-light p-2'>Applied Filters
                        <button type="button" class="btn btn-outline-light px-3 mx-1" style={{ background: "#16152C", float: "right", fontSize: "12px", color: "white" }}>close <i class="fa fa-close"></i></button>
                        <button type="button" class="btn btn-outline-light px-3 mx-1" style={{ background: "#221E37", float: "right", fontSize: "12px", color: "white" }}>save <i class="fa fa-download"></i></button>
                    </h6>
                </div>
                <div style={{ background: "#221E37", width: "100%", height: "55px", marginTop: "10px" }}>
                    <h6 className='text-light p-2'>Search Results
                        <span style={{ float: "right", border: "1px solid #16152C" }}>
                        <Link to="/borrow/assets/listview" type="button" class="btn px-2" style={{ background: "#16152C", fontSize: "12px", color: "white" }}>list view</Link>
                        <Link to="/borrow/assets" type="button" class="btn px-2" style={{ background: "#221E37", fontSize: "12px", color: "white" }}>card view</Link>
                        </span>
                    </h6>
                </div>
                <table class="table">
                    <thead>
                        <tr style={{ background: "#0D0C1A", color: "white" }}>
                            <th scope="col">Name</th>
                            <th scope="col">Project</th>
                            <th scope="col">Owner</th>
                            <th scope="col">Terms</th>
                            <th scope="col">Status</th>
                            <th scope="col">Previus</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ background: "#221E37", color: "white" }}>
                            <td style={{ fontSize: "13px" }}><img src="https://openseauserdata.com/files/e2298afb5d5e38b49051b6cd7eab0512.svg" alt="" width="35px" height="35px" /> freshsauce.eth</td>
                            <td style={{ fontSize: "13px" }}>ENS: Ethereum Name Service</td>
                            <td style={{ fontSize: "13px" }}>...d98f2b</td>
                            <td style={{ fontSize: "13px" }}>1 wETH over 90 days</td>
                            <td style={{ fontSize: "13px" }}>listed</td>
                            <td style={{ fontSize: "13px" }}>n/a</td>
                            <td style={{ fontSize: "13px" }}><img src='https://htmlcolorcodes.com/assets/images/colors/dark-pink-color-solid-background-1920x1080.png' alt="#" width="22px" height="22px" style={{ borderRadius: "100%" }} /></td>
                        </tr>
                        <tr style={{ background: "#221E37", color: "white" }}>
                            <td style={{ fontSize: "13px" }}><img src="https://openseauserdata.com/files/e2298afb5d5e38b49051b6cd7eab0512.svg" alt="" width="35px" height="35px" /> freshsauce.eth</td>
                            <td style={{ fontSize: "13px" }}>ENS: Ethereum Name Service</td>
                            <td style={{ fontSize: "13px" }}>...d98f2b</td>
                            <td style={{ fontSize: "13px" }}>1 wETH over 90 days</td>
                            <td style={{ fontSize: "13px" }}>listed</td>
                            <td style={{ fontSize: "13px" }}>n/a</td>
                            <td style={{ fontSize: "13px" }}><img src='https://htmlcolorcodes.com/assets/images/colors/dark-pink-color-solid-background-1920x1080.png' alt="#" width="22px" height="22px" style={{ borderRadius: "100%" }} /></td>
                        </tr>
                        <tr style={{ background: "#221E37", color: "white" }}>
                            <td style={{ fontSize: "13px" }}><img src="https://openseauserdata.com/files/e2298afb5d5e38b49051b6cd7eab0512.svg" alt="" width="35px" height="35px" /> freshsauce.eth</td>
                            <td style={{ fontSize: "13px" }}>ENS: Ethereum Name Service</td>
                            <td style={{ fontSize: "13px" }}>...d98f2b</td>
                            <td style={{ fontSize: "13px" }}>1 wETH over 90 days</td>
                            <td style={{ fontSize: "13px" }}>listed</td>
                            <td style={{ fontSize: "13px" }}>n/a</td>
                            <td style={{ fontSize: "13px" }}><img src='https://htmlcolorcodes.com/assets/images/colors/dark-pink-color-solid-background-1920x1080.png' alt="#" width="22px" height="22px" style={{ borderRadius: "100%" }} /></td>
                        </tr>
                        <tr style={{ background: "#221E37", color: "white" }}>
                            <td style={{ fontSize: "13px" }}><img src="https://openseauserdata.com/files/e2298afb5d5e38b49051b6cd7eab0512.svg" alt="" width="35px" height="35px" /> freshsauce.eth</td>
                            <td style={{ fontSize: "13px" }}>ENS: Ethereum Name Service</td>
                            <td style={{ fontSize: "13px" }}>...d98f2b</td>
                            <td style={{ fontSize: "13px" }}>1 wETH over 90 days</td>
                            <td style={{ fontSize: "13px" }}>listed</td>
                            <td style={{ fontSize: "13px" }}>n/a</td>
                            <td style={{ fontSize: "13px" }}><img src='https://htmlcolorcodes.com/assets/images/colors/dark-pink-color-solid-background-1920x1080.png' alt="#" width="22px" height="22px" style={{ borderRadius: "100%" }} /></td>
                        </tr>
                        <tr style={{ background: "#221E37", color: "white" }}>
                            <td style={{ fontSize: "13px" }}><img src="https://openseauserdata.com/files/e2298afb5d5e38b49051b6cd7eab0512.svg" alt="" width="35px" height="35px" /> freshsauce.eth</td>
                            <td style={{ fontSize: "13px" }}>ENS: Ethereum Name Service</td>
                            <td style={{ fontSize: "13px" }}>...d98f2b</td>
                            <td style={{ fontSize: "13px" }}>1 wETH over 90 days</td>
                            <td style={{ fontSize: "13px" }}>listed</td>
                            <td style={{ fontSize: "13px" }}>n/a</td>
                            <td style={{ fontSize: "13px" }}><img src='https://htmlcolorcodes.com/assets/images/colors/dark-pink-color-solid-background-1920x1080.png' alt="#" width="22px" height="22px" style={{ borderRadius: "100%" }} /></td>
                        </tr>
                        <tr style={{ background: "#221E37", color: "white" }}>
                            <td style={{ fontSize: "13px" }}><img src="https://openseauserdata.com/files/e2298afb5d5e38b49051b6cd7eab0512.svg" alt="" width="35px" height="35px" /> freshsauce.eth</td>
                            <td style={{ fontSize: "13px" }}>ENS: Ethereum Name Service</td>
                            <td style={{ fontSize: "13px" }}>...d98f2b</td>
                            <td style={{ fontSize: "13px" }}>1 wETH over 90 days</td>
                            <td style={{ fontSize: "13px" }}>listed</td>
                            <td style={{ fontSize: "13px" }}>n/a</td>
                            <td style={{ fontSize: "13px" }}><img src='https://htmlcolorcodes.com/assets/images/colors/dark-pink-color-solid-background-1920x1080.png' alt="#" width="22px" height="22px" style={{ borderRadius: "100%" }} /></td>
                        </tr>
                        <tr style={{ background: "#221E37", color: "white" }}>
                            <td style={{ fontSize: "13px" }}><img src="https://openseauserdata.com/files/e2298afb5d5e38b49051b6cd7eab0512.svg" alt="" width="35px" height="35px" /> freshsauce.eth</td>
                            <td style={{ fontSize: "13px" }}>ENS: Ethereum Name Service</td>
                            <td style={{ fontSize: "13px" }}>...d98f2b</td>
                            <td style={{ fontSize: "13px" }}>1 wETH over 90 days</td>
                            <td style={{ fontSize: "13px" }}>listed</td>
                            <td style={{ fontSize: "13px" }}>n/a</td>
                            <td style={{ fontSize: "13px" }}><img src='https://htmlcolorcodes.com/assets/images/colors/dark-pink-color-solid-background-1920x1080.png' alt="#" width="22px" height="22px" style={{ borderRadius: "100%" }} /></td>
                        </tr>
                        <tr style={{ background: "#221E37", color: "white" }}>
                            <td style={{ fontSize: "13px" }}><img src="https://openseauserdata.com/files/e2298afb5d5e38b49051b6cd7eab0512.svg" alt="" width="35px" height="35px" /> freshsauce.eth</td>
                            <td style={{ fontSize: "13px" }}>ENS: Ethereum Name Service</td>
                            <td style={{ fontSize: "13px" }}>...d98f2b</td>
                            <td style={{ fontSize: "13px" }}>1 wETH over 90 days</td>
                            <td style={{ fontSize: "13px" }}>listed</td>
                            <td style={{ fontSize: "13px" }}>n/a</td>
                            <td style={{ fontSize: "13px" }}><img src='https://htmlcolorcodes.com/assets/images/colors/dark-pink-color-solid-background-1920x1080.png' alt="#" width="22px" height="22px" style={{ borderRadius: "100%" }} /></td>
                        </tr>
                        <tr style={{ background: "#221E37", color: "white" }}>
                            <td style={{ fontSize: "13px" }}><img src="https://openseauserdata.com/files/e2298afb5d5e38b49051b6cd7eab0512.svg" alt="" width="35px" height="35px" /> freshsauce.eth</td>
                            <td style={{ fontSize: "13px" }}>ENS: Ethereum Name Service</td>
                            <td style={{ fontSize: "13px" }}>...d98f2b</td>
                            <td style={{ fontSize: "13px" }}>1 wETH over 90 days</td>
                            <td style={{ fontSize: "13px" }}>listed</td>
                            <td style={{ fontSize: "13px" }}>n/a</td>
                            <td style={{ fontSize: "13px" }}><img src='https://htmlcolorcodes.com/assets/images/colors/dark-pink-color-solid-background-1920x1080.png' alt="#" width="22px" height="22px" style={{ borderRadius: "100%" }} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="list_view_after_xxl_scrn">
                <BorrowRightSideOptions />
            </div>
        </>
    );
}

export default BorrowListViewRightSideOption;
