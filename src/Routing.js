import { BrowserRouter as Router, Route } from "react-router-dom";
import AfterPageHeader from "./AfterPageHeader/AfterPageHeader";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Collateral from "./MainContainer/Collateral";
import Loans from "./MainContainer/Loans";
import Offers from "./MainContainer/Offers";

function Routing() {
    return (
        <Router>
            <Route exact path="/">
                <Header />
                <AfterPageHeader page="lend_assets" />
                <Collateral />
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
        </Router>
    );
}
export default Routing;



