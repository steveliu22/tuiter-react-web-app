import React from 'react';
import whoArray from './who.json';
import WhoToFollowListItem
  from './who-to-follow-list-item';

function WhoToFollowList () {
  return (
      <ul className="list-group">
      <li className="list-group-item">
          <h6 className="fw-bolder m-0">Who to follow</h6>
      </li>
      {
        whoArray.map(who => {
          return (<WhoToFollowListItem
            key= {who._id}
            who= {who}/>)
        })
      }
      </ul>
  )
}

export default WhoToFollowList
