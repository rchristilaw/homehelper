import React from "react";

import API from "./utils/Api";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            name: "Empty",
        };
    }

    render() {
        return (
            <div>{this.state.name}</div>
        );
    }

    async componentDidMount() {
        let userData = await API.get('user');

        // Parse the results for ease of use.
        let userName = userData.data.testUser;


        this.setState({
            name: userName
        });
    }
}

export default Home;