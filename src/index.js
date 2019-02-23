import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';
import ApprovalCard from './ApprovalCard';
import SeasonDisplay from './SeasonDisplay';
import faker from 'faker'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lat: null, errorMessage: '' };
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude });
            },
            (error) => {
                this.setState({ errorMessage: error.message });
            }
        );
    }

    render() {
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        } 
        
        if(!this.state.errorMessage && this.state.lat) {
            return (
                <div className='ui container comments'>
                    <SeasonDisplay lat={this.state.lat} />
                </div>
            )
        }

        return <div><h3>Loading...</h3></div>
    }   
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);