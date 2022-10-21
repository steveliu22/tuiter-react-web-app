import React from 'react'
import PostSummaryList from '../post-summary-list'
import './index.css'

const ExploreComponent = () => {
  return (
        <>
      <div className="row w-100">
      <div className="col-11">
          <div className="position-relative">
              <input className="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>
              <span className="position-absolute wd-search-tuiter"> <i className="fa fa-search"></i></span>
          </div>
      </div>
      <div className="col-1 pt-1"> <i className="fas fa-cog fs-4 text-primary"/> </div>
      </div>

      <ul className="nav nav-tabs mt-1 mb-1">
      <li className="nav-item">
          <a className="nav-link active" href="#">For you</a>
      </li>
      <li className="nav-item">
          <a className="nav-link" href="#">Trending</a>
      </li>
      <li className="nav-item">
          <a className="nav-link" href="#">News</a>
      </li>
      <li className="nav-item">
          <a className="nav-link" href="#">Sports</a>
      </li>
      <li className="nav-item d-none d-md-block">
          <a className="nav-link" href="#">Entertainment</a>
      </li>
      </ul>
      <div className="position-relative ">
          <img src="../images/starship.jpeg" width="100%"/>
          <h1 className="position-absolute bottom-0 left-0 text-white fw-bolder">SpaceX's Starship </h1>
      </div>

      <PostSummaryList/>
      </>)
}
export default ExploreComponent
