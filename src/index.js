import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment'
import faker from 'faker'

const App = () => {
    return (
        <div className="ui container comments">
            <Comment author='Andrew' timeAgo='Yesterday at 5:00PM' text='Cool story bro!' avatar={faker.image.avatar()} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);