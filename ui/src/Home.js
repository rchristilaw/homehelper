import React from "react";
import NotePad from "./notes/Notepad";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <NotePad/>
        );
    }
}

export default Home;