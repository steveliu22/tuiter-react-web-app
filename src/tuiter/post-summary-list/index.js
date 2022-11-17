import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostSummaryItem
  from './post-summary-item';
import { findTuitsThunk }
  from '../../services/tuit-thunks';

const PostSummaryList = () => {
  const { tuits, loading } = useSelector(
    state => state.tuitsData)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk())
  }, [dispatch])
  return (
   <ul className="list-group">
     {
       tuits.map(post =>
         <PostSummaryItem
           key={post._id} post={post}/>)
     }
   </ul>
  );
};
export default PostSummaryList;
