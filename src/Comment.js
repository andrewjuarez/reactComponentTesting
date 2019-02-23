import React from 'react'

const Comment = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img src={props.avatar} alt="Avatar"></img>
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
            </div>
            <div className="metadata">
                <span className="date">{props.timeAgo}</span>
            </div>
            <div className="text">{props.text}</div>
        </div>
    )
}

export default Comment;