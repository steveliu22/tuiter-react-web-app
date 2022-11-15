import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const NavigationSidebar = (defaultActive) => {
  const [active, setActive] = useState(defaultActive.defaultActive);
  return (
   <div className="list-group">
     <a className="list-group-item" href="#"> Tuiter</a>
     <Link to='/tuiter' className={`list-group-item
                    ${active === 'home' ? 'active' : ''}`} onClick={() => { setActive('home') }}>

            <div className="row">
                <div className="col-1">
                    <i className="fas fa-home"></i>
                </div>
                <div className="col-10 d-none d-xl-block">
                    Home
                </div>
            </div>
     </Link>

     <Link to='/tuiter/explore' className={`list-group-item
                    ${active === 'explore' ? 'active' : ''}`} onClick={() => { setActive('explore') }} href="tuiter/explore">
            <div className="row">
                <div className="col-1">
                    <i className="fas fa-hashtag"></i>
                </div>
                <div className="col-10 d-none d-xl-block">
                    Explore
                </div>
            </div>
     </Link>

     <a className={`list-group-item
                    ${active === 'labs' ? 'active' : ''}`} onClick={() => { setActive('labs') }} href="#">
       <div className="row">
                <div className="col-1">
                <i className="fa-solid fa-flask"></i>
                </div>
                <div className="col-10 d-none d-xl-block">
                    Labs
                </div>
            </div>
     </a>
     <a className={`list-group-item
                    ${active === 'notifications' ? 'active' : ''}`} onClick={() => { setActive('notifications') }} href="#">
            <div className="row">
                <div className="col-1">
                  <i className="fa-regular fa-bell"></i>
                </div>
                <div className="col-10 d-none d-xl-block">
                    Notifications
                </div>
            </div>
     </a>

     <a className={`list-group-item
                    ${active === 'messages' ? 'active' : ''}`} onClick={() => { setActive('messages') }} href="#">
            <div className="row">
                <div className="col-1">
                    <i className="fas fa-envelope"></i>
                </div>
                <div className="col-10 d-none d-xl-block">
                    Messages
                </div>
            </div>
     </a>
     <a className={`list-group-item
                    ${active === 'bookmarks' ? 'active' : ''}`} onClick={() => { setActive('bookmarks') }} href="#">
            <div className="row">
                <div className="col-1">
                    <i className="fas fa-bookmark"></i>
                </div>
                <div className="col-10 d-none d-xl-block">
                    Bookmarks
                </div>
            </div>
     </a>
     <a className={`list-group-item
                    ${active === 'lists' ? 'active' : ''}`} onClick={() => { setActive('lists') }} href="#">
            <div className="row">
                <div className="col-1">
                    <i className="fas fa-list"></i>
                </div>
                <div className="col-10 d-none d-xl-block">
                    Lists
                </div>
            </div>
     </a>
     <a className={`list-group-item
                    ${active === 'profile' ? 'active' : ''}`} onClick={() => { setActive('profile') }} href="#">
            <div className="row">
                <div className="col-1">
                    <i className="fas fa-user-alt"></i>
                </div>
                <div className="col-10 d-none d-xl-block">
                    Profile
                </div>
            </div>
     </a>
     <a className={`list-group-item
                    ${active === 'more' ? 'active' : ''}`} onClick={() => { setActive('more') }} href="#">
            <div className="row">
                <div className="col-1">
                    <i className="fas fa-ellipsis-h"></i>
                </div>
                <div className="col-10 d-none d-xl-block">
                    More
                </div>
            </div>
     </a>
   </div>
  );
};
export default NavigationSidebar;
