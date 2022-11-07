import React from 'react';
import NavigationSidebar from './navigation-sidebar';
import WhoToFollowList from './who-to-follow-list';
import whoReducer
  from './reducers/who-reducer';
import tuitsReducer from './reducers/tuits-reducer';
import { configureStore }
  from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import '@fortawesome/fontawesome-free/css/all.css'
import ExploreComponent from './explore';

const store = configureStore(
  { reducer: { who: whoReducer, tuits: tuitsReducer } });

function TuiterExplore () {
  return (
  <Provider store={store}>
   <div className="row">
    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
     <NavigationSidebar defaultActive = 'explore'/>
    </div>
    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-6 col-xl-6 col-xxl-6">
    <ExploreComponent/>
    </div>
    <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
    <WhoToFollowList/>
    </div>
   </div>
   </Provider>
  )
}
export default TuiterExplore
