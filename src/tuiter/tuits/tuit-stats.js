import React from 'react'
import { useDispatch } from 'react-redux'
import { updateTuitThunk } from '../../services/tuit-thunks'

function TuitStats (tuit) {
  const dispatch = useDispatch();

  const onLikeFunc = () => dispatch(updateTuitThunk({
    ...tuit.tuit,
    likes: tuit.tuit.likes + 1
  }))

  const onDislikeFunc = () => dispatch(updateTuitThunk({
    ...tuit.tuit,
    dislikes: tuit.tuit.dislikes + 1
  }))

  return (
        <div className='row'>
            <div className='col-2'> <i class="far fa-comment"></i> {tuit.tuit.replies} </div>
            <div className='col-2'> <i class="fas fa-retweet"></i> {tuit.tuit.retuits} </div>
            <div className='col-3'> <i onClick={onLikeFunc} className="bi bi-heart-fill me-2 text-danger"></i> {tuit.tuit.likes}  </div>
            <div className='col-3'> <i onClick={onDislikeFunc} className="fas fa-thumbs-down me-2"></i> {tuit.tuit.dislikes}  </div>
            <div className='col-1'> <i class="fas fa-share-alt"></i></div>
        </div>
  )
}

export default TuitStats
