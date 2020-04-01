import React from "react";

import API from "./utils/Api";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            notes: [],
        };
    }

    render() {
        let notes = this.state.notes

        let noteDivs = notes ? notes.map(item => <div key={item.id}> {item.note} </div>) : (<div>No Notes</div>);

        return (
            <div>
                {noteDivs}
            </div>
        );
    }

    async componentDidMount() {
        let userData = await API.get('note/get', {
            params: {
              user: 1 //hardcode for now
            }
          })

        // Parse the results for ease of use.
        let notes = userData.data;


        this.setState({
            notes: notes
        });
    }
}

export default Home;