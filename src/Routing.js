import { BrowserRouter as Router, Route } from "react-router-dom";
import AfterPageHeader from "./AfterPageHeader/AfterPageHeader";
import DetailDataAfterHeader from "./DetailPage/DetailDataAfterHeader";
import LoanDetailPage from "./DetailPage/LoanDetailPage";
import DetailPageData from "./DetailPage/DetailPageData";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Collateral from "./MainContainer/Collateral";
import Loans from "./MainContainer/Loans";
import Offers from "./MainContainer/Offers";
import BorrowAfterPageHeader from "./AfterPageHeader/BorrowAfterPageHeader";
import BorrowAssets from "./MainContainer/BorrowAssets";
import BorrowDetailDataAfterHeader from "./DetailPage/BorrowDetailDataAfterHeader";
import BorrowDetailPageData from "./DetailPage/BorrowDetailPageData";
import ListView from "./MainContainer/ListView";
import BorrowListView from "./MainContainer/BorrowListView";

function Routing() {
    return (
        <Router>
            <Route exact path="/">
                <Header />
                <AfterPageHeader page="lend_assets" />
                <Collateral />
                <Footer />
            </Route>
            <Route exact path="/list_view">
                <Header />
                <AfterPageHeader page="lend_assets" />
                <ListView />
                <Footer />
            </Route>
            <Route exact path="/lend/assets/details">
                <Header />
                <DetailDataAfterHeader page="lend_assets_details" />
                <DetailPageData />
                <Footer />
            </Route>
            <Route exact path="/lend/assets/details/loans">
                <Header />
                <DetailDataAfterHeader page="lend_loans_details" />
                <LoanDetailPage />
                <Footer />
            </Route>
            <Route exact path="/lend/loans">
                <Header />
                <AfterPageHeader page="lend_loans" />
                <Loans />
                <Footer />
            </Route>
            <Route exact path="/lend/offers">
                <Header />
                <AfterPageHeader page="lend_offers" />
                <Offers />
                <Footer />
            </Route>
            <Route exact path="/borrow/assets">
                <Header />
                <BorrowAfterPageHeader page="borrow_assets" />
                <BorrowAssets />
                <Footer />
            </Route>
            <Route exact path="/borrow/assets/listview">
                <Header />
                <BorrowAfterPageHeader page="borrow_assets" />
                <BorrowListView />
                <Footer />
            </Route>
            <Route exact path="/borrow/loans">
                <Header />
                <BorrowAfterPageHeader page="borrow_loans" />
                <Loans />
                <Footer />
            </Route>
            <Route exact path="/borrow/offers">
                <Header />
                <BorrowAfterPageHeader page="borrow_offers" />
                <Offers />
                <Footer />
            </Route>
            <Route exact path="/borrow/assets/details">
                <Header />
                <BorrowDetailDataAfterHeader page="borrow_assets_details" />
                <BorrowDetailPageData />
                <Footer />
            </Route>
            <Route exact path="/borrow/assets/details/loans">
                <Header />
                <BorrowDetailDataAfterHeader page="borrow_assets_details" />
                <LoanDetailPage />
                <Footer />
            </Route>
        </Router>
    );
}
export default Routing;



