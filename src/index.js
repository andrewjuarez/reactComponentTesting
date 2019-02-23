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
                    latitude: { this.state.lat }
                    <ApprovalCard>
                        <Comment author='Andrew' timeAgo='Yesterday at 5:00PM' text='Cool story bro!' avatar={faker.image.avatar()} />
                    </ApprovalCard>
                    <ApprovalCard>
                        <Comment author='Bob' timeAgo='Yesterday at 5:00PM' text='I am hungry' avatar={faker.image.avatar()} />
                    </ApprovalCard>
                    <ApprovalCard>
                        <Comment author='troll master' timeAgo='Yesterday at 5:00PM' text='HAHAHAHA' avatar={faker.image.avatar()} />
                    </ApprovalCard>
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