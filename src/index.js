import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';
import ApprovalCard from './ApprovalCard';
import SeasonDisplay from './SeasonDisplay';
import faker from 'faker'

const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => {
            console.log(position);
        },
        (error) => {
            console.log(error);
        }
    );
    
    return (
        

        <div className='ui container comments'>
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

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);