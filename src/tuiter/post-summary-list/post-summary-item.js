import React from 'react';

function PostSummaryItem (post) {
  return (
    <li className="list-group-item">
    <div className="row">
        <div className="col-9">
            <div className="text-muted">{post.post.userName}</div>
            <div className="fw-bolder"> {post.post.topic} <i className="fas fa-check-circle"></i> <span
                    className="text-muted fw-normal"> {'- ' + post.post.time}</span></div>
            <div>
                <h6 className="fw-bolder"> {post.post.title} </h6>
            </div>
        </div>
        <div className="col-3"><img className="float-end" src={`/images/${post.post.image}`} width="100px" height="100px"/>
        </div>
    </div>
</li>)
}

export default PostSummaryItem;
