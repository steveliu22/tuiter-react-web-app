const renderNumTuits = (post) => {
  if (post.tweets !== undefined) {
    return (`                                
    <div class="text-muted">
        123K Tweets
    </div>`)
  }

  return ''
}

function PostSummaryItem (post) {
  return (`                    
    <li class="list-group-item">
    <div class="row">
        <div class="col-9">
            <div class="text-muted">${post.topic}</div>
            <div class="fw-bolder"> ${post.userName} <i class="fas fa-check-circle"></i> <span
                    class="text-muted fw-normal"> ${'- ' + post.time}</span></div>
            <div>
                <h6 class="fw-bolder"> ${post.title} </h6>
            </div>
            ${renderNumTuits(post)}
        </div>
        <div class="col-3"><img class="float-end" src="${post.image}" width="100px" height="100px">
        </div>
    </div>
</li>`)
}

export default PostSummaryItem
