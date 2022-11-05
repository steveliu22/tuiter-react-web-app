import React, { useState } from 'react';

const NavigationSidebar = () => {
  const [active, setActive] = useState('home');
  return (
   <div className="list-group">
     <a className="list-group-item" href="#"> Tuiter</a>
     <a className={`list-group-item
                    ${active === 'home' ? 'active' : ''}`} onClick={() => { setActive('home') }}>

            <div class="row">
                <div class="col-1">
                    <i class="fas fa-home"></i>
                </div>
                <div class="col-10 d-none d-xl-block">
                    Home
                </div>
            </div>
     </a>

     <a className={`list-group-item
                    ${active === 'explore' ? 'active' : ''}`} onClick={() => { setActive('explore') }} href="#">
            <div class="row">
                <div class="col-1">
                    <i class="fas fa-hashtag"></i>
                </div>
                <div class="col-10 d-none d-xl-block">
                    Explore
                </div>
            </div>
     </a>

     <a className={`list-group-item
                    ${active === 'labs' ? 'active' : ''}`} onClick={() => { setActive('labs') }} href="#">
       <div class="row">
                <div class="col-1">
                <i class="fa-solid fa-flask"></i>
                </div>
                <div class="col-10 d-none d-xl-block">
                    Labs
                </div>
            </div>
     </a>
     <a className={`list-group-item
                    ${active === 'notifications' ? 'active' : ''}`} onClick={() => { setActive('notifications') }} href="#">
            <div class="row">
                <div class="col-1">
                  <i class="fa-regular fa-bell"></i>
                </div>
                <div class="col-10 d-none d-xl-block">
                    Notifications
                </div>
            </div>
     </a>

     <a className={`list-group-item
                    ${active === 'messages' ? 'active' : ''}`} onClick={() => { setActive('messages') }} href="#">
            <div class="row">
                <div class="col-1">
                    <i class="fas fa-envelope"></i>
                </div>
                <div class="col-10 d-none d-xl-block">
                    Messages
                </div>
            </div>
     </a>
     <a className={`list-group-item
                    ${active === 'bookmarks' ? 'active' : ''}`} onClick={() => { setActive('bookmarks') }} href="#">
            <div class="row">
                <div class="col-1">
                    <i class="fas fa-bookmark"></i>
                </div>
                <div class="col-10 d-none d-xl-block">
                    Bookmarks
                </div>
            </div>
     </a>
     <a className={`list-group-item
                    ${active === 'lists' ? 'active' : ''}`} onClick={() => { setActive('lists') }} href="#">
            <div class="row">
                <div class="col-1">
                    <i class="fas fa-list"></i>
                </div>
                <div class="col-10 d-none d-xl-block">
                    Lists
                </div>
            </div>
     </a>
     <a className={`list-group-item
                    ${active === 'profile' ? 'active' : ''}`} onClick={() => { setActive('profile') }} href="#">
            <div class="row">
                <div class="col-1">
                    <i class="fas fa-user-alt"></i>
                </div>
                <div class="col-10 d-none d-xl-block">
                    Profile
                </div>
            </div>
     </a>
     <a className={`list-group-item
                    ${active === 'more' ? 'active' : ''}`} onClick={() => { setActive('more') }} href="#">
            <div class="row">
                <div class="col-1">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
                <div class="col-10 d-none d-xl-block">
                    More
                </div>
            </div>
     </a>
   </div>
  );
};
export default NavigationSidebar;
