import React from "react";
import NotePad from "./notes/Notepad";
import StockCentral from "./stocks/StockCentral";



class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    getCurrentPage = () => {
        const currentRoute = this.props.route;

        if (currentRoute === "STOCKS") {
            return <StockCentral/>
        }
        else {
            return <NotePad/>
        }
    }

    render() {
        const currentPage = this.getCurrentPage();
        return (
            <div>
                {currentPage}
            </div>
        );
    }
}

export default Home;