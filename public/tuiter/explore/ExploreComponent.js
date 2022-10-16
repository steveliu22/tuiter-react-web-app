import PostSummaryList from './PostSummaryList/index.js'

const ExploreComponent = () => {
  return (`
    <div class="row w-100">
    <div class="col-11">
        <div class="position-relative">
            <input class="ps-5 form-control rounded-pill" placeholder="Search Tuiter">
            <span class="position-absolute wd-search-tuiter"> <i class="fa fa-search"></i></span>
        </div>
    </div>
    <div class="col-1 pt-1"> <i class="fas fa-cog fs-4 text-primary"></i> </div>
    </div>

    <ul class="nav nav-tabs mt-1 mb-1">
    <li class="nav-item">
        <a class="nav-link active" href="../for-you.html">For you</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="../trending.html">Trending</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="../news.html">News</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="../sports.html">Sports</a>
    </li>
    <li class="nav-item d-none d-md-block">
        <a class="nav-link" href="../entertainment.html">Entertainment</a>
    </li>
    </ul>
    <div class="position-relative ">
        <img src="../../../images/starship.jpeg" width="100%"> </img>
        <h1 class="position-absolute bottom-0 left-0 text-white fw-bolder">SpaceX's Starship </h1>
    </div>
    
    ${PostSummaryList()}`)
}
export default ExploreComponent
