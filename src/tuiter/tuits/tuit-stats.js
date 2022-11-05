import React from 'react'

function TuitStats (tuit) {
  return (
        <div className='row'>
            <div className='col-3'> <i class="far fa-comment"></i> {tuit.tuit.replies} </div>
            <div className='col-3'> <i class="fas fa-retweet"></i> {tuit.tuit.retuits} </div>
            <div className='col-3'> {tuit.tuit.liked ? <i class="fas fa-heart text-danger"></i> : <i class="far fa-heart"></i>} {tuit.tuit.likes}  </div>
            <div className='col-3'> <i class="fas fa-share-alt"></i></div>
        </div>
  )
}

export default TuitStats
