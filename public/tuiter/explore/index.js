import NavigationSidebar from './NavigationSidebar/index.js'
import WhoToFollowList from './WhoToFollowList/index.js'
import ExploreComponent from './ExploreComponent.js'
/* eslint-env jquery */
function exploreComponent () {
  $('#wd-explore').append(`
    <h2>Explore</h2>
   <div class="row">
    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
    <!--<h3>Navigation Sidebar</h3>-->
     ${NavigationSidebar()}
    </div>
    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-6 col-xl-6 col-xxl-6">
    <!--<h3>ExploreComponent</h3>-->
    ${ExploreComponent()}
    </div>
    <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
    <!--<h3>WhoToFollowList</h3>-->
    ${WhoToFollowList()}
    </div>
   </div>
    `)
}
$(exploreComponent)
