const NavigationSidebar = () => {
  return (`
    <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fab fa-twitter text-white"></i></a>
        <a href="#" class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-1">
                    <i class="fas fa-home"></i>
                </div>
                <div class="col-10 d-none d-xl-block">
                    Home
                </div>
            </div>
        </a>
        <a href="#" class="list-group-item list-group-item-action active">
            <div class="row">
                <div class="col-1">
                    <i class="fas fa-hashtag"></i>
                </div>
                <div class="col-10 d-none d-xl-block">
                    Explore
                </div>
            </div>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-1">
                    <i class="fas fa-envelope"></i>
                </div>
                <div class="col-10 d-none d-xl-block">
                    Messages
                </div>
            </div>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-1">
                    <i class="fas fa-bookmark"></i>
                </div>
                <div class="col-10 d-none d-xl-block">
                    Bookmarks
                </div>
            </div>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-1">
                    <i class="fas fa-list"></i>
                </div>
                <div class="col-10 d-none d-xl-block">
                    Lists
                </div>
            </div>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-1">
                    <i class="fas fa-user-alt"></i>
                </div>
                <div class="col-10 d-none d-xl-block">
                    Profile
                </div>
            </div>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
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
    <button type="button" class="btn btn-primary w-100 mt-1 rounded-pill">Tuit</button>`)
}

export default NavigationSidebar
