import React from 'react';
import ExploreComponent from './explore';
import NavigationSidebar from './navigation-sidebar';
import WhoToFollowList from './who-to-follow-list';
import '@fortawesome/fontawesome-free/css/all.css'

function Tuiter () {
  return (
   <div className="row">
    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
     <NavigationSidebar/>
    </div>
    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-6 col-xl-6 col-xxl-6">
    <ExploreComponent/>
    </div>
    <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
    <WhoToFollowList/>
    </div>
   </div>
  )
}
export default Tuiter
